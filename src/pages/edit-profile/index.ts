import { Component } from '../../utils/component';
import { BackFromProfileButton } from '../../components/back-from-profile-button';
import { EditProfile } from '../../containers/edit-profile';
import { ProfileAvatar } from '../../components/profile-avatar';
import { ProfileForm } from '../../components/profile-form';
import { USER } from '../../utils/fixtures';

import * as styles from './index.module.less';

class EditProfileComponent extends Component {
  render() {
    return `
  {{{editProfile}}}
    `;
  }
}
export const editProfilePage = new EditProfileComponent('div', {
  attr: { class: styles['container'] },
  editProfile: new EditProfile('div', {
    attr: { class: styles['container'] },
    profileAvatar: new ProfileAvatar('div', {
      avatar: USER.avatar,
      first_name: USER.first_name,
    }),
    profileForm: ProfileForm(USER, false),
    backFromProfileButton: new BackFromProfileButton('div', {
      events: {
        click: (e: MouseEvent) => {
          const div = e.target as HTMLElement;
          if (div.tagName === 'BUTTON' || div.tagName === 'IMG') {
            window.location.href = `${window.location.origin}/profile`;
          }
        },
      },
    }),
  }),
});
