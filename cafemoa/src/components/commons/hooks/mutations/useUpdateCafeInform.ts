import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationUpdateCafeInformArgs,
} from "../../../../commons/types/generated/types";

interface IFormUpdateCafeInformData {
  cafeinfo: string;
  operatingInfo: string;
  cafeAddr: string;
  detailAddr: string;
  cafeTag: string[];
  menu_imageUrl: string[];
  cafe_imageUrl: string[];
}

export const UPDATE_CAFE_INFORM = gql`
  mutation updateCafeInform(
    $cafeInformInput: CafeInformInput!
    $cafeInformID: String!
  ) {
    updateCafeInform(
      cafeInformInput: $cafeInformInput
      cafeInformID: $cafeInformID
    ) {
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

export const useUpdateCafeInform = () => {
  const router = useRouter();
  const [updateCafeInform] = useMutation<
    Pick<IMutation, "updateCafeInform">,
    IMutationUpdateCafeInformArgs
  >(UPDATE_CAFE_INFORM);

  const UpdateCafeInformSubmit = async (cafeInformID, data) => {
    try {
      const result = await updateCafeInform({
        variables: {
          cafeInformID,
          updateCafeInform: {
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
    UpdateCafeInformSubmit,
  };
};
