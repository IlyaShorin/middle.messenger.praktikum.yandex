import Handlebars from 'handlebars';
import tmpl from 'bundle-text:./tmpl.hbs';
import * as styles from './index.module.less';
import * as arrowRight from '../../images/arrow.svg';
import * as attachIcon from '../../images/attach.svg';

Handlebars.registerPartial('chatFooter', tmpl);

export default () => {
  return Handlebars.compile(tmpl)({
    footer: styles.footer,
    attach: attachIcon,
    arrowRight,
    styles,
  });
};
