import { Component } from '../../utils/component';
import { validationListener } from '../../utils/validation';

import './index.less';

export class Input extends Component {
  constructor(
    tag: string,
    props: {
      attr?: { class?: string };
      label: string;
      name: string;
      type: string;
    }
  ) {
    props.attr = { class: `label ${props.attr?.class}` };
    super(tag, props);
  }

  addEvents(): void {
    this.element.querySelector('input')?.addEventListener('focus', () =>
      validationListener({
        element: this.element,
      })
    );
    this.element.querySelector('input')?.addEventListener('blur', () =>
      validationListener({
        element: this.element,
      })
    );
  }

  render() {
    return `
    {{label}}
    <input name='{{name}}' class='input' {{#if type}}type="{{type}}"{{/if}} {{#if id}}id="{{id}}"{{/if}}/>
    <p class="error"></p>

  `;
  }
}
