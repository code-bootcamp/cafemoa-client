import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchMyCafesArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_MY_CAFES = gql`
  query fetchMyCafes {
    fetchMyCafes {
      id
      cafeinfo
      operatingInfo
      cafeAddr
      detailAddr
      like
      cafeTag {
        tagName
      }
      cafeImage {
        cafe_image
      }
      cafeMenuImage {
        menu_imageUrl
      }
    }
  }
`;

export const useFetchMyCafes = () => {
  const { data } = useQuery<
    Pick<IQuery, "fetchMyCafes">,
    IQueryFetchMyCafesArgs
  >(FETCH_MY_CAFES);
  const mycafedata = data;
  return { mycafedata };
};
