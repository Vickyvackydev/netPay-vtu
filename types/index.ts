export interface RegisterTypes {
  full_name: string;
  email: string;
  phone: string;
  password: string;
  password_confirmation: string;
}

export interface UserPayload {
  full_name: string;
  email: string;
  phone: string;
  id: string;
}
