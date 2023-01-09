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
      like
      ownerNum
      brandName
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
