import { notFoundPage } from './pages/404';
import { errorOnServerPage } from './pages/500';
import { mainPage } from './pages/main';
import { profilePage } from './pages/profile';
import { editProfilePage } from './pages/edit-profile';
import { changePasswordPage } from './pages/change-password';
import { render } from './utils/renderDOM';
import { loginPage } from './pages/login';
import { signupPage } from './pages/signup';

switch (window.location.pathname.slice(1)) {
  case 'signup':
    render('#root', signupPage);
    break;
  case 'login':
    render('#root', loginPage);
    break;
  case '':
    render('#root', loginPage);
    break;
  case 'main':
    render('#root', mainPage);
    break;
  case 'profile':
    render('#root', profilePage);
    break;
  case 'edit-profile':
    render('#root', editProfilePage);
    break;
  case 'change-password':
    render('#root', changePasswordPage);
    break;
  case '500':
    render('#root', errorOnServerPage);
    break;
  default:
    render('#root', notFoundPage);
    break;
}
