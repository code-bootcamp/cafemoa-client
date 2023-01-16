import { gql, useMutation } from "@apollo/client";
// import { useRouter } from "next/router";
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
    $updateCafeInform: UpdateCafeInform!
    $cafeInformID: String!
  ) {
    updateCafeInform(
      updateCafeInform: $updateCafeInform
      cafeInformID: $cafeInformID
    ) {
      id
    }
  }
`;

export const useUpdateCafeInform = () => {
  const [updateCafeInform] = useMutation<
    Pick<IMutation, "updateCafeInform">,
    IMutationUpdateCafeInformArgs
  >(UPDATE_CAFE_INFORM);

  const UpdateCafeInformSubmit = async (
    cafeInformID: string,
    data: IFormUpdateCafeInformData
  ) => {
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
