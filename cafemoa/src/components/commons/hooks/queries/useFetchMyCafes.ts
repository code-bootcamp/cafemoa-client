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
