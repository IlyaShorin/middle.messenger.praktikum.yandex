import Handlebars from 'handlebars';
import tmpl from 'bundle-text:./tmpl.hbs';
import chatList from '../../containers/chat-list/idnex.js';
import chatContainer from '../../containers/chat-component/index.js';

import search from '../../components/search/index.js';
import './index.less';

Handlebars.registerPartial('main', tmpl);

export const mainPage = (() => {
  let chatIsSelected = true;

  return Handlebars.compile(tmpl)({
    search: search(),
    chatList: chatList(),
    chatContainer: chatContainer({
      avatar: 'https://picsum.photos/200',
      recipientName: 'Петя',
    }),

    chatIsSelected,
  });
})();
