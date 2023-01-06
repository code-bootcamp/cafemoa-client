export interface IFormSignUpData {
  email: string;
  password: string;
  name: string;
  passwordCheck: string;
}

export interface IFormCreateUserData {
  name: string;
  nickname: string;
  email: string;
  // personalNumber: string;
  phoneNumber: string;
  password: string;
  passwordCheck: string;
  address?: string;
  profileImage?: string;
  emailAccess?: string;
  phoneAccess?: number;
}
