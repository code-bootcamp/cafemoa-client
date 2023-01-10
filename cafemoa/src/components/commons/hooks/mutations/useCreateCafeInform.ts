import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationCreatecafeInformArgs,
  IMutationCreateCommentArgs,
} from "../../../../commons/types/generated/types";

interface IFormCreateOwnerData {
  reply: string;
  images: string[];
}

export const CREATE_CAFE_INFORM = gql`
  mutation CreatecafeInform($cafeInformInput: CafeInformInput!) {
    CreatecafeInform(cafeInformInput: $cafeInformInput) {
      id
      cafeinfo
      operatingInfo
      cafeAddr
      detailAddr
      like
      brandName
      cafeTag
      cafeImage
    }
  }
`;

export const useCreateCafeInform = () => {
  const router = useRouter();
  const [CreatecafeInform] = useMutation<
    Pick<IMutation, "CreatecafeInform">,
    IMutationCreatecafeInformArgs
  >(CREATE_CAFE_INFORM);

  const CreatecafeInformSubmit = async (data: IFormCreateOwnerData) => {
    try {
      const result = await createComment({
        variables: {
          cafeinformId: router.query.cafeinformId,
          createCommentinput: {
            ...data,
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
