import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchCafeInformArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_CAFE_INFORM = gql`
  query fetchCafeInform($cafeInformID: String!) {
    fetchCafeInform(cafeInformID: $cafeInformID) {
      id
      cafeinfo
      operatingInfo
      cafeAddr
      notice
      like
      is_WC
      is_Wifi
      is_Parking
      owner {
        brandName
      }
      cafeImage {
        id
        cafe_image
      }
      cafeMenuImage {
        id
        menu_imageUrl
      }
      cafeTag {
        id
        tagName
      }
    }
  }
`;

export const useFetchCafeInform = () => {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchCafeInform">,
    IQueryFetchCafeInformArgs
  >(FETCH_CAFE_INFORM, {
    variables: {
      cafeInformID: String(router.query.cafeInformID),
    },
  });
  return { data };
};
