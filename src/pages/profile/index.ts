import { Component } from '../../utils/component';
import { Profile } from '../../containers/profile';
import { BackFromProfileButton } from '../../components/back-from-profile-button';
import { ProfileAvatar } from '../../components/profile-avatar';
import { ProfileForm } from '../../components/profile-form';
import { LinkButton } from '../../components/link-button';
import store from '../../store/index';
import * as styles from './index.module.less';
import { router } from '../../utils/router';
import Connect from '../../store/new-store/connect';
import { isEqual } from '../../utils/is-equal';

class ProfilePageComponent extends Component {
  constructor(tag: string, props: {}) {
    super(tag, props);
  }
  componentDidMount(): void {
    this.setProps(this._props.store);
  }

  componentDidUpdate(newProps: any, oldPorps: any) {
    console.log(oldPorps, newProps);
    if (!isEqual(newProps.user, oldPorps.user)) {
      //@ts-ignore
      console.log(this._children);
    }
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
  store,
  attr: { class: styles['container'] },
  profile: new Profile('div', {
    editProfileButton: new LinkButton('button', {
      attr: { class: styles['text'] },
      value: 'Изменить данные',
      events: {
        click: () => {
          router.go('/edit-profile');
        },
      },
    }),
    changePasswordButton: new LinkButton('button', {
      attr: { class: styles['text'] },
      value: 'Изменить пароль',
      events: {
        click: () => {
          router.go('/change-password');
        },
      },
    }),
    exitButton: new LinkButton('button', {
      attr: { class: `${styles['text']} ${styles['warningText']}` },
      value: 'Выйти',
      events: {
        click: () => {
          store.user.logoutUser();
          router.go('/login');
        },
      },
    }),
    attr: { class: styles['container'] },
    backFromProfileButton: new BackFromProfileButton('div', {
      events: {
        click: (e: MouseEvent) => {
          const div = e.target as HTMLElement;
          if (div.tagName === 'BUTTON' || div.tagName === 'IMG') {
            router.go('/main');
          }
        },
      },
    }),
    profileAvatar: new ProfileAvatar('div', {
      avatar: store.user.user.avatar,
      firstName: store.user.user.first_name,
    }),
    profileForm: ProfileForm(true, store.user.user),
  }),
});
// console.log('ProfilePage props: ', ProfilePage._props);

// export const ProfilePage = new ProfilePageComponent('div', {
//   attr: { class: styles['container'] },
//   profile: new Profile('div', {
//     editProfileButton: new LinkButton('button', {
//       attr: { class: styles['text'] },
//       value: 'Изменить данные',
//       events: {
//         click: () => {
//           router.go('/edit-profile');
//         },
//       },
//     }),
//     changePasswordButton: new LinkButton('button', {
//       attr: { class: styles['text'] },
//       value: 'Изменить пароль',
//       events: {
//         click: () => {
//           router.go('/change-password');
//         },
//       },
//     }),
//     exitButton: new LinkButton('button', {
//       attr: { class: `${styles['text']} ${styles['warningText']}` },
//       value: 'Выйти',
//       events: {
//         click: () => {
//           router.go('/login');
//         },
//       },
//     }),
//     attr: { class: styles['container'] },
//     backFromProfileButton: new BackFromProfileButton('div', {
//       events: {
//         click: (e: MouseEvent) => {
//           const div = e.target as HTMLElement;
//           if (div.tagName === 'BUTTON' || div.tagName === 'IMG') {
//             router.go('/main');
//           }
//         },
//       },
//     }),
//     profileAvatar: new ProfileAvatar('div', {
//       avatar: store.user.user.avatar,
//       firstName: store.user.user.first_name,
//     }),
//     profileForm: ProfileForm(true, store.user.user),
//   }),
// });
