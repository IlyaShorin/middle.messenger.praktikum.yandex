import { Component } from '../../utils/component';
import { LinkButton } from '../../components/link-button';
import './index.less';

class ErrorOnServerPage extends Component {
  render() {
    return `
   
  <h1>500</h1>
  <h2>Попробуйте перезагрузить страницу</h2>
  {{{linkButton}}}

    `;
  }
}
export const errorOnServerPage = new ErrorOnServerPage('div', {
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
