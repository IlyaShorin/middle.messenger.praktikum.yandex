import { Component } from '../../utils/component';
import { validationListener } from '../../utils/validation';
import { ChangePassword } from '../../containers/change-password';
import { BackFromProfileButton } from '../../components/back-from-profile-button';
import { ProfileAvatar } from '../../components/profile-avatar';
import { ProfileInput } from '../../components/profile-input';
import { PrimaryButton } from '../../components/primary-button';
import styles from './index.module.less';

const user = {
  email: 'shorin@mail.ru',
  login: 'ishorin',
  first_name: 'Илья',
  second_name: 'Шорин',
  phone: '+799912345678',
  display_name: 'Илья',
  avatar: 'https://picsum.photos/200',
  password: 'qwerty123',
};

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
    events: {
      submit: (e: SubmitEvent) => {
        e.preventDefault();
        if (validationListener({ element: document.querySelector('label')! })) {
          const form = document.querySelector('form');
          const data = new FormData();
          form!.querySelectorAll('input').forEach((input) => {
            data.set(input.name, input.value);
          });
          for (const [key, value] of data) {
            console.log(key, ':', value);
          }
          window.location.href = `${window.location.origin}/profile`;
        } else {
          document.querySelectorAll('label').forEach((field) => {
            validationListener({ element: field });
          });
        }
      },
    },
    backFromProfileButton: new BackFromProfileButton('div', {
      attr: {},
      events: {
        click: () => {
          window.location.href = `${window.location.origin}/profile`;
        },
      },
    }),
    profileAvatar: new ProfileAvatar('div', { attr: {}, user }),
    submit: new PrimaryButton('button', {
      attr: {
        type: 'submit',
      },
      value: 'Сохранить',

      submit: (e: SubmitEvent) => {
        e.preventDefault();
        if (validationListener({ element: document.querySelector('label')! })) {
          const form = document.querySelector('form');
          const data = new FormData();
          form!.querySelectorAll('input').forEach((input) => {
            data.set(input.name, input.value);
          });
          for (const [key, value] of data) {
            console.log(key, ':', value);
          }
          window.location.href = `${window.location.origin}/profile`;
        } else {
          document.querySelectorAll('label').forEach((field) => {
            validationListener({ element: field });
          });
        }
      },
    }),
    profileInputOldPassword: new ProfileInput('div', {
      attr: {},
      name: 'password',
      placeholder: '',
      label: 'Пароль',
      value: user.password,
      type: 'password',
    }),
    profileInputPassword: new ProfileInput('div', {
      attr: {},
      name: 'new-password',
      placeholder: '',
      label: 'Новый пароль',
      value: '',
      type: 'password',
    }),
    profileInputPasswordAgain: new ProfileInput('div', {
      attr: {},
      name: 'new-password-again',
      placeholder: '',
      label: 'Новый пароль ещё раз',
      value: '',
      type: 'password',
    }),
  }),
});
