import {AppContext} from '../../framework/AppContext';
import {BlockComponent} from '../../framework/Blocks/BlockComponent';
import {IBlock} from '../../framework/Blocks/IBlock';
import {Message} from '../../framework/Message';
import MessageEnum, {getName} from '../../framework/MessageEnum';
import {runEngine} from '../../framework/RunEngine';
import {customAlert, getHeaders} from '../../utilities/Util';
const config = require('../../utilities/networkConfig');
import {useTranslation} from 'react-i18next';
const {t, i18n} = useTranslation();
export interface Props {
  navigation: any;
}

interface S {
  userName: string;
  password: string;
  isShowPassword: boolean;
}

interface SS {}

export default class LoginController extends BlockComponent<Props, S, SS> {
  userNameRef: any = '';
  passwordRef: any = '';
  loginApiCallId: any = '';

  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);
    // REGISTER EVENT
    this.subScribedMessages = [getName(MessageEnum.RestAPIResponseMessage)];

    this.state = {
      userName: 'eve.holt@reqres.in',
      password: 'pistol',
      isShowPassword: false,
    };

    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
  }

  static contextType = AppContext;

  UNSAFE_componentWillMount() {}
  async componentDidMount() {
    super.componentDidMount();
  }
  async componentWillUnmount() {
    super.componentWillUnmount();
  }

  //SCREEN RELATED FUNCTION AND OTHER STUFF START
  handleChangeUserName = (e: string) => {
    this.setState({userName: e});
  };
  handleChangePassword = (e: string) => {
    this.setState({password: e});
  };

  onPressLogin = () => {
    if (!this.context.state.isConnected) {
      customAlert('No Internet', 'Turn on internet connection and try again');
      return;
    }
    this.doLoginApiCall();
  };

  //SCREEN RELATED FUNCTION AND OTHER STUFF END

  //SCREEN RELATED API CALL START
  doLoginApiCall = () => {
   
  };

  //SCREEN RELATED API CALL END

  //HANDLE AND GET API RESPONSE

  async receive(from: string, message: Message) {
    console.log('[Login]');

  }
}
