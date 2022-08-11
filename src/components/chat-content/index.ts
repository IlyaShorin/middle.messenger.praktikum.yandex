import { Component } from '../../utils/component';
import * as styles from './index.module.less';

export class ChatContent extends Component {
  constructor(
    tag: string,
    props: {
      attr?: { class?: string };
      messages: {
        yourMessage: boolean;
        text: string;
      }[];
    }
  ) {
    props.attr = { class: styles['chatContent'] };
    super(tag, props);
  }

  render(): string {
    return `
    <div class='${styles['chatContent']}'>
    {{#each messages}}
      {{#if yourMessage}}
        <div class='${styles['yourMessage']}'>
          <p>{{text}}</p>
        </div>
      {{else}}
        <div class='${styles['friendMessage']}'>
          <p>{{text}}</p>
        </div>
      {{/if}}
    {{/each}}
  </div>
    `;
  }
}
