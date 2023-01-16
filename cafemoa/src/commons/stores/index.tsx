import { atom, selector } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";
import { IQuery } from "../types/generated/types";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

interface IUser {
  fetchUser?: IQuery["fetchUser"];
  fetchOwnerLoggedIn?: IQuery["fetchOwnerLoggedIn"];
}

export const infoUserState = atom<IUser>({
  key: "infoUserState",
  default: undefined,
});

export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});
