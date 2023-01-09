import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";

export const USER_STAMPS = gql`
  query fetchUserStamps {
    fetchUserStamps {
      id
      count
      user {
        id
        name
      }
      cafeInform {
        id
        brandName
        cafeinfo
      }
    }
  }
`;

export const useFetchUserStamps = () => {
  const { data } = useQuery<Pick<IQuery, "fetchUserStamps">>(USER_STAMPS);
  return { data };
};
