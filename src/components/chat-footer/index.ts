import { Component } from '../../utils/component';
import { messageFieldRegExp } from '../../utils/consts';
import { Props } from '../../utils/types';
import * as styles from './index.module.less';
import * as arrowRight from '../../images/arrow.svg';
import * as attachIcon from '../../images/attach.svg';

export class ChatFooter extends Component {
  constructor(tag: string, props: Props) {
    props['attr'].class = styles['footer'];
    super(tag, props);
  }

  addEvents(): void {
    this.element
      .querySelector('form')!
      .addEventListener('submit', (e: SubmitEvent) => {
        e.preventDefault();
        if (
          messageFieldRegExp!.test(this.element.querySelector('input')!.value)
        ) {
          console.log(this.element.querySelector('input')!.value);
        } else {
          console.log('invalid');
        }
      });
  }

  render() {
    return `
   
  <button class='${styles['attachButton']}'>
    <img src='${attachIcon}' />
  </button>
  <form class='${styles['form']}'>
  <input
    class='${styles['messageInput']}'
    placeholder='Введите своё сообщение...'
    name='message'
    autocomplete='off'
  />
  </form>
  <button class='${styles['sendButton']}' type="submit">
    <img src='${arrowRight}' />
  </button>

    `;
  }
}
