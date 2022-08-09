import { Component } from '../../utils/component';
import { Props } from '../../utils/types';
import './index.less';

export class PrimaryButton extends Component {
  constructor(tag: string, props: Props) {
    if (props['attr']) {
      props['attr'].class = `primaryButton ${props['attr'].class}`;
    }
    super(tag, props);
  }

  render() {
    return '{{value}}';
  }
}
