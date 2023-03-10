export type Nullable<T> = T | null;

export type Props = Record<string, any>;

export type Indexed<T = unknown> = {
  [key in string]: T;
};

export type User = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password?: string;
  phone: string;
  avatar?: string;
  display_name: string;
};

export type EditUserRequest = {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
};

export type CreateUserRequest = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

export type LoginUserRequest = {
  login: string;
  password: string;
};
