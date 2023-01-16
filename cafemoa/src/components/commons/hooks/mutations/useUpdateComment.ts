import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import {
  IMutation,
  IMutationUpdateCommentArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_COMMENT_BY_CAFE_ID } from "../queries/useFetchCommentByCafeID";

interface IFormUpdateCommentData {
  reply: string;
  image_Url: string[];
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
    cafeinformId: string
    // resultUrls: string[]
  ) => {
    try {
      await updateComment({
        variables: {
          commentId,
          UpdateCommentInput: {
            ...data,
            // image_Url: [...resultUrls],
          },
        },
        refetchQueries: [
          {
            query: FETCH_COMMENT_BY_CAFE_ID,
            variables: { cafeID: cafeinformId },
          },
        ],
      });
      Modal.success({
        content: "리뷰 수정이 완료 되었습니다.",
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return {
    updateCommentSubmit,
  };
};
