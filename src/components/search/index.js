import Handlebars from 'handlebars';
import tmpl from 'bundle-text:./tmpl.hbs';
import * as styles from './index.module.less';

Handlebars.registerPartial('search', tmpl);

export default () => {
  return Handlebars.compile(tmpl)({
    name: 'search',
    searchClass: styles.search,
  });
};
