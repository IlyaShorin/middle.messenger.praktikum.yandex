import Handlebars from 'handlebars';
import tmpl from 'bundle-text:./tmpl.hbs';
import changePassword from '../../containers/change-password/index.js';
import * as styles from './index.module.less';

Handlebars.registerPartial('changePassword', tmpl);

export const changePasswordPage = (() => {
  return Handlebars.compile(tmpl)({
    changePassword,
    styles,
  });
})();
