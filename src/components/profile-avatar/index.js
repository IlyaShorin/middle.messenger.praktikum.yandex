import Handlebars from 'handlebars';
import tmpl from 'bundle-text:./tmpl.hbs';
import * as styles from './index.module.less';

Handlebars.registerPartial('profilePicture', tmpl);

export default (user) => {
  return Handlebars.compile(tmpl)({
    user,
    styles,
  });
};
