import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUserCommentsArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_USER_COMMENTS = gql`
  query fetchUserComments($page: Int) {
    fetchUserComments(page: $page) {
      id
      reply
      time
      cafeinfo {
        id
        like
        owner {
          brandName
        }
      }
      commentImage {
        id
        image_url
      }
    }
  }
`;

export const useFetchUserComments = () => {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUserComments">,
    IQueryFetchUserCommentsArgs
  >(FETCH_USER_COMMENTS);

  const onHandleMore = async () => {
    if (data === undefined) return;
    if (data.fetchUserComments?.length === 0) return;
    try {
      void fetchMore({
        variables: {
          location: "",
          page: Number(Math.ceil(data.fetchUserComments.length / 10) + 1),
        },
        updateQuery(prev, { fetchMoreResult }) {
          if (fetchMoreResult.fetchUserComments === undefined) {
            return {
              fetchUserComments: [...prev.fetchUserComments],
            };
          }
          if (prev.fetchUserComments === undefined) {
            return {
              fetchUserComments: [],
            };
          }
          return {
            fetchUserComments: [
              ...prev?.fetchUserComments,
              ...fetchMoreResult?.fetchUserComments,
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
