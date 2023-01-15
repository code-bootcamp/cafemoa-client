import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";

export const FETCH_BEST_CAFE = gql`
  query fetchBestCafe {
    fetchBestCafe {
      id
      cafeinfo
      like
      thumbNail
      owner {
        brandName
      }
      cafeTag {
        id
        tagName
      }
    }
  }
`;

export const useFetchBestCafe = () => {
  const { data } = useQuery<Pick<IQuery, "fetchBestCafe">>(FETCH_BEST_CAFE);
  return { data };
};
