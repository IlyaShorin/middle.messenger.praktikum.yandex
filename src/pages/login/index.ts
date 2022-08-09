import { PrimaryButton } from '../../components/primary-button';
import { Input } from '../../components/input';
import { Component } from '../../utils/component';
import { validationListener } from '../../utils/validation';

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
        window.location.href = `${window.location.origin}/main`;
      } else {
        document.querySelectorAll('label').forEach((field) => {
          validationListener({ element: field });
        });
      }
    },
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
