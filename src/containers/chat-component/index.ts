import { Component } from '../../utils/component';
import { ChatHeader } from '../../components/chat-header';
import { ChatContent } from '../../components/chat-content';
import { ChatFooter } from '../../components/chat-footer';

const messages = [
  {
    yourMessage: false,
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, tempore corporis dolorum placeat quae sint ut laborum expedita mollitia dolorem porro odio quibusdam ipsam maxime neque quidem suscipit molestiae id itaque inventore odit quod perferendis modi? Unde mollitia quibusdam quasi cumque dolorem dolores, impedit blanditiis aut est incidunt quae recusandae.',
  },
  {
    yourMessage: false,
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, tempore corporis dolorum placeat quae sint ut laborum expedita mollitia dolorem porro odio quibusdam ipsam maxime neque quidem suscipit molestiae id itaque inventore odit quod perferendis modi? Unde mollitia quibusdam quasi cumque dolorem dolores, impedit blanditiis aut est incidunt quae recusandae.',
  },
  {
    yourMessage: true,
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate accusantium harum numquam nisi, dicta voluptatem rerum asperiores aliquid saepe consectetur?',
  },
  {
    yourMessage: true,
    text: 'Hello world',
  },
];

class ChatContainerComponent extends Component {
  render() {
    return `
    {{{chatHeader}}}
    {{{chatContent}}}
    {{{chatFooter}}}
    `;
  }
}
export const ChatContainer = (props: Record<string, unknown>) => new ChatContainerComponent('div', {
  chatHeader: new ChatHeader('div', {
    avatar: props['avatar'],
    recipientName: props['recipientName'],
    attr: {},
  }),
  chatContent: new ChatContent('div', {
    attr: {},
    messages,
  }),
  chatFooter: new ChatFooter('div', {
    attr: {},
  }),

  attr: { class: 'rightScreen' },
});
