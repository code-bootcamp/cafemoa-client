import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { infoUserState } from "../../../../commons/stores";
import { IQuery } from "../../../../commons/types/generated/types";

const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      id
      name
      nickname
      email
      address
      detailAddress
      phone
      profileImage
    }
  }
`;
const FETCH_OWNER_LOGGEDIN = gql`
  query fetchOwnerLoggedIn {
    fetchOwnerLoggedIn {
      id
      name
      email
      phone
      is_main
      is_cafeInform
      ownerNum
      brandName
    }
  }
`;

export const useFetchUser = () => {
  const { data: user } = useQuery<Pick<IQuery, "fetchUser">>(FETCH_USER);
  const { data: owner } =
    useQuery<Pick<IQuery, "fetchOwnerLoggedIn">>(FETCH_OWNER_LOGGEDIN);
  const [, setInfoUser] = useRecoilState(infoUserState);
  useEffect(() => {
    if (user !== undefined) {
      setInfoUser(user);
    }
    if (owner !== undefined) {
      setInfoUser(owner);
    }
  }, [user, owner]);
  console.log(owner);
  return {
    user,
    owner,
  };
};
