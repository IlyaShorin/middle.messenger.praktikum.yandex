import { Component } from '../../utils/component';
import { Props } from '../../utils/types';
import * as arrowLeft from '../../images/arrow.svg';

import styles from './index.module.less';

export class BackFromProfileButton extends Component {
  constructor(tag: string, props: Props) {
    props['attr'].class = styles['container'];
    super(tag, props);
  }
  addEvents(): void {
    this.element.querySelector('button')!.addEventListener('click', () => {
      if (window.location.href === 'profile') {
        window.location.href = `${window.location.origin}/main`;
      } else {
        window.location.href = `${window.location.origin}/profile`;
      }
    });
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
