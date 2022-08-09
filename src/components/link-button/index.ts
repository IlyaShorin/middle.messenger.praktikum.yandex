import { Component } from '../../utils/component';
import { Props } from '../../utils/types';
import './index.less';

export class LinkButton extends Component {
  constructor(tag: string, props: Props) {
    if (props['attr']) {
      props['attr'].class = `linkButton ${props['attr'].class}`;
    }
    super(tag, props);
  }

  render() {
    return '{{value}}';
  }
}
