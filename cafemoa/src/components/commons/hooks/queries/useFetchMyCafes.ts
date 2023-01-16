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
      is_WC
      is_Parking
      cafeTag {
        tagName
      }
      cafeImage {
        id
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
  return { data };
};
