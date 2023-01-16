import { IQuery } from "../../../commons/types/generated/types";

export interface ISignUpProps {
  isEdit: boolean;
  isUser?: boolean;
  infoUser?: {
    fetchUser?: IQuery["fetchUser"];
    fetchOwnerLoggedIn?: IQuery["fetchOwnerLoggedIn"];
  };
}

export interface ICheckAuth {
  [key: string]: {
    [key: string]: boolean;
  };
  email: {
    checking: boolean;
    checkAccect: boolean;
  };
  phone: {
    checking: boolean;
    checkAccect: boolean;
  };
}
