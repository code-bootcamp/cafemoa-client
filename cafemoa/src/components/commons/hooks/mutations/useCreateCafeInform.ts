import { gql, useMutation } from "@apollo/client";
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
  is_WC: boolean;
  is_Parking: boolean;
  menu_imageUrl: string[];
  cafe_imageUrl: string[];
}

export const CREATE_CAFE_INFORM = gql`
  mutation CreatecafeInform($cafeInformInput: CafeInformInput!) {
    CreatecafeInform(cafeInformInput: $cafeInformInput) {
      id
    }
  }
`;

export const useCreateCafeInform = () => {
  const [CreatecafeInform] = useMutation<
    Pick<IMutation, "CreatecafeInform">,
    IMutationCreatecafeInformArgs
  >(CREATE_CAFE_INFORM);

  const CreatecafeInformSubmit = async (
    data: IFormCreateCafeInformData,
    MenuimageUrl: string | undefined[],
    CafeimageUrl: string[]
  ) => {
    try {
      const result = await CreatecafeInform({
        variables: {
          cafeInformInput: {
            ...data,
            menu_imageUrl: MenuimageUrl,
            cafe_imageUrl: CafeimageUrl,
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
