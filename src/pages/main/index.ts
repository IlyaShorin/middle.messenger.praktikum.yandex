import { Component } from '../../utils/component';
import { LinkButton } from '../../components/link-button';
import { Search } from '../../components/search';
import { ChatList } from '../../containers/chat-list';
import { ChatContainer } from '../../containers/chat-component';

import './index.less';

class MainPage extends Component {
  render() {
    return `
  <div class='leftScreen'>
    {{{goToProfileButton}}}
    {{{search}}}
    {{{chatList}}}
  </div>
  <div class='rightScreen'>
    {{#if chatIsSelected}}
      {{{chatContainer}}}
    {{else}}
      <div class='chatIsNotSelected'><p class='tipText'>Выберите чат чтобы
          отправить сообщение</p></div>
    {{/if}}
  </div>
  `;
  }
}

export const mainPage = new MainPage('div', {
  attr: { class: 'mainPage' },
  search: new Search('input', {
    attr: {
      placeholder: 'Поиск',
      name: 'search',
      autocomplete: 'off',
      class: 'search',
    },
  }),
  chatList: ChatList(),
  chatContainer: ChatContainer({
    avatar: 'https://picsum.photos/200',
    recipientName: 'Петя',
  }),
  chatIsSelected: true,
  goToProfileButton: new LinkButton('button', {
    attr: {
      class: 'editProfileButton',
    },
    value: 'Профиль',
    events: {
      click: () => {
        window.location.href = `${window.location.origin}/profile`;
      },
    },
  }),
});
