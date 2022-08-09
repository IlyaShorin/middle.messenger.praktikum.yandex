import { Component } from '../../utils/component';
import { ChatBox } from '../../components/chat-box';
import './index.less';

const messagesArray = [
  {
    avatar: 'https://picsum.photos/200',
    senderIsYou: true,
    message: 'Привет земляне',
    messageTime: '12:01',
    recipientName: 'Вася',
  },
  {
    avatar: 'https://picsum.photos/200',
    senderIsYou: false,
    message: 'Привет земляне',
    messageTime: '12:01',
    recipientName: 'Петя',
  },
  {
    avatar: 'https://picsum.photos/200',
    senderIsYou: true,
    message: 'Привет земляне',
    messageTime: '12:01',
    recipientName: 'Батя',
    count: 3,
  },
];

class ChatListComponent extends Component {
  render() {
    return `
     {{#each messages}}
       {{{this}}}
    {{/each}}
    `;
  }
}

export const ChatList = () => new ChatListComponent('ul', {
  attr: { class: 'chatList' },
  messages: messagesArray.map((message, index) => ChatBox({
    avatar: message.avatar,
    message: message.message,
    messageTime: message.messageTime,
    senderIsYou: message.senderIsYou,
    recipientName: message.recipientName,
    count: message.count,
    index,
  }).precompile()),
});
