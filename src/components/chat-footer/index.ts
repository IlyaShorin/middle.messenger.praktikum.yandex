import { Component } from '../../utils/component';
import { MESSAGE_FIELD_REGEXP } from '../../utils/consts';
import * as styles from './index.module.less';
import * as arrowRight from '../../images/arrow.svg';
import * as attachIcon from '../../images/attach.svg';

export class ChatFooter extends Component {
  constructor(tag: string, props: { attr?: { class?: string } }) {
    props.attr = { class: styles['footer'] };
    super(tag, props);
  }

  addEvents(): void {
    this.element
      .querySelector('form')!
      .addEventListener('submit', (e: SubmitEvent) => {
        e.preventDefault();
        if (
          MESSAGE_FIELD_REGEXP!.test(this.element.querySelector('input')!.value)
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
    <img src='${attachIcon}' alt='добавить файл' />
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
