import { Component } from '../../utils/component';
import { submit } from '../../utils/submit';
import { PrimaryButton } from '../primary-button';
import { ProfileInput } from '../profile-input';
import styles from './index.module.less';

class ProfileFormComponent extends Component {
  render(): string {
    return `

  {{{profileInputFirstName}}}
  {{{profileInputSecondName}}}
  {{{profileInputDisaplyName}}}
  {{{profileInputLogin}}}
  {{{profileInputEmail}}}
  {{{profileInputPhone}}}
 {{#if show}}
  <div class="${styles['editButtonsContainer']}">
      {{{submit}}}
    </div>
  {{/if}}
    `;
  }
}

export const ProfileForm = (
  user: {
    email: string;
    login: string;
    first_name: string;
    second_name: string;
    phone: string;
    display_name: string;
    avatar: string;
    password: string;
  },
  disabled: boolean
) =>
  new ProfileFormComponent('form', {
    attr: { class: styles['form'] },
    show: !disabled,
    submit: new PrimaryButton('button', {
      value: 'Сохранить',
      attr: { type: 'submit' },
    }),
    events: {
      submit,
    },
    profileInputFirstName: new ProfileInput('div', {
      name: 'first_name',
      placeholder: user.first_name,
      label: 'Имя',
      value: user['first_name']!,
      type: 'text',
      disabled,
    }),
    profileInputSecondName: new ProfileInput('div', {
      name: 'second_name',
      placeholder: user.second_name,
      label: 'Фамилия',
      value: user.second_name,
      type: 'text',
      disabled,
    }),
    profileInputDisplayName: new ProfileInput('div', {
      name: 'display_name',
      placeholder: user.display_name,
      label: 'Имя в чате',
      value: user.display_name,
      type: 'text',
      disabled,
    }),
    profileInputLogin: new ProfileInput('div', {
      name: 'login',
      placeholder: user.login,
      label: 'Логин',
      value: user.login,
      type: 'text',
      disabled,
    }),
    profileInputEmail: new ProfileInput('div', {
      name: 'email',
      placeholder: user.email,
      label: 'Email',
      value: user.email,
      type: 'email',
      disabled,
    }),
    profileInputPhone: new ProfileInput('div', {
      name: 'phone',
      placeholder: user.phone,
      label: 'Имя',
      value: user.phone,
      type: 'tel',
      disabled,
    }),
  });
