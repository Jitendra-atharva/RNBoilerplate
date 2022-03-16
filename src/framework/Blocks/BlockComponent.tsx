// Do not change anything in the protected area. Doing so will be detected and your commit will be rejected.
// Protected Area Start
import { Component } from 'react';
import { IBlock } from './IBlock';
import { runEngine } from '../RunEngine';
import { Message } from '../Message';
import { Keyboard } from 'react-native';


export class BlockComponent<Props, S, SS> extends Component<Props, S, SS>
  implements IBlock {
  isLoaded = false;

  send: (message: Message) => void;

  blockId: string;

  subScribedMessages: string[];

  constructor(props: Props) {
    super(props);
    const uuidv4 = require("uuid/v4");
    this.blockId = uuidv4();
    this.send = message => runEngine.sendMessage(this.blockId, message);
    this.subScribedMessages = [''];
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  receive(from: string, message: Message): void {}

  async componentDidMount() {
  }

  async componentWillUnmount() {
    Keyboard.dismiss();
    runEngine.unSubscribeFromMessages(this, this.subScribedMessages);
  } 
}

// Protected Area End
