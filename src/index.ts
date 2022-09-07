import { NotFoundPage } from './pages/404';
import { ErrorOnServerPage } from './pages/500';
import { MainPage } from './pages/main';
import { ProfilePage } from './pages/profile';
import { EditProfilePage } from './pages/edit-profile';
import { ChangePasswordPage } from './pages/change-password';
import { LoginPage } from './pages/login';
import { SignupPage } from './pages/signup';
import { router } from './utils/router';

router
  .use('/login', LoginPage)
  .use('/', LoginPage)
  .use('/signup', SignupPage)
  .use('/main', MainPage)
  .use('/profile', ProfilePage)
  .use('/edit-profile', EditProfilePage)
  .use('/change-password', ChangePasswordPage)
  .use('/500', ErrorOnServerPage)
  .use('/404', NotFoundPage)
  .start();

if (!router.getRoute(window.location.pathname)) {
  router.go('/404');
}
