import Handlebars from 'handlebars';
import tmpl from 'bundle-text:./tmpl.hbs';
import inputComponent from '../../components/input';
import primaryButton from '../../components/primary-button';
import linkButton from '../../components/link-button';
import styles from './index.module.less';

Handlebars.registerPartial('loginForm', tmpl);

export default (props = {}) => {
  return Handlebars.compile(tmpl)({
    login: inputComponent('login', 'Логин', styles.inputLogin),
    password: inputComponent('password', 'Паролоь', styles.inputPassword),
    submit: primaryButton('login-button', 'Войти', styles.submitButton),
    link: linkButton(
      'link-button',
      'Нет аккаунта?',
      styles.linkButton,
      '/signup'
    ),
    containerClass: styles.container,
    formContainerClass: styles.formContainer,
    ...props,
  });
};
