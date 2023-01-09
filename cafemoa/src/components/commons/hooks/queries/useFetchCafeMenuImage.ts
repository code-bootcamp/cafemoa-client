import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchCafeMenuImageArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_CAFE_MENU_IMAGE = gql`
  query fetchCafeMenuImage($cafeInformID: String!) {
    fetchCafeMenuImage(cafeInformID: $cafeInformID) {
      id
      cafe_image
    }
  }
`;

export const useFetchCafeMenuImage = () => {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchCafeMenuImage">,
    IQueryFetchCafeMenuImageArgs
  >(FETCH_CAFE_MENU_IMAGE, {
    variables: {
      CafeInformID: String(router.query.cafeInformID),
    },
  });
  const cafeMenuImage = data;
  return { cafeMenuImage };
};
