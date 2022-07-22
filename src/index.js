import { loginPage } from './pages/login/index.js';
import { signupPage } from './pages/signup/index.js';
import { notFoundPage } from './pages/404/index.js';
import { errorOnServerPage } from './pages/500/index.js';
import { mainPage } from './pages/main/index.js';
import { profilePage } from './pages/profile/index.js';
import { editProfilePage } from './pages/edit-profile/index.js';
import { changePasswordPage } from './pages/change-password/index.js';

const app = document.getElementById('root');

document.addEventListener('DOMContentLoaded', () => {
  const backButton = document.getElementById('back-button');
  const goToProfileButton = document.getElementById('go-to-profile-button');
  const saveProfileButton = document.getElementById('save-profile-button');
  const editButton = document.getElementById('edit-button');
  const loginButton = document.getElementById('login-button');
  const registerButton = document.getElementById('register-button');
  const changePasswordButton = document.getElementById(
    'change-password-button'
  );
  const savePasswordButton = document.getElementById('save-password-button');
  const exitButton = document.getElementById('exit-button');

  backButton?.addEventListener('click', (e) => {
    e.preventDefault();
    history.back();
  });
  goToProfileButton?.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = `${window.location.protocol}${window.location.host}/profile`;
  });
  saveProfileButton?.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = `${window.location.protocol}${window.location.host}/profile`;
  });
  editButton?.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = `${window.location.protocol}${window.location.host}/edit-profile`;
  });
  loginButton?.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = `${window.location.protocol}${window.location.host}/main`;
  });
  registerButton?.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = `${window.location.protocol}${window.location.host}/login`;
  });
  changePasswordButton?.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = `${window.location.protocol}${window.location.host}/change-password`;
  });
  savePasswordButton?.addEventListener('click', (e) => {
    e.preventDefault(e);
    window.location.href = `${window.location.protocol}${window.location.host}/profile`;
  });
  exitButton?.addEventListener('click', (e) => {
    e.preventDefault(e);
    window.location.href = `${window.location.protocol}${window.location.host}/login`;
  });
});

const routes = {
  singup: signupPage,
  login: loginPage,
  notFound: notFoundPage,
  errorOnServer: errorOnServerPage,
  main: mainPage,
  profile: profilePage,
  editProfile: editProfilePage,
  changePassword: changePasswordPage,
};

switch (window.location.pathname.slice(1)) {
  case 'signup':
    app.innerHTML = routes.singup;
    break;
  case 'login':
    app.innerHTML = routes.login;
    break;
  case '':
    app.innerHTML = routes.login;
    break;
  case '500':
    app.innerHTML = routes.errorOnServer;
    break;
  case 'main':
    app.innerHTML = routes.main;
    break;
  case 'profile':
    app.innerHTML = routes.profile;
    break;
  case 'edit-profile':
    app.innerHTML = routes.editProfile;
    break;
  case 'change-password':
    app.innerHTML = routes.changePassword;
    break;
  default:
    app.innerHTML = routes.notFound;
    break;
}
