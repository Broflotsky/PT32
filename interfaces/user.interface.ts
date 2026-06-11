export interface IRegisterFormValues {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  address: string;
  phone: string;
}

export interface IUserSession {
  login: boolean;
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
    orders: [];
  };
}
