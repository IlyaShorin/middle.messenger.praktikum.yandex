import Handlebars from 'handlebars';
import tmpl from 'bundle-text:./tmpl.hbs';
import profileInput from '../../components/profile-input';
import profileAvatar from '../../components/profile-avatar';
import primaryButton from '../../components/primary-button';
import backFromProfileButton from '../../components/back-from-profile-button';
import * as styles from './index.module.less';

Handlebars.registerPartial('editProfile', tmpl);

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

export default () => {
  return Handlebars.compile(tmpl)({
    profileInputOldPassword: profileInput(
      'password',
      '',
      'Пароль',
      user.password,
      'password',
      true
    ),
    profileInputPassword: profileInput(
      'new-password',
      '',
      'Новый парль',
      '',
      'password'
    ),
    profileInputPasswordAgain: profileInput(
      'new-password-again',
      '',
      'Новый пароль еще раз',
      '',
      'password'
    ),
    profileAvatar: profileAvatar(user),
    primaryButton: primaryButton(
      'save-password-button',
      'Сохранить',
      styles.button
    ),
    backFromProfileButton,
    primaryButton: primaryButton(
      'save-password-button',
      'Сохранить',
      styles.button
    ),
    styles,
  });
};
