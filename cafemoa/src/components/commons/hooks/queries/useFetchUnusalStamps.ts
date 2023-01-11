import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUnusualStampsArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_UNUSUAL_STAMPS = gql`
  query fetchUnusualStamps {
    fetchUnusualStamps {
      id
      count
      user {
        id
        name
        nickname
      }
      stamp {
        id
        count
        updatedAt
      }
      createdAt
    }
  }
`;

export const useFetchUnusualStamps = () => {
  const { data } = useQuery<
    Pick<IQuery, "fetchUnusualStamps">,
    IQueryFetchUnusualStampsArgs
  >(FETCH_UNUSUAL_STAMPS);
  return { data };
};
