import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import {
  IMutation,
  IMutationSendTokenToSmsArgs,
} from "../../../../commons/types/generated/types";

interface IPhoneVerify {
  phone: string;
}

export const PHONE_VERIFY = gql`
  mutation sendTokenToSMS($phone: String!) {
    sendTokenToSMS(phone: $phone)
  }
`;

export const usePhoneVerify = () => {
  const [accessNum, setAccessNum] = useState<string>();
  const [sendTokenToSMS] = useMutation<
    Pick<IMutation, "sendTokenToSMS">,
    IMutationSendTokenToSmsArgs
  >(PHONE_VERIFY);

  const phoneVerifySubmit = async (data: IPhoneVerify) => {
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
    phoneVerifySubmit,
    accessNum,
  };
};
