import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUpdateOwnerArgs,
} from "../../../../commons/types/generated/types";

export interface IFormUpdateOwnerData {
  password: string;
  is_main: boolean;
}

export const UPDATE_OWNER = gql`
  mutation updateOwner($updateOwnerInput: OwnerUpdateInput!) {
    updateOwner(updateOwnerInput: $updateOwnerInput) {
      is_main
    }
  }
`;

export const useUpdateOwner = () => {
  const [updateOwner] = useMutation<
    Pick<IMutation, "updateOwner">,
    IMutationUpdateOwnerArgs
  >(UPDATE_OWNER);

  const updateOwnerSubmit = async (data: IFormUpdateOwnerData) => {
    try {
      await updateOwner({
        variables: {
          updateOwnerInput: {
            ...data,
          },
        },
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return {
    updateOwnerSubmit,
  };
};
