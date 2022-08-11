import { Component } from '../../utils/component';
import { Profile } from '../../containers/profile';
import { BackFromProfileButton } from '../../components/back-from-profile-button';
import { ProfileAvatar } from '../../components/profile-avatar';
import { ProfileForm } from '../../components/profile-form';
import { LinkButton } from '../../components/link-button';
import { USER } from '../../utils/fixtures';

import * as styles from './index.module.less';

class ProfilePage extends Component {
  render(): string {
    return `
      {{{profile}}}
  `;
  }
}
export const profilePage = new ProfilePage('div', {
  attr: { class: styles['container'] },
  profile: new Profile('div', {
    editProfileButton: new LinkButton('button', {
      attr: { class: styles['text'] },
      value: 'Изменить данные',
      events: {
        click: () => {
          window.location.href = `${window.location.origin}/edit-profile`;
        },
      },
    }),
    changePasswordButton: new LinkButton('button', {
      attr: { class: styles['text'] },
      value: 'Изменить пароль',
      events: {
        click: () => {
          window.location.href = `${window.location.origin}/change-password`;
        },
      },
    }),
    exitButton: new LinkButton('button', {
      attr: { class: `${styles['text']} ${styles['warningText']}` },
      value: 'Выйти',
      events: {
        click: () => {
          console.warn('Авторизация ещё не работает');
        },
      },
    }),
    attr: { class: styles['container'] },
    backFromProfileButton: new BackFromProfileButton('div', {
      events: {
        click: (e: MouseEvent) => {
          const div = e.target as HTMLElement;
          if (div.tagName === 'BUTTON' || div.tagName === 'IMG') {
            window.location.href = `${window.location.origin}/main`;
          }
        },
      },
    }),
    profileAvatar: new ProfileAvatar('div', {
      avatar: USER.avatar,
      firstName: USER.first_name,
    }),
    profileForm: ProfileForm(USER, true),
  }),
});
