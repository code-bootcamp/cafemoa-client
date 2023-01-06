import { gql, useMutation } from "@apollo/client";
import { IMutation } from "../../../../commons/types/generated/types";

export const OWNER_LOGIN = gql`
  mutation ownerLogin($email: String!, $password: String!) {
    ownerLogin(email: $email, password: $password)
  }
`;

export const useOwnerLogin = () => {
  const mutation = useMutation<Pick<IMutation, "ownerLogin">>(OWNER_LOGIN);

  return mutation;
};
