import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUnusualStampsArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_UNUSUAL_STAMPS = gql`
  query fetchUnusualStamps($cafeId: String!) {
    fetchUnusualStamps(cafeId: $cafeId) {
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
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchUnusualStamps">,
    IQueryFetchUnusualStampsArgs
  >(FETCH_UNUSUAL_STAMPS, {
    variables: {
      cafeId: router.query.cafeId,
    },
  });
  return { data };
};
