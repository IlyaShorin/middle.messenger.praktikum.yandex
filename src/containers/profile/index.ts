import { Component } from '../../utils/component';
import { router } from '../../utils/router';
import { ProfileForm } from '../../components/profile-form';
import { userStore } from '../../store/new-store';
import { LinkButton } from '../../components/link-button';
import { BackFromProfileButton } from '../../components/back-from-profile-button';
import { ProfileAvatar } from '../../components/profile-avatar';
import * as styles from './index.module.less';

export class Profile extends Component {
  init(): void {
    //@ts-ignore
    this._children.editProfileButton = new LinkButton('button', {
      attr: { class: styles['text'] },
      value: 'Изменить данные',
      events: {
        click: () => {
          router.go('/edit-profile');
        },
      },
    });
    //@ts-ignore
    this._children.profileForm = ProfileForm(
      true,
      this._props.store._state.user
    );
    //@ts-ignore
    this._children.changePasswordButton = new LinkButton('button', {
      attr: { class: styles['text'] },
      value: 'Изменить пароль',
      events: {
        click: () => {
          router.go('/change-password');
        },
      },
    });
    //@ts-ignore
    this._children.exitButton = new LinkButton('button', {
      attr: { class: `${styles['text']} ${styles['warningText']}` },
      value: 'Выйти',
      events: {
        click: () => {
          userStore.logoutUser();
        },
      },
    });
    //@ts-ignore
    this._children.backFromProfileButton = new BackFromProfileButton('div', {
      events: {
        click: (e: MouseEvent) => {
          const div = e.target as HTMLElement;
          if (div.tagName === 'BUTTON' || div.tagName === 'IMG') {
            router.go('/main');
          }
        },
      },
    });
    //@ts-ignore
    this._children.profileAvatar = new ProfileAvatar('div', {
      avatar: userStore.user.avatar,
      firstName: userStore.user.first_name,
    });
  }

  render(): string {
    return `
  {{{backFromProfileButton}}}
<div class='${styles['container']}'>
  <div class='${styles['width']}'>
    {{{profileAvatar}}}
    {{{profileForm}}}
    <div class='${styles['editButtonsContainer']}'>
    {{{editProfileButton}}}
    {{{changePasswordButton}}}
    {{{exitButton}}}
    </div>
  </div>
</div>
  `;
  }
}
