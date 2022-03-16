import {BlockComponent} from './src/framework/Blocks/BlockComponent';
import NavigationBlock from './src/framework/Blocks/NavigationBlock';
import SingletonFactory from './src/framework/SingletonFactory';

SingletonFactory.getRestBlockInstance();
SingletonFactory.getSessionBlockInstance();
new NavigationBlock();

interface Props {
  navigation: any;
  id: string;
}

// Customizable Area Start
interface S {}

interface SS {}

class Home extends BlockComponent<Props, S, SS> {
  static instance: Home;

  constructor(props: Props) {
    super(props);
    Home.instance = this;
  }

  render() {
    return null;
  }
}

export default Home;
