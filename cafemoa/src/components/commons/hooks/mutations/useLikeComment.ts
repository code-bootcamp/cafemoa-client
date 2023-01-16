import { gql, useMutation } from "@apollo/client";
import { IMutation } from "../../../../commons/types/generated/types";

export const LIKE_COMMENT = gql`
  mutation likeComment($commentID: String!) {
    likeComment(commentID: $commentID)
  }
`;

export const useLikeComment = () => {
  const mutation = useMutation<Pick<IMutation, "likeComment">>(LIKE_COMMENT);

  return mutation;
};
