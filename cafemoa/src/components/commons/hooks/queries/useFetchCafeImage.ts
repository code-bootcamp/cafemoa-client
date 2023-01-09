import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchCafeImageArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_CAFE_IMAGE = gql`
  query fetchCafeImage($cafeInformID: String!) {
    fetchCafeImage(cafeInformID: $cafeInformID) {
      id
      cafe_image
    }
  }
`;

export const useFetchCafeImage = () => {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchCafeImage">,
    IQueryFetchCafeImageArgs
  >(FETCH_CAFE_IMAGE, {
    variables: {
      cafeInformID: String(router.query.cafeInformID),
    },
  });
  return { data };
};
