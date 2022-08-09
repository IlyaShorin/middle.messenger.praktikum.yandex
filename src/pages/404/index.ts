import { Component } from '../../utils/component';
import { LinkButton } from '../../components/link-button';
import './index.less';

class NotFoundPage extends Component {
  render() {
    return `
  <h1>404</h1>
  <h2>Не туда попали</h2>
  {{{linkButton}}}
    `;
  }
}
export const notFoundPage = new NotFoundPage('div', {
  attr: { class: 'container' },
  linkButton: new LinkButton('button', {
    attr: {},
    value: 'Назад',
    events: {
      click: () => {
        history.back();
      },
    },
  }),
});
