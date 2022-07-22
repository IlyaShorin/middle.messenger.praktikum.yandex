import Handlebars from 'handlebars';
import tmpl from 'bundle-text:./tmpl.hbs';
import inputComponent from '../../components/input';
import primaryButton from '../../components/primary-button';
import linkButton from '../../components/link-button';
import styles from './index.module.less';

Handlebars.registerPartial('signupForm', tmpl);

export default (props = {}) => {
  return Handlebars.compile(tmpl)({
    email: inputComponent('email', 'Email', styles.inputPassword),
    login: inputComponent('login', 'Логин', styles.inputPassword),
    name: inputComponent('first_name', 'Имя', styles.inputPassword),
    lastName: inputComponent('second_name', 'Фамилия', styles.inputPassword),
    phoneNumber: inputComponent(
      'phone',
      'Номер телефона',
      styles.inputPassword
    ),
    password: inputComponent('password', 'Пароль', styles.inputPassword),
    confirmPassword: inputComponent(
      'confirmPassword',
      'Пароль еще раз',
      styles.inputPassword
    ),
    submit: primaryButton(
      'register-button',
      'Зарегистрироваться',
      styles.submitButton
    ),
    link: linkButton('link-button', 'Войти', styles.linkButton, '/login'),
    containerClass: styles.container,
    formContainerClass: styles.formContainer,
    ...props,
  });
};
