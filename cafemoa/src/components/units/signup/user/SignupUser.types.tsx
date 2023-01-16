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
  phone: string;
  password: string;
  passwordCheck: string;
  address: string;
  detailAddress: string;
  profileImage: string;
  emailAccess?: string;
  phoneAccess?: string;
}
