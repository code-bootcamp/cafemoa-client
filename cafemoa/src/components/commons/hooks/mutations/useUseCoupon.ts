import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import {
  IMutation,
  IMutationUseCouponArgs,
} from "../../../../commons/types/generated/types";
import { DELETED_COUPON } from "../queries/useFetchDeletedCoupon";
import { USER_COUPONS } from "../queries/useFetchUserCoupons";

interface IFormUseCouponData {
  password: string;
  couponId: string;
}

export const USE_COUPON = gql`
  mutation useCoupon($couponId: String!, $password: String!) {
    useCoupon(couponId: $couponId, password: $password) {
      id
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
        refetchQueries: [
          {
            query: USER_COUPONS,
          },
          {
            query: DELETED_COUPON,
          },
        ],
      });
      console.log(result);
      Modal.success({
        content: "쿠폰 사용처리 되었습니다!",
      });
      return;
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };
  return { useCouponSubmit };
};
