import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateOwnerCommentArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_COMMENT_BY_CAFE_ID } from "../queries/useFetchCommentByCafeID";

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
    commentID: String
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
            query: FETCH_COMMENT_BY_CAFE_ID,
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
