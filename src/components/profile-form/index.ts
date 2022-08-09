import { Component } from '../../utils/component';
import { validationListener } from '../../utils/validation';
import { PrimaryButton } from '../primary-button';
import { ProfileInput } from '../profile-input';
import * as styles from './index.module.less';

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
  user: Record<string, string>,
  disabled: boolean,
) => new ProfileFormComponent('form', {
  attr: { class: styles['form'] },
  show: !disabled,
  submit: new PrimaryButton('button', {
    value: 'Сохранить',
    attr: { type: 'submit' },
  }),
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
  profileInputFirstName: new ProfileInput('div', {
    attr: {},
    name: 'first_name',
    placeholder: user['first_name'],
    label: 'Имя',
    value: user['first_name'],
    type: 'text',
    disabled,
  }),
  profileInputSecondName: new ProfileInput('div', {
    attr: {},
    name: 'second_name',
    placeholder: user['second_name'],
    label: 'Фамилия',
    value: user['second_name'],
    type: 'text',
    disabled,
  }),
  profileInputDisplayName: new ProfileInput('div', {
    attr: {},
    name: 'display_name',
    placeholder: user['display_name'],
    label: 'Имя в чате',
    value: user['display_name'],
    type: 'text',
    disabled,
  }),
  profileInputLogin: new ProfileInput('div', {
    attr: {},
    name: 'login',
    placeholder: user['login'],
    label: 'Логин',
    value: user['login'],
    type: 'text',
    disabled,
  }),
  profileInputEmail: new ProfileInput('div', {
    attr: {},
    name: 'email',
    placeholder: user['email'],
    label: 'Email',
    value: user['email'],
    type: 'email',
    disabled,
  }),
  profileInputPhone: new ProfileInput('div', {
    attr: {},
    name: 'phone',
    placeholder: user['phone'],
    label: 'Имя',
    value: user['phone'],
    type: 'tel',
    disabled,
  }),
});
