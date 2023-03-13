import { Component } from '../../utils/component';
import { submit } from '../../utils/submit';
import { ChangePassword } from '../../containers/change-password';
import { BackFromProfileButton } from '../../components/back-from-profile-button';
import { ProfileAvatar } from '../../components/profile-avatar';
import { ProfileInput } from '../../components/profile-input';
import { PrimaryButton } from '../../components/primary-button';
import store, { userStore } from '../../store/new-store';
import styles from './index.module.less';
import { router } from '../../utils/router';

class ChangePasswordPageComponent extends Component {
  render(): string {
    return `
    {{{changePassword}}}
    `;
  }
}

export const ChangePasswordPage = new ChangePasswordPageComponent('div', {
  attr: { class: styles['container'] },
  changePassword: new ChangePassword('div', {
    attr: { class: styles['container'] },
    backFromProfileButtonContainer: styles['backFromProfileButtonContainer'],
    events: {
      submit,
    },
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
    profileAvatar: new ProfileAvatar('div', {
      firstName: userStore.user.first_name,
      avatar: userStore.user.avatar,
    }),
    submit: new PrimaryButton('button', {
      attr: {
        type: 'submit',
      },
      value: 'Сохранить',
    }),
    profileInputOldPassword: new ProfileInput('div', {
      name: 'password',
      placeholder: '',
      label: 'Пароль',
      value: userStore.user.password,
      type: 'password',
    }),
    profileInputPassword: new ProfileInput('div', {
      name: 'new-password',
      placeholder: '',
      label: 'Новый пароль',
      value: '',
      type: 'password',
    }),
    profileInputPasswordAgain: new ProfileInput('div', {
      name: 'new-password-again',
      placeholder: '',
      label: 'Новый пароль ещё раз',
      value: '',
      type: 'password',
    }),
  }),
});
