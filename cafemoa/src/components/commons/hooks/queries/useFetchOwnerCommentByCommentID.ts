import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchOwnerCommentByCommentIdArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_OWNER_COMMENT_BY_COMMENT_ID = gql`
  query fetchOwnerCommentByCommentID($commentID: String!) {
    fetchOwnerCommentByCommentID(commentID: $commentID)
  }
`;

export const useFetchOwnerCommentByCommentID = (commentID: string) => {
  const { data } = useQuery<
    Pick<IQuery, "fetchOwnerCommentByCommentID">,
    IQueryFetchOwnerCommentByCommentIdArgs
  >(FETCH_OWNER_COMMENT_BY_COMMENT_ID, {
    variables: {
      commentID,
    },
  });

  // const OwnerData = data;
  return { data };
};
