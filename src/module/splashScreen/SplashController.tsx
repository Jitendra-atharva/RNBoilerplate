import {BlockComponent} from '../../framework/Blocks/BlockComponent';
import MessageEnum, {getName} from '../../framework/MessageEnum';
import {Message} from '../../framework/Message';
import {resetTo, setNavigator} from '../../utilities/Navigation';

export interface Props {
  navigation: any;
}

interface S {}

interface SS {}

export default class SplashController extends BlockComponent<Props, S, SS> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  UNSAFE_componentWillMount() {}
  async componentDidMount() {
    super.componentDidMount();
    setNavigator(this.props.navigation);
    setTimeout(() => {
      this.navigation();
    }, 500);
  }
  async componentWillUnmount() {
    super.componentWillUnmount();
  }

  navigation = () => {
    resetTo('App');
  };
  gotoAppScreen(screen: string, item?: any) {
    // Customizable Area Start
    const msg = new Message(getName(MessageEnum.NavigationMessage));
    msg.addData(getName(MessageEnum.NavigationTargetMessage), screen);
    msg.addData(getName(MessageEnum.NavigationPropsMessage), this.props);
    const raiseMessage: Message = new Message(
      getName(MessageEnum.NavigationPayLoadMessage),
    );
    raiseMessage.addData(getName(MessageEnum.NavigationPayLoadMessage), item);
    msg.addData(getName(MessageEnum.NavigationRaiseMessage), raiseMessage);
    this.send(msg);
    // Customizable Area End
  }
}
