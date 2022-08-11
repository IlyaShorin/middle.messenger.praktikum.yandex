import { Component } from '../../utils/component';
import { submit } from '../../utils/submit';
import { ChangePassword } from '../../containers/change-password';
import { BackFromProfileButton } from '../../components/back-from-profile-button';
import { ProfileAvatar } from '../../components/profile-avatar';
import { ProfileInput } from '../../components/profile-input';
import { PrimaryButton } from '../../components/primary-button';
import { USER } from '../../utils/fixtures';
import styles from './index.module.less';

class ChangePasswordPage extends Component {
  render(): string {
    return `
    {{{changePassword}}}
    `;
  }
}

export const changePasswordPage = new ChangePasswordPage('div', {
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
            window.location.href = `${window.location.origin}/profile`;
          }
        },
      },
    }),
    profileAvatar: new ProfileAvatar('div', {
      firstName: USER.first_name,
      avatar: USER.avatar,
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
      value: USER.password,
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
