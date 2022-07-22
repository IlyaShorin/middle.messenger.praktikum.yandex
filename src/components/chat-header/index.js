import Handlebars from 'handlebars';
import tmpl from 'bundle-text:./tmpl.hbs';
import * as styles from './index.module.less';
import * as dots from '../../images/dots.svg';

Handlebars.registerPartial('chatHeader', tmpl);

export default ({ avatar, recipientName }) => {
  return Handlebars.compile(tmpl)({
    avatar,
    recipientName,
    // styles,
    header: styles.header,
    dotsButtonClass: styles.dotsButtonClass,
    dotsContainer: styles.dotsContainer,
    dots,
    recipient: styles.recipient,
    avatarClass: styles.avatar,
  });
};
