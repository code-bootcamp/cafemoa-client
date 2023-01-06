import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../../commons/types/generated/types";

interface IFormCreateUserData {
  name: string;
  nickname: string;
  email: string;
  address: string;
  personalNumber: string;
  phoneNumber: string;
  password: string;
  profileImage: string;
}

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      id
    }
  }
`;

export const useCreateUser = () => {
  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const createUserSubmit = async (data: IFormCreateUserData) => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            ...data,
            personalNumber: "",
          },
        },
      });
      alert("카페모아에서 쿠폰을 모아");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return {
    createUserSubmit,
  };
};
