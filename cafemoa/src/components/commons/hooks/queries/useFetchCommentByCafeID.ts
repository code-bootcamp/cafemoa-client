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
  const { data } = useQuery<
    Pick<IQuery, "fetchCommentBycafeID">,
    IQueryFetchCommentBycafeIdArgs
  >(FETCH_COMMENT_BY_CAFE_ID, {
    variables: {
      cafeID: String(router.query.cafeInformID),
    },
  });
  return { data };
};
