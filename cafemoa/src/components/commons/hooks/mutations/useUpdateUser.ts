import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUpdateUserArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USER } from "../queries/useFetchUser";

interface IFormUpdateUserData {
  address: string;
  detailAddress: string;
  password: string;
  profileImage: string;
}

export const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      id
    }
  }
`;

export const useUpdateUser = () => {
  const [updateUser] = useMutation<
    Pick<IMutation, "updateUser">,
    IMutationUpdateUserArgs
  >(UPDATE_USER);

  const updateUserSubmit = async (data: IFormUpdateUserData, files: string) => {
    console.log(data);
    try {
      await updateUser({
        variables: {
          updateUserInput: {
            ...data,
            profileImage: files,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USER,
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return {
    updateUserSubmit,
  };
};
