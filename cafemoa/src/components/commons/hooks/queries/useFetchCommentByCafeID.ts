import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchCommentBycafeIdArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_COMMENT_BY_CAFE_ID = gql`
  query fetchCommentBycafeID($cafeID: String!) {
    fetchCommentBycafeID(cafeID: $cafeID) {
      id
      reply
      like
      time
      user {
        id
        name
        nickname
        profileImage
      }
      commentImage {
        id
        image_url
      }
    }
  }
`;

export const useFetchCommentByCafeID = () => {
  const router = useRouter();
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchCommentBycafeID">,
    IQueryFetchCommentBycafeIdArgs
  >(FETCH_COMMENT_BY_CAFE_ID, {
    variables: {
      cafeID: String(router.query.cafeInformID),
    },
  });

  const onHandleMore = async () => {
    if (data === undefined) return;
    if (data.fetchCommentBycafeID.length === 0) return;
    try {
      void fetchMore({
        variables: {
          page: Number(Math.ceil(data.fetchCommentBycafeID.length / 10) + 1),
        },
        updateQuery(prev, { fetchMoreResult }) {
          if (fetchMoreResult.fetchCommentBycafeID === undefined) {
            return {
              fetchCommentBycafeID: [...prev.fetchCommentBycafeID],
            };
          }
          return {
            fetchCommentBycafeID: [
              ...prev?.fetchCommentBycafeID,
              ...fetchMoreResult?.fetchCommentBycafeID,
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
