import { Component } from '../../utils/component';
import { Profile } from '../../containers/profile';
import { BackFromProfileButton } from '../../components/back-from-profile-button';
import { ProfileAvatar } from '../../components/profile-avatar';
import { ProfileForm } from '../../components/profile-form';
import { LinkButton } from '../../components/link-button';
import store, { userStore } from '../../store/new-store/index';
import * as styles from './index.module.less';
import { router } from '../../utils/router';
import Connect from '../../store/new-store/connect';
import { isEqual } from '../../utils/is-equal';

class ProfilePageComponent extends Component {
  constructor(tag: string, props: {}) {
    super(tag, props);
  }

  render(): string {
    return `
      {{{profile}}}
  `;
  }
}
const ConnectPage = Connect(ProfilePageComponent, (store) => {
  return { store };
});

export const ProfilePage = new ConnectPage('div', {
  attr: { class: styles['container'] },
  profile: new Profile('div', {
    attr: { class: styles['container'] },
    store,
  }),
});
