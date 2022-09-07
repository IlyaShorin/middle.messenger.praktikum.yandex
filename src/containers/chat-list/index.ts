import { Component } from '../../utils/component';
import { ChatBox } from '../../components/chat-box';
import { MESSAGES } from '../../utils/fixtures';
import './index.less';

class ChatListComponent extends Component {
  render() {
    return `
     {{#each messages}}
       {{{this}}}
    {{/each}}
    `;
  }
}

export const ChatList = () =>
  new ChatListComponent('ul', {
    attr: { class: 'chatList' },
    messages: MESSAGES.map((message, index) =>
      new ChatBox('li', {
        avatar: message.avatar,
        message: message.message,
        messageTime: message.messageTime,
        senderIsYou: message.senderIsYou,
        recipientName: message.recipientName,
        count: message.count,
        index,
      }).precompile()
    ),
  });
