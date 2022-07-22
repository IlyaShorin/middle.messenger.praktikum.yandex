import Handlebars from 'handlebars';
import tmpl from 'bundle-text:./tmpl.hbs';
import './index.less';

Handlebars.registerPartial('button', tmpl);

export default (name, label, inputClass) => {
  return Handlebars.compile(tmpl)({ name, label, inputClass });
};
