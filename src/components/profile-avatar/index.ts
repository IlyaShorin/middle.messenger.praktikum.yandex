import { Component } from '../../utils/component';
import * as styles from './index.module.less';

export class ProfileAvatar extends Component {
  constructor(
    tag: string,
    props: { attr?: { class?: string }; avatar: string; firstName: string }
  ) {
    props.attr = { class: styles['container'] };

    super(tag, props);
  }

  render() {
    return `
  <img src='{{avatar}}' class='${styles['avatar']}' />
  <div class='${styles['edit']}'>
    <button class='${styles['editButton']}'>Изменить аватар</button>
  </div>
  <h2>{{first_name}}</h2>
`;
  }
}
