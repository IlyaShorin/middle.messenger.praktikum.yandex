import { Component } from '../../utils/component';
import { validationListener } from '../../utils/validation';

import * as styles from './index.module.less';

export class ProfileInput extends Component {
  constructor(
    tag: string,
    props: {
      attr?: { class?: string };
      name: string;
      placeholder?: string;
      value?: string;
      label: string;
      type: string;
      disabled?: boolean;
    }
  ) {
    props.attr = { class: styles['inputBox'] };
    super(tag, props);
  }

  addEvents(): void {
    this.element.querySelector('input')!.addEventListener('focus', () =>
      validationListener({
        element: this.element,
      })
    );
    this.element.querySelector('input')!.addEventListener('blur', () =>
      validationListener({
        element: this.element,
      })
    );
  }

  render() {
    return `
  <label for='{{name}}' class='${styles['label']}'>
  {{label}}
  <div class='${styles['inputContainer']}'>
  <input
    name={{name}}
    class='${styles['input']}'
    placeholder='{{placeholder}}'
    id='{{name}}'
    value="{{value}}"
    {{#if type}}type="{{type}}"{{/if}}
    {{#if disabled}} disabled {{/if}}
    autocomplete="off"
  />
  <p class='${styles['error']}'></p>
  </div>
  </label>

  `;
  }
}
