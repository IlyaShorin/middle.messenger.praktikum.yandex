import Handlebars from 'handlebars';
import tmpl from 'bundle-text:./tmpl.hbs';
import './index.less';

Handlebars.registerPartial('button', tmpl);

export default (id, value, linkClass, link) => {
  return Handlebars.compile(tmpl)({ id, value, linkClass, link });
};
