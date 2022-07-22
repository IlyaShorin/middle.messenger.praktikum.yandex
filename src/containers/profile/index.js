import Handlebars from 'handlebars';
import tmpl from 'bundle-text:./tmpl.hbs';
import profileForm from '../../components/profile-form';
import profileAvatar from '../../components/profile-avatar';
import backFromProfileButton from '../../components/back-from-profile-button';
import * as styles from './index.module.less';

Handlebars.registerPartial('profile', tmpl);

const user = {
  email: 'shorin@mail.ru',
  login: 'ishorin',
  first_name: 'Илья',
  second_name: 'Шорин',
  phone: '+799912345678',
  display_name: 'Илья',
  avatar: 'https://picsum.photos/200',
};

export default () => {
  return Handlebars.compile(tmpl)({
    profileForm: profileForm(user, true),
    profileAvatar: profileAvatar(user),
    backFromProfileButton,
    styles,
  });
};
