import { Component } from '../../utils/component';

import './index.less';

export class LinkButton extends Component {
  constructor(
    tag: string,
    props: {
      attr?: { class?: string; href?: string };
      value: string;
      events?: { click: () => void };
    }
  ) {
    props.attr = { class: `linkButton ${props.attr?.class}` };
    super(tag, props);
  }

  render() {
    return '{{value}}';
  }
}
