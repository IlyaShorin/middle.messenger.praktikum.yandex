import Handlebars from 'handlebars';
import tmpl from 'bundle-text:./tmpl.hbs';
import * as arrowLeft from '../../images/arrow.svg';
import styles from './index.module.less';

Handlebars.registerPartial('backFromProfileButton', tmpl);

export default ({}) => {
  return Handlebars.compile(tmpl)({
    styles,
    arrowLeft,
  });
};
