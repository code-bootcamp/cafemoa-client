import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUpdateCommentArgs,
} from "../../../../commons/types/generated/types";

interface IFormUpdateCommentData {
  reply: string;
  image_Url?: string[];
}

export const UPDATE_COMMENT = gql`
  mutation updateComment(
    $UpdateCommentInput: UpdateCommentInput!
    $commentId: String!
  ) {
    updateComment(
      UpdateCommentInput: $UpdateCommentInput
      commentId: $commentId
    ) {
      id
      reply
    }
  }
`;

export const useUpdateComment = () => {
  const [updateComment] = useMutation<
    Pick<IMutation, "updateComment">,
    IMutationUpdateCommentArgs
  >(UPDATE_COMMENT);

  const updateCommentSubmit = async (
    data: IFormUpdateCommentData,
    commentId: string,
    resultUrls: string[]
  ) => {
    try {
      const result = await updateComment({
        variables: {
          commentId,
          UpdateCommentInput: {
            ...data,
            image_Url: resultUrls,
          },
        },
      });
      console.log(result.data);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return {
    updateCommentSubmit,
  };
};
