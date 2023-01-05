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
    createUserInput(createUserInput: $createUserInput) {
      name
      nickname
      email
      address
      personalNumber
      phoneNumber
      password
      profileImage
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
      const result = await createUser({
        variables: {
          createUserInput: {
            name: data.name,
            nickname: data.nickname,
            email: data.email,
            address: data.address,
            personalNumber: data.personalNumber,
            phoneNumber: data.phoneNumber,
            password: data.password,
            profileImage: data.profileImage,
          },
        },
      });
      console.log(result.data);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return {
    createUserSubmit,
  };
};
