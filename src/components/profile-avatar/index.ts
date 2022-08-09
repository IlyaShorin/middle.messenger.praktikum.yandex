import { Component } from '../../utils/component';
import { Props } from '../../utils/types';
import * as styles from './index.module.less';

export class ProfileAvatar extends Component {
  constructor(tag: string, props: Props) {
    props['attr'].class = styles['container'];

    super(tag, props);
  }

  render() {
    return `
  <img src='{{user.avatar}}' class='${styles['avatar']}' />
  <div class='${styles['edit']}'>
    <button class='${styles['editButton']}'>Изменить аватар</button>
  </div>
  <h2>{{user.first_name}}</h2>
`;
  }
}
