import Handlebars from 'handlebars';
import tmpl from 'bundle-text:./tmpl.hbs';
import profile from '../../containers/profile/index';
import * as styles from './index.module.less';

Handlebars.registerPartial('profile', tmpl);

export const profilePage = (() => {
  return Handlebars.compile(tmpl)({
    profile,
    styles,
  });
})();
