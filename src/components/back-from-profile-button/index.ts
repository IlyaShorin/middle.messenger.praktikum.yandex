import { Component } from '../../utils/component';
import * as arrowLeft from '../../images/arrow.svg';

import styles from './index.module.less';

export class BackFromProfileButton extends Component {
  constructor(
    tag: string,
    props: {
      attr?: { class?: string };
      events?: { click: (e: MouseEvent) => void };
    }
  ) {
    props.attr = { class: styles['container'] };
    super(tag, props);
  }

  render() {
    return `
  <button class='${styles['button']}' id='back-button'><img
      src='${arrowLeft}'
      alt='назад'
      class='${styles['arrow']}'
    /></button>
  `;
  }
}
