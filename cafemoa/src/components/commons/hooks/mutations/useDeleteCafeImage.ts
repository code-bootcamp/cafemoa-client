import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationDeleteCafeImageArgs,
} from "../../../../commons/types/generated/types";

export const DELETE_CAFE_IMAGE = gql`
  mutation deleteCafeImage($cafeImageID: String!) {
    deleteCafeImage(cafeImageID: $cafeImageID)
  }
`;

export const useDeleteCafeImage = () => {
  const [deleteCafeImage] = useMutation<
    Pick<IMutation, "deleteCafeImage">,
    IMutationDeleteCafeImageArgs
  >(DELETE_CAFE_IMAGE);

  const onDeleteCafeImage = async (cafeImageID: string) => {
    console.log(cafeImageID);
    try {
      await deleteCafeImage({
        variables: {
          cafeImageID,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return { onDeleteCafeImage };
};
