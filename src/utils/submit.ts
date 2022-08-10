import { validationListener } from './validation';
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
    }
    window.location.href = `${window.location.origin}/profile`;
  } else {
    document.querySelectorAll('label').forEach((field) => {
      validationListener({ element: field });
    });
  }
};
