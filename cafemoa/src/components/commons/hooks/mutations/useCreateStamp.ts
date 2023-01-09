import { gql, useMutation } from "@apollo/client";
import { IMutation } from "../../../../commons/types/generated/types";

export const CREATE_STAMP = gql`
  mutation createStamp($createStampInput: CreateStampInput!) {
    createStamp(createStampInput: $createStampInput) {
      id
      count
      user {
        id
        name
      }
      cafeInform {
        id
        brandName
        cafeinfo
      }
    }
  }
`;

export const useCreateStamp = () => {
  const mutation = useMutation<Pick<IMutation, "createStamp">>(CREATE_STAMP);

  return mutation;
};
