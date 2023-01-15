import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import {
  IMutation,
  IMutationCreateCommentArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_COMMENT_BY_CAFE_ID } from "../queries/useFetchCommentByCafeID";

interface IFormCreateCommentData {
  reply: string;
  image_Url: string[];
}

export const CREATE_COMMENT = gql`
  mutation createComment(
    $createCommentinput: createCommentInput!
    $cafeinformId: String!
  ) {
    createComment(
      createCommentinput: $createCommentinput
      cafeinformId: $cafeinformId
    ) {
      id
      reply
    }
  }
`;

export const useCreateComment = () => {
  const [createComment] = useMutation<
    Pick<IMutation, "createComment">,
    IMutationCreateCommentArgs
  >(CREATE_COMMENT);

  const createCommentSubmit = async (
    data: IFormCreateCommentData,
    cafeinformId: string
    // resultUrls: string[]
  ) => {
    try {
      await createComment({
        variables: {
          cafeinformId,
          createCommentinput: {
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
        content: "리뷰 등록이 완료 되었습니다.",
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return {
    createCommentSubmit,
  };
};
