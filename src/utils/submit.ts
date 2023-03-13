import { validationListener } from './validation';
import store from '../store/index';
import { router } from './router';

export const submit = async (e: SubmitEvent, formName: string) => {
  e.preventDefault();

  if (validationListener({ element: document.querySelector('label')! })) {
    const form = document.querySelector('form');
    const data = new FormData();

    form!.querySelectorAll('input').forEach((input) => {
      data.set(input.name, input.value);
    });
    for (const [key, value] of data) {
      console.log(key, ':', value);
    }

    if (formName === 'login') {
      await store.user.loginUser({
        login: data.get('login') as string,
        password: data.get('password') as string,
      });
      router.go('/main');
    } else if (formName === 'signup') {
      await store.user.registerUser({
        first_name: data.get('first_name') as string,
        second_name: data.get('second_name') as string,
        login: data.get('login') as string,
        email: data.get('email') as string,
        password: data.get('password') as string,
        phone: data.get('phone') as string,
      });
      router.go('/login');
    } else if (formName === 'editProfile') {
      await store.user.editUser({
        first_name: data.get('first_name') as string,
        second_name: data.get('second_name') as string,
        login: data.get('login') as string,
        email: data.get('email') as string,
        phone: data.get('phone') as string,
        display_name: data.get('display_name') as string,
      });
    }

    // window.location.href = `${window.location.origin}/profile`;
  } else {
    document.querySelectorAll('label').forEach((field) => {
      validationListener({ element: field });
    });
  }
};
