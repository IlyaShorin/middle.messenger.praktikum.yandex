import { Component } from '../../utils/component';
import { BackFromProfileButton } from '../../components/back-from-profile-button';
import { EditProfile } from '../../containers/edit-profile';
import { ProfileAvatar } from '../../components/profile-avatar';
import { ProfileForm } from '../../components/profile-form';

import * as styles from './index.module.less';

const user = {
  email: 'shorin@mail.ru',
  login: 'ishorin',
  first_name: 'Илья',
  second_name: 'Шорин',
  phone: '+799912345678',
  display_name: 'Илья',
  avatar: 'https://picsum.photos/200',
};

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
    profileAvatar: new ProfileAvatar('div', { attr: {}, user }),
    profileForm: ProfileForm(user, false),
    backFromProfileButton: new BackFromProfileButton('div', {
      attr: {},
      events: {
        click: () => {
          window.location.href = `${window.location.origin}/profile`;
        },
      },
    }),
  }),
});
