import { gql, useMutation } from "@apollo/client";
import { IMutation } from "../../../../commons/types/generated/types";

export const FIND_USER_PWD = gql`
  mutation findUserPwd($email: String!) {
    findUserPwd(email: $email)
  }
`;

export const useFindUserPwd = () => {
  const mutation = useMutation<Pick<IMutation, "findUserPwd">>(FIND_USER_PWD);

  return mutation;
};
