import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateOwnerCommentArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_OWNER_COMMENT_BY_COMMENT_ID } from "../queries/useFetchOwnerCommentByCommentID";

interface IFormCreateOwnerCommentData {
  content: string;
}

export const CREATE_OWNER_COMMENT = gql`
  mutation createOwnerComment(
    $createOwnerCommentInput: CreateOwnerCommentInput!
    $commentID: String!
  ) {
    createOwnerComment(
      createOwnerCommentInput: $createOwnerCommentInput
      commentID: $commentID
    ) {
      id
      content
    }
  }
`;

export const useCreateOwnerComment = () => {
  const [createOwnerComment] = useMutation<
    Pick<IMutation, "createComment">,
    IMutationCreateOwnerCommentArgs
  >(CREATE_OWNER_COMMENT);

  const createOwnerCommentSubmit = async (
    data: IFormCreateOwnerCommentData,
    commentID: string
  ) => {
    try {
      const result = await createOwnerComment({
        variables: {
          commentID,
          createOwnerCommentInput: {
            ...data,
          },
        },
        refetchQueries: [
          {
            query: FETCH_OWNER_COMMENT_BY_COMMENT_ID,
            variables: {
              commentID,
            },
          },
        ],
      });
      console.log(result.data);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return {
    createOwnerCommentSubmit,
  };
};
