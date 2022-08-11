import { Component } from '../../utils/component';
import styles from './index.module.less';

export class ChatBox extends Component {
  render() {
    return `
    <li class='${styles['list']}'>
    <div class='${styles['container']}'>
      <img src='{{avatar}}' class='${styles['image']}' alt='Фото пользователя' />
      <div class='${styles['messageBlock']}'>
        <h2 class='${styles['recipientName']}'>{{recipientName}}</h2>
        {{#if senderIsYou}}
          <p class='${styles['message']}'><span class='${styles['accent']}'>Вы:
            </span>{{message}}</p>
        {{else}}
          <p class='${styles['message']}'>{{message}}</p>
        {{/if}}
      </div>
      <div class='${styles['timeAndCountContainer']}'>
        <time class='${styles['time']}'>{{messageTime}}</time>
        {{#if count}}
          <div class='${styles['messagesCount']}'>{{count}}</div>
        {{/if}}
      </div>
    </div>
    </li>
  `;
  }
}
