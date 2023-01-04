import { gql, useMutation } from "@apollo/client";
import { IMutation } from "../../../../commons/types/generated/types";

export const USER_LOGIN = gql`
  mutation userLogin($email: String!, $password: String!) {
    userLogin(email: $email, password: $password)
  }
`;

export const useUserLogin = () => {
  const mutation = useMutation<Pick<IMutation, "userLogin">>(USER_LOGIN);

  return mutation;
};
