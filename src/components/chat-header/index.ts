import { Component } from '../../utils/component';
import { Props } from '../../utils/types';
import * as styles from './index.module.less';
import * as dots from '../../images/dots.svg';

export class ChatHeader extends Component {
  constructor(tag: string, props: Props) {
    props['attr'].class = styles['header'];
    super(tag, props);
  }

  render(): string {
    return `
   
  <div class='${styles['recipient']}'>
    <img src='{{avatar}}' class='${styles['avatar']}' alt='Фото пользователя' />
    <p>{{ recipientName }}</p>
  </div>
  <div class='${styles['dotsContainer']}'>
    <button class='${styles['dotsButtonClass']}'>
      <img src='${dots}' />
    </button>
  </div>

    `;
  }
}
