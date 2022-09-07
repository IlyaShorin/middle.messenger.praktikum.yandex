import { Component } from '../../utils/component';
import { LinkButton } from '../../components/link-button';
import './index.less';
import { router } from '../../utils/router';

class ErrorOnServerPageComponent extends Component {
  render() {
    return `
   
  <h1>500</h1>
  <h2>Попробуйте перезагрузить страницу</h2>
  {{{linkButton}}}

    `;
  }
}
export const ErrorOnServerPage = new ErrorOnServerPageComponent('div', {
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
