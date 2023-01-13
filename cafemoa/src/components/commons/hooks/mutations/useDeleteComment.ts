import { gql, useMutation } from "@apollo/client";
import { IMutation } from "../../../../commons/types/generated/types";

export const DELETE_COMMENT = gql`
  mutation deleteComment($commentId: String!) {
    deleteComment(commentId: $commentId)
  }
`;

export const useDeleteComment = () => {
  const mutation =
    useMutation<Pick<IMutation, "deleteComment">>(DELETE_COMMENT);

  return mutation;
};
