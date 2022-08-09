import {
  loginRegExp,
  passwordRegExp,
  emailRegExp,
  phoneRegExp,
  firstSecondNameRegExp,
} from './consts';

export const validationListener = ({ element }: { element: HTMLElement }) => {
  let isValid: boolean = false;

  const input = element.querySelector('input')!;
  let password: HTMLInputElement;

  switch (input.name) {
    case 'login':
      if (!loginRegExp!.test(input!.value)) {
        element.querySelector('p')!.innerHTML =
          'Введите логин в правильном формате';
        isValid = false;
      } else {
        element.querySelector('p')!.innerHTML = '';
        isValid = true;
      }
      break;
    case 'password':
      if (!passwordRegExp!.test(input!.value)) {
        element.querySelector('p')!.innerHTML =
          'Введите пароль в правильном формате';
        isValid = false;
      } else {
        element.querySelector('p')!.innerHTML = '';
        isValid = true;
      }
      break;
    case 'email':
      if (!emailRegExp!.test(input!.value)) {
        element.querySelector('p')!.innerHTML =
          'Введите email в правильном формате';
        isValid = false;
      } else {
        element.querySelector('p')!.innerHTML = '';
        isValid = true;
      }
      break;
    case 'phone':
      if (!phoneRegExp!.test(input!.value)) {
        element.querySelector('p')!.innerHTML =
          'Введите телефон в правильном формате';
        isValid = true;
      } else {
        element.querySelector('p')!.innerHTML = '';
        isValid = false;
      }
      break;
    case 'first_name':
      if (!firstSecondNameRegExp!.test(input!.value)) {
        element.querySelector('p')!.innerHTML =
          'Введите имя в правильном формате';
        isValid = false;
      } else {
        element.querySelector('p')!.innerHTML = '';
        isValid = true;
      }
      break;
    case 'second_name':
      if (!firstSecondNameRegExp!.test(input!.value)) {
        element.querySelector('p')!.innerHTML =
          'Введите фамилию в правильном формате';
        isValid = false;
      } else {
        element.querySelector('p')!.innerHTML = '';
        isValid = true;
      }
      break;
    case 'confirmPassword':
      document.querySelectorAll('input').forEach((el) => {
        if (el.name === 'password') {
          password = input;
        }
      });
      if (
        password!.value.localeCompare(element.querySelector('input')!.value)
      ) {
        element.querySelector('p')!.innerHTML = 'Пароли не совпадают';
        isValid = false;
      } else {
        element.querySelector('p')!.innerHTML = '';
        isValid = true;
      }
      break;
    default:
      break;
  }
  return isValid;
};
