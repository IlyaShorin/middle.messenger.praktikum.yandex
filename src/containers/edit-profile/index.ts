import { Component } from '../../utils/component';
import styles from './index.module.less';

export class EditProfile extends Component {
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
