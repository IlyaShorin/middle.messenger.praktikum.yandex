import { Component } from '../../utils/component';
import { Profile } from '../../containers/profile';
import { BackFromProfileButton } from '../../components/back-from-profile-button';
import { ProfileAvatar } from '../../components/profile-avatar';
import { ProfileForm } from '../../components/profile-form';
import { LinkButton } from '../../components/link-button';

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
      attr: {},
      events: {
        click: () => {
          window.location.href = `${window.location.origin}/main`;
        },
      },
    }),
    profileAvatar: new ProfileAvatar('div', { attr: {}, user }),
    profileForm: ProfileForm(user, true),
  }),
});
