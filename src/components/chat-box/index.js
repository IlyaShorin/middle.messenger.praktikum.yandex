import Handlebars from 'handlebars';
import tmpl from 'bundle-text:./tmpl.hbs';
import styles from './index.module.less';

Handlebars.registerPartial('chatBox', tmpl);

export default ({
  avatar,
  message,
  messageTime,
  recipientName,
  senderIsYou,
  count,
  index,
}) => {
  return Handlebars.compile(tmpl)({
    avatar: avatar,
    message: message,
    messageTime: messageTime,
    recipientName: recipientName,
    senderIsYou: senderIsYou,
    count: count,
    index,
    styles,
  });
};
