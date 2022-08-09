import { PrimaryButton } from '../../components/primary-button';
import { Input } from '../../components/input';
import { Component } from '../../utils/component';
import { validationListener } from '../../utils/validation';

import styles from './index.module.less';
import { LinkButton } from '../../components/link-button';

class SignupForm extends Component {
  render() {
    return `
  
    <form class='{{formContainerClass}}'>
      <h1>Регистрация</h1>
      {{{email}}}
      {{{login}}}
      {{{name}}}
      {{{lastName}}}
      {{{phoneNumber}}}
      {{{password}}}
      {{{confirmPassword}}}
      {{{submit}}}
      {{{link}}}
    </form>

            
 `;
  }
}
export const signupPage = new SignupForm('div', {
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
        window.location.href = `${window.location.origin}/login`;
      } else {
        document.querySelectorAll('label').forEach((field) => {
          validationListener({ element: field });
        });
      }
    },
  },
  email: new Input('label', {
    label: 'Email',
    name: 'email',
    attr: {
      class: styles['input'],
    },
  }),
  login: new Input('label', {
    label: 'Логин',
    name: 'login',
    attr: {
      class: styles['input'],
    },
  }),
  name: new Input('label', {
    label: 'Имя',
    name: 'first_name',
    attr: {
      class: styles['input'],
    },
  }),
  lastName: new Input('label', {
    label: 'Фамилия',
    name: 'second_name',
    attr: {
      class: styles['input'],
    },
  }),
  phoneNumber: new Input('label', {
    label: 'Номер телефона',
    name: 'phone',
    attr: {
      class: styles['input'],
    },
  }),
  password: new Input('label', {
    name: 'password',
    label: 'Пароль',
    type: 'password',
    id: 'password',
    attr: {
      class: styles['input'],
    },
  }),
  confirmPassword: new Input('label', {
    name: 'confirmPassword',
    label: 'Пароль ещё раз',
    type: 'password',
    id: 'confirmPassword',
    attr: {
      class: styles['input'],
    },
  }),
  submit: new PrimaryButton('button', {
    value: 'Зарегистрироваться',
    attr: {
      class: styles['submitButton'],
    },
  }),
  link: new LinkButton('a', {
    attr: {
      href: 'http://localhost:3000/login',
      class: styles['linkButton'],
    },
    value: 'Войти',
  }),
  attr: { class: styles['container'] },
  formContainerClass: styles['formContainer'],
});
