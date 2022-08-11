import { Component } from '../../utils/component';
import { ChatHeader } from '../../components/chat-header';
import { ChatContent } from '../../components/chat-content';
import { ChatFooter } from '../../components/chat-footer';
import { MESSAGES_IN_CHAT } from '../../utils/fixtures';

class ChatContainerComponent extends Component {
  render() {
    return `
    {{{chatHeader}}}
    {{{chatContent}}}
    {{{chatFooter}}}
    `;
  }
}
export const ChatContainer = ({
  avatar,
  recipientName,
}: {
  avatar: string;
  recipientName: string;
}) =>
  new ChatContainerComponent('div', {
    chatHeader: new ChatHeader('div', {
      avatar,
      recipientName,
    }),
    chatContent: new ChatContent('div', {
      messages: MESSAGES_IN_CHAT,
    }),
    chatFooter: new ChatFooter('div', {}),

    attr: { class: 'rightScreen' },
  });
