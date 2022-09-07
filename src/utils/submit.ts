import { validationListener } from './validation';
import store from '../store';

export const submit = (e: SubmitEvent) => {
  e.preventDefault();

  if (validationListener({ element: document.querySelector('label')! })) {
    const form = document.querySelector('form');
    const data = new FormData();

    form!.querySelectorAll('input').forEach((input) => {
      data.set(input.name, input.value);
    });
    for (const [key, value] of data) {
      console.log(key, ':', value);
      store.user.set(`user[${key}]`, value);
    }
    console.log(store.user.user);
    store.user.registerUser(store.user.user);
    // window.location.href = `${window.location.origin}/profile`;
  } else {
    document.querySelectorAll('label').forEach((field) => {
      validationListener({ element: field });
    });
  }
};
