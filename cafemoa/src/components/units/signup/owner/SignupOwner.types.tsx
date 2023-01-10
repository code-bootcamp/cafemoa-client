export interface IFormCreateOwnerData {
  name: string;
  email: string;
  phone: string;
  password: string;
  passwordCheck: string;
  ownerNum: string;
  adminPassword: string;
  adminPasswordCheck: string;
  is_main?: boolean;
  brand?: string;
  opening?: string;
  emailAccess?: string;
  phoneAccess?: string;
}
