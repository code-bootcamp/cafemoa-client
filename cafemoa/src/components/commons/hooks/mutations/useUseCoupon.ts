import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUseCouponArgs,
} from "../../../../commons/types/generated/types";

interface IFormUseCouponData {
  password: string;
  couponId: string;
}

export const USE_COUPON = gql`
  mutation useCoupon($couponId: String!, $password: String!) {
    useCoupon(couponId: $couponId, password: $password) {
      id
      expired
      user {
        id
        name
      }
      cafeInform {
        id
        brandName
      }
    }
  }
`;

export const useUseCoupon = () => {
  const [useCoupon] = useMutation<
    Pick<IMutation, "useCoupon">,
    IMutationUseCouponArgs
  >(USE_COUPON);

  const useCouponSubmit = async (data: IFormUseCouponData) => {
    console.log(data);
    try {
      const result = await useCoupon({
        variables: {
          ...data,
        },
      });
      console.log(result.data);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return {
    useCouponSubmit,
  };
};
