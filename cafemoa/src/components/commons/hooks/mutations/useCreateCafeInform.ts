import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationCreatecafeInformArgs,
} from "../../../../commons/types/generated/types";

interface IFormCreateCafeInformData {
  cafeinfo: string;
  operatingInfo: string;
  cafeAddr: string;
  detailAddr: string;
  cafeTag: string[];
  menu_imageUrl: string[];
  cafe_imageUrl: string[];
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
      owner {
        brandName
      }
      cafeTag {
        tagName
      }
      cafeImage {
        menu_imageUrl
      }
    }
  }
`;

export const useCreateCafeInform = () => {
  const router = useRouter();
  const [CreatecafeInform] = useMutation<
    Pick<IMutation, "CreatecafeInform">,
    IMutationCreatecafeInformArgs
  >(CREATE_CAFE_INFORM);

  const CreatecafeInformSubmit = async (data: IFormCreateCafeInformData) => {
    try {
      const result = await CreatecafeInform({
        variables: {
          cafeInformInput: {
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
    CreatecafeInformSubmit,
  };
};
