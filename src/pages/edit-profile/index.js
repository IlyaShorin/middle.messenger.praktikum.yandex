import Handlebars from 'handlebars';
import tmpl from 'bundle-text:./tmpl.hbs';
import editProfile from '../../containers/edit-profile/index.js';
import styles from './index.module.less';

Handlebars.registerPartial('editProfile', tmpl);

export const editProfilePage = (() => {
  return Handlebars.compile(tmpl)({
    editProfile,
    styles,
  });
})();
