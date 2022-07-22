import Handlebars from 'handlebars';
import chatBox from '../../components/chat-box';
import tmpl from 'bundle-text:./tmpl.hbs';
import './index.less';

Handlebars.registerPartial('chatList', tmpl);

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

export default (props = {}) => {
  const listOfMessages = messagesArray.map((message, index) => {
    return chatBox({
      avatar: message.avatar,
      message: message.message,
      messageTime: message.messageTime,
      senderIsYou: message.senderIsYou,
      recipientName: message.recipientName,
      count: message.count,
      index,
    });
  });
  return Handlebars.compile(tmpl)({
    messages: listOfMessages,
  });
};
