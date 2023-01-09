import { gql, useQuery } from "@apollo/client";
import _ from "lodash";
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

export const useFetchUser = () => {
  const { data } = useQuery<Pick<IQuery, "fetchUser">>(FETCH_USER);
  const [, setInfoUser] = useRecoilState(infoUserState);

  useEffect(() => {
    if (data === undefined) return;
    setInfoUser(data);
  }, [data]);

  return {
    data,
  };
};
