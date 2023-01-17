import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUpdateOwnerArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_OWNER_LOGGEDIN } from "../queries/useFetchUser";

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
        refetchQueries: [
          {
            query: FETCH_OWNER_LOGGEDIN,
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return {
    updateOwnerSubmit,
  };
};
