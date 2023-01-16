import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchStampArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_STAMPS = gql`
  query fetchStamps {
    fetchStamps {
      id
      count
    }
  }
`;

export const useFetchStamps = () => {
  const { data } = useQuery<Pick<IQuery, "fetchStamps">, IQueryFetchStampArgs>(
    FETCH_STAMPS
  );
  return { data };
};
