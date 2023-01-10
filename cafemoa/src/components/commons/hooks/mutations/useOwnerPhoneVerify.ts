import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import {
  IMutation,
  IMutationSendTokenToSmsArgs,
} from "../../../../commons/types/generated/types";

interface IPhoneVerify {
  phone: string;
}

export const OWNER_PHONE_VERIFY = gql`
  mutation sendTokenToSMS($phone: String!) {
    sendTokenToSMS(phone: $phone)
  }
`;

export const useOwnerPhoneVerify = () => {
  const [accessNum, setAccessNum] = useState<string>();
  const [sendTokenToSMS] = useMutation<
    Pick<IMutation, "sendTokenToSMS">,
    IMutationSendTokenToSmsArgs
  >(OWNER_PHONE_VERIFY);

  const ownerPhoneVerifySubmit = async (data: IPhoneVerify) => {
    try {
      const result = await sendTokenToSMS({
        variables: {
          ...data,
        },
      });
      setAccessNum(result.data?.sendTokenToSMS);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return {
    ownerPhoneVerifySubmit,
    accessNum,
  };
};
