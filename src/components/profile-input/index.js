import Handlebars from 'handlebars';
import tmpl from 'bundle-text:./tmpl.hbs';
import * as styles from './index.module.less';

Handlebars.registerPartial('profileInput', tmpl);

export default (name, placeholder, label, value, type, disabled) => {
  return Handlebars.compile(tmpl)({
    name,
    placeholder,
    label,
    value,
    styles,
    type,
    disabled,
  });
};
