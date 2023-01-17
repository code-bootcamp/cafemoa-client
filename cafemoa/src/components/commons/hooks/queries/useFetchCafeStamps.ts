import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchCafeStampsArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_CAFE_STAMPS = gql`
  query fetchCafeStamps($cafeId: String!) {
    fetchCafeStamps(cafeId: $cafeId)
  }
`;

export const useFetchCafeStamps = (cafeId: string) => {
  const { data } = useQuery<
    Pick<IQuery, "fetchCafeStamps">,
    IQueryFetchCafeStampsArgs
  >(FETCH_CAFE_STAMPS, {
    variables: {
      cafeId,
    },
  });
  return { data };
};
