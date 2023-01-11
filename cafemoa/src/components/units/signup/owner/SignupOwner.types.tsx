export interface IFormCreateOwnerData {
  name: string;
  email: string;
  phone: string;
  password: string;
  passwordCheck: string;
  ownerNum: string;
  ownerPassword: string;
  ownerPasswordCheck: string;
  is_main: boolean;
  brandName: string;
  opening?: string;
  emailAccess?: string;
  phoneAccess?: string;
}
