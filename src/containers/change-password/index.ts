import { Component } from '../../utils/component';
import styles from './index.module.less';

export class ChangePassword extends Component {
  render() {
    return `
  {{{backFromProfileButton}}}
<div class='${styles['container']}'>
  <div class='${styles['width']}'>
    {{{profileAvatar}}}
    <form class='${styles['form']}'>
      {{{profileInputOldPassword}}}
      {{{profileInputPassword}}}
      {{{profileInputPasswordAgain}}}
    <div class='${styles['editButtonsContainer']}'>
      {{{submit}}}
    </div>
    </form>
  </div>
</div>
  `;
  }
}
