import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import {
  IMutation,
  IMutationEmailVerifyArgs,
} from "../../../../commons/types/generated/types";

interface IEmailVerify {
  email: string;
}

export const EMAIL_VERIFY = gql`
  mutation emailVerify($email: String!) {
    emailVerify(email: $email)
  }
`;

export const useEmailVerify = () => {
  const [accessNum, setAccessNum] = useState<string>();
  const [emailVerify] = useMutation<
    Pick<IMutation, "emailVerify">,
    IMutationEmailVerifyArgs
  >(EMAIL_VERIFY);
  const emailVerifySubmit = async (data: IEmailVerify) => {
    try {
      const result = await emailVerify({
        variables: {
          ...data,
        },
      });
      console.log(result);
      setAccessNum(result.data?.emailVerify);
    } catch (error) {
      if (error instanceof Error) return alert(error.message);
    }
  };

  return {
    emailVerifySubmit,
    accessNum,
  };
};
