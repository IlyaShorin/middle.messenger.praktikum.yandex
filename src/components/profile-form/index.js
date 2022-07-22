import Handlebars from 'handlebars';
import tmpl from 'bundle-text:./tmpl.hbs';
import profileInput from '../profile-input';
import styles from './index.module.less';

Handlebars.registerPartial('profileForm', tmpl);

export default (user, disabled) => {
  return Handlebars.compile(tmpl)({
    user,
    styles,
    profileInputFirstName: profileInput(
      'first_name',
      user.first_name,
      'Имя',
      user.first_name,
      'text',
      disabled
    ),
    profileInputSecondName: profileInput(
      'second_name',
      user.second_name,
      'Фамилия',
      user.second_name,
      'text',
      disabled
    ),
    profileInputDisplayName: profileInput(
      'display_name',
      user.display_name,
      'Имя в чате',
      user.display_name,
      'text',
      disabled
    ),
    profileInputLogin: profileInput(
      'login',
      user.login,
      'Логин',
      user.login,
      'text',
      disabled
    ),
    profileInputEmail: profileInput(
      'email',
      user.email,
      'Email',
      user.email,
      'email',
      disabled
    ),
    profileInputPhone: profileInput(
      'phone',
      user.phone,
      'Телефон',
      user.phone,
      'tel',
      disabled
    ),
  });
};
