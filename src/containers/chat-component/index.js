import Handlebars from 'handlebars';
import tmpl from 'bundle-text:./tmpl.hbs';
import chatHeader from '../../components/chat-header';
import chatFooter from '../../components/chat-footer';
import chatContent from '../../components/chat-content';
import './index.less';

Handlebars.registerPartial('chatComponent', tmpl);

export default ({ avatar, recipientName }) => {
  return Handlebars.compile(tmpl)({
    chatHeader: chatHeader({ avatar, recipientName }),
    chatFooter: chatFooter(),
    chatContent: chatContent(),
  });
};
