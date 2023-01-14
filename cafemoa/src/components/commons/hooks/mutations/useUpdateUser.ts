import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUpdateUserArgs,
} from "../../../../commons/types/generated/types";

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
      });
      alert("회원정보 수정 완료");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return {
    updateUserSubmit,
  };
};
