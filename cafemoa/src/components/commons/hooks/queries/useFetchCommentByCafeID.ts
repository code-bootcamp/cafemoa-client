import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery } from "../../../../commons/types/generated/types";

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

export const useFetchCommentBycafeID = () => {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchCommentBycafeID">,
    IQueryFetchCommentBycafeIDArgs
  >(FETCH_COMMENT_BY_CAFE_ID, {
    variables: {
      cafeID: router.query.cafeInformID,
    },
  });
  return { data };
};
