import { PrimaryButton } from '../../components/primary-button';
import { Input } from '../../components/input';
import { Component } from '../../utils/component';
import { submit } from '../../utils/submit';

import styles from './index.module.less';
import { LinkButton } from '../../components/link-button';

class LoginForm extends Component {
  render() {
    return `
              <form class='{{formContainerClass}}'>
                <h1>Вход</h1>
                {{{login}}}
                {{{password}}}
                {{{submit}}}
                {{{link}}}
              </form>
            
 `;
  }
}
export const loginPage = new LoginForm('div', {
  events: {
    submit,
  },
  submit: new PrimaryButton('button', {
    value: 'Войти',
    attr: {
      class: styles['submitButton'],
    },
  }),
  login: new Input('label', {
    label: 'Логин',
    name: 'login',
    type: 'text',
    attr: {
      class: styles['inputLogin'],
    },
  }),
  password: new Input('label', {
    name: 'password',
    label: 'Пароль',
    type: 'password',
    attr: {
      class: styles['inputPassword'],
    },
  }),
  link: new LinkButton('a', {
    attr: {
      href: 'http://localhost:3000/signup',
      class: styles['linkButton'],
    },
    value: 'Нет аккаунта?',
  }),
  attr: { class: styles['container'] },
  formContainerClass: styles['formContainer'],
});
