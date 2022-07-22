import Handlebars from 'handlebars';
import tmpl from 'bundle-text:./tmpl.hbs';
import linkButton from '../../components/link-button';
import './index.less';

Handlebars.registerPartial('404', tmpl);

export const notFoundPage = (() => {
  return Handlebars.compile(tmpl)({
    linkButton: linkButton('back-button', 'Назад', 'linkButton'),
  });
})();
