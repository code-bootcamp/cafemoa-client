import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUnusualStampsArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_UNUSUAL_STAMPS = gql`
  query fetchUnusualStamps($page: Int) {
    fetchUnusualStamps(page: $page) {
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
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUnusualStamps">,
    IQueryFetchUnusualStampsArgs
  >(FETCH_UNUSUAL_STAMPS);

  const onHandleMore = async () => {
    if (data === undefined) return;
    if (data.fetchUnusualStamps?.length === 0) return;
    try {
      void fetchMore({
        variables: {
          page: Number(Math.ceil(data.fetchUnusualStamps.length / 10) + 1),
        },
        updateQuery(prev, { fetchMoreResult }) {
          if (fetchMoreResult.fetchUnusualStamps === undefined) {
            return {
              fetchUnusualStamps: [...prev.fetchUnusualStamps],
            };
          }
          if (prev.fetchUnusualStamps === undefined) {
            return {
              fetchUnusualStamps: [],
            };
          }
          return {
            fetchUnusualStamps: [
              ...prev?.fetchUnusualStamps,
              ...fetchMoreResult?.fetchUnusualStamps,
            ],
          };
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return { data, onHandleMore };
};
