import { Component } from '../../utils/component';
import styles from './index.module.less';

export class EditProfile extends Component {
  addEvents(): void {
    this.element.querySelector('button')!.addEventListener('click', () => {
      history.back();
    });
  }

  render() {
    return `
  {{{backFromProfileButton}}}
<div class='${styles['container']}'>
  <div class='${styles['width']}'>
    {{{profileAvatar}}}
    {{{profileForm}}}
  </div>
</div>
  `;
  }
}
