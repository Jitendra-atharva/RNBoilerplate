import MessageEnum, {getName} from '../MessageEnum';
import {IBlock} from './IBlock';
import {runEngine} from '../RunEngine';
import {Message} from '../Message';
import {Block} from '../Blocks/Block';

let config = require('../../utilities/networkConfig');

export default class RestApiClientBlock<Entity> extends Block {
  private props: any;

  private static instance: RestApiClientBlock<any>;

  private constructor() {
    super();
    runEngine.attachBuildingBlock(this as IBlock, [
      getName(MessageEnum.RestAPIRequestMessage),
    ]);
  }

  static getInstance(): RestApiClientBlock<any> {
    if (!RestApiClientBlock.instance) {
      RestApiClientBlock.instance = new RestApiClientBlock();
    }
    return RestApiClientBlock.instance;
  }

  async receive(from: string, message: Message) {
    if (getName(MessageEnum.RestAPIRequestMessage) === message.id) {
      const uniqueApiCallId = message.messageId;
      const {
        RestApiMethod: method,
        RestApiEndPoint: endpoint,
        RestApiHeader: headers,
        RestApiBody: body,
        NavigationPropsMessage: props,
      } = message.properties;
      console.log('RestApiBody', body);

      this.props = props;
      this.makeApiCall(uniqueApiCallId, method, endpoint, headers, body);
    }
  }

  async makeApiCall(
    uniqueApiCallId: string,
    method: string,
    endpoint: string,
    headers: any,
    body: any,
  ) {
    let fullURL =
      endpoint.indexOf('://') === -1
        ? config.baseURL + '/' + endpoint
        : endpoint;
    let apiResponseMessage = new Message(
      getName(MessageEnum.RestAPIResponseMessage),
    );
    apiResponseMessage.addData(
      getName(MessageEnum.RestAPIResponseDataMessage),
      uniqueApiCallId,
    );

    try {
      let response = await fetch(fullURL, {
        method: method.toUpperCase(),
        headers: headers.length ? JSON.parse(headers) : headers,
        body: body,
      });
      if (response.status == 200 || response.status == 201) {
        let responseJson = await response.json();
        apiResponseMessage.addData(
          getName(MessageEnum.RestAPIResponseSuccessMessage),
          responseJson,
        );
      } else if (response.status == 404) {
        apiResponseMessage.addData(
          getName(MessageEnum.RestAPIResponseErrorMessage),
          'DNS Server Not Responding. Please try again later.',
        );
      } else {
        apiResponseMessage.addData(
          getName(MessageEnum.RestAPIResponseErrorMessage),
          'An error has occurred. Please try again later.',
        );
      }
    } catch (error) {
      apiResponseMessage.addData(
        getName(MessageEnum.RestAPIResponseErrorMessage),
        'An error has occurred. Please try again later.',
      );
    }
    if (this.props) {
      apiResponseMessage.addData(
        getName(MessageEnum.NavigationPropsMessage),
        this.props,
      );
    }
    this.send(apiResponseMessage);
  }
}
