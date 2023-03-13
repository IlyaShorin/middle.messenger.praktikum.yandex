import { Component } from '../../utils/component';
import { BackFromProfileButton } from '../../components/back-from-profile-button';
import { EditProfile } from '../../containers/edit-profile';
import { ProfileAvatar } from '../../components/profile-avatar';
import { ProfileForm } from '../../components/profile-form';
import store from '../../store/_index';
import * as styles from './index.module.less';
import { router } from '../../utils/router';

class EditProfileComponent extends Component {
  render() {
    return `
  {{{editProfile}}}
    `;
  }
}
export const EditProfilePage = new EditProfileComponent('div', {
  attr: { class: styles['container'] },
  editProfile: new EditProfile('div', {
    attr: { class: styles['container'] },
    profileAvatar: new ProfileAvatar('div', {
      avatar: store.user.user?.avatar,
      firstName: store.user.user?.first_name,
    }),
    profileForm: ProfileForm(false, store.user.user),
    backFromProfileButton: new BackFromProfileButton('div', {
      events: {
        click: (e: MouseEvent) => {
          const div = e.target as HTMLElement;
          if (div.tagName === 'BUTTON' || div.tagName === 'IMG') {
            router.back();
          }
        },
      },
    }),
  }),
});
