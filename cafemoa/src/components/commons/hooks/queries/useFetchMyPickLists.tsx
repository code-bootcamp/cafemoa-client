import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";

export const MY_PICK_LISTS = gql`
  query fetchMyPickLists {
    fetchMyPickLists {
      id
      user {
        id
        name
      }
      cafeInform {
        id
        brandName
        cafeinfo
        cafeAddr
        like
      }
    }
  }
`;

export const useFetchMyPickLists = () => {
  const { data } = useQuery<Pick<IQuery, "fetchMyPickLists">>(MY_PICK_LISTS);
  return { data };
};
