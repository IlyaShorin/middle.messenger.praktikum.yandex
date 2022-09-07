import { Component } from '../../utils/component';
import { LinkButton } from '../../components/link-button';
import './index.less';
import { router } from '../../utils/router';

class NotFoundPageClass extends Component {
  render() {
    return `
  <h1>404</h1>
  <h2>Не туда попали</h2>
  {{{linkButton}}}
    `;
  }
}
export const NotFoundPage = new NotFoundPageClass('div', {
  attr: { class: 'container' },
  linkButton: new LinkButton('button', {
    value: 'Назад',
    events: {
      click: () => {
        router.go('/main');
      },
    },
  }),
});
