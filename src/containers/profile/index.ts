import { Component } from '../../utils/component';
import * as styles from './index.module.less';

export class Profile extends Component {
  addEvents(): void {
    this.element.querySelector('button')!.addEventListener('click', () => {
      history.back();
    });
  }

  render(): string {
    return `
  {{{backFromProfileButton}}}
<div class='${styles['container']}'>
  <div class='${styles['width']}'>
    {{{profileAvatar}}}
    {{{profileForm}}}
    <div class='${styles['editButtonsContainer']}'>
    {{{editProfileButton}}}
    {{{changePasswordButton}}}
    {{{exitButton}}}
    </div>
  </div>
</div>
  `;
  }
}
