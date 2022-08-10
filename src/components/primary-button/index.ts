import { Component } from '../../utils/component';
import './index.less';

export class PrimaryButton extends Component {
  constructor(
    tag: string,
    props: {
      attr?: { class?: string; type?: string };
      value: string;
      events?: { submit: (e: SubmitEvent) => void };
    }
  ) {
    props.attr = { class: `primaryButton ${props.attr?.class}` };

    super(tag, props);
  }

  render() {
    return '{{value}}';
  }
}
