export const LOGIN_REGEXP = new RegExp(
  /(?=[a-zA-Z_-])+(^[0-9a-zA-Z_-]{3,20}$)|(^[0-9a-zA-Z_-]{3,20}$)(?=[a-zA-Z_-])/
);
export const PASSWORD_REGEXP = new RegExp(
  /(?=[a-zA-Z_\- = \/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,40}$/
);
export const EMAIL_REGEXP = new RegExp(
  /([a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
);
export const PHONE_REGEXP = new RegExp(
  /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
);
export const FIRST_SECOND_NAME_REGEXP = new RegExp(/^[A-ZА-Я][-а-я\w]*$/);
export const MESSAGE_FIELD_REGEXP = new RegExp(/^(?!\s*$).+/gim);
export const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};
