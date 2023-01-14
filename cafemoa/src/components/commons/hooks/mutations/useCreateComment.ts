import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationCreateCommentArgs,
} from "../../../../commons/types/generated/types";

interface IFormCreateCommentData {
  reply: string;
  image_Url?: string[];
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
  const router = useRouter();
  const [createComment] = useMutation<
    Pick<IMutation, "createComment">,
    IMutationCreateCommentArgs
  >(CREATE_COMMENT);

  const createCommentSubmit = async (
    data: IFormCreateCommentData,
    cafeinformId: string,
    resultUrls: string[]
  ) => {
    console.log(
      "data: ",
      data,
      "cafeinformId : ",
      cafeinformId,
      "resultUrls :",
      resultUrls
    );
    try {
      const result = await createComment({
        variables: {
          cafeinformId,
          createCommentinput: {
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
    createCommentSubmit,
  };
};
