import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateOwnerArgs,
} from "../../../../commons/types/generated/types";

export interface IFormCreateOwnerData {
  name: string;
  email: string;
  phone: string;
  password: string;
  ownerNum: string;
  ownerPassword: string;
  is_main: boolean;
  brandName: string;
}

export const CREATE_OWNER = gql`
  mutation CreateOwner($createOwnerInput: OwnerInput!) {
    CreateOwner(createOwnerInput: $createOwnerInput) {
      name
      email
      phone
      is_main
      brandName
    }
  }
`;

export const useCreateOwner = () => {
  const [CreateOwner] = useMutation<
    Pick<IMutation, "CreateOwner">,
    IMutationCreateOwnerArgs
  >(CREATE_OWNER);

  const createOwnerSubmit = async (data: IFormCreateOwnerData) => {
    try {
      const result = await CreateOwner({
        variables: {
          createOwnerInput: {
            ...data,
          },
        },
      });
      console.log(result.data);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return {
    createOwnerSubmit,
  };
};
