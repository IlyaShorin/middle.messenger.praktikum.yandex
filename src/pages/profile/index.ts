import { Component } from '../../utils/component';
import { Profile } from '../../containers/profile';
import { BackFromProfileButton } from '../../components/back-from-profile-button';
import { ProfileAvatar } from '../../components/profile-avatar';
import { ProfileForm } from '../../components/profile-form';
import { LinkButton } from '../../components/link-button';
import { USER } from '../../utils/fixtures';
import store from '../../store';
import * as styles from './index.module.less';
import { router } from '../../utils/router';

class ProfilePageComponent extends Component {
  render(): string {
    return `
      {{{profile}}}
  `;
  }
}
export const ProfilePage = new ProfilePageComponent('div', {
  attr: { class: styles['container'] },
  profile: new Profile('div', {
    editProfileButton: new LinkButton('button', {
      attr: { class: styles['text'] },
      value: 'Изменить данные',
      events: {
        click: () => {
          router.go('/edit-profile');
        },
      },
    }),
    changePasswordButton: new LinkButton('button', {
      attr: { class: styles['text'] },
      value: 'Изменить пароль',
      events: {
        click: () => {
          router.go('/change-password');
        },
      },
    }),
    exitButton: new LinkButton('button', {
      attr: { class: `${styles['text']} ${styles['warningText']}` },
      value: 'Выйти',
      events: {
        click: () => {
          router.go('/login');
        },
      },
    }),
    attr: { class: styles['container'] },
    backFromProfileButton: new BackFromProfileButton('div', {
      events: {
        click: (e: MouseEvent) => {
          const div = e.target as HTMLElement;
          if (div.tagName === 'BUTTON' || div.tagName === 'IMG') {
            router.go('/main');
          }
        },
      },
    }),
    profileAvatar: new ProfileAvatar('div', {
      avatar: USER.avatar,
      firstName: store.user.user.first_name,
    }),
    profileForm: ProfileForm(store.user.user, true),
  }),
});
setTimeout(() => {
  console.log('timeout');
  store.user.setUser();
}, 1000);
