import { Component } from '../../utils/component';
import * as styles from './index.module.less';

export class Profile extends Component {
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
