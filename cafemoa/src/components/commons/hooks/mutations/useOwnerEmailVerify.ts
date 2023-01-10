import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import {
  IMutation,
  IMutationEmailVerifyArgs,
  IMutationSendTokenToOwnerEmailArgs,
} from "../../../../commons/types/generated/types";

interface IEmailVerify {
  email: string;
}

export const OWNER_EMAIL_VERIFY = gql`
  mutation sendTokenToOwnerEmail($email: String!) {
    sendTokenToOwnerEmail(email: $email)
  }
`;

export const useOwnerEmailVerify = () => {
  const [accessNum, setAccessNum] = useState<string>();
  const [sendTokenToOwnerEmail] = useMutation<
    Pick<IMutation, "sendTokenToOwnerEmail">,
    IMutationSendTokenToOwnerEmailArgs
  >(OWNER_EMAIL_VERIFY);
  const ownerEmailVerifySubmit = async (data: IEmailVerify) => {
    try {
      const result = await sendTokenToOwnerEmail({
        variables: {
          ...data,
        },
      });
      console.log(result);
      setAccessNum(result.data?.sendTokenToOwnerEmail);
    } catch (error) {
      if (error instanceof Error) return alert(error.message);
    }
  };

  return {
    ownerEmailVerifySubmit,
    accessNum,
  };
};
