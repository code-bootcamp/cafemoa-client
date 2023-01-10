import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchDeletedCouponArgs,
} from "../../../../commons/types/generated/types";

export const DELETED_COUPON = gql`
  query fetchDeletedCoupon {
    fetchDeletedCoupon {
      id
      expired
      expiredDate
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

export const useFetchDeletedCoupon = () => {
  const { data } = useQuery<
    Pick<IQuery, "fetchDeletedCoupon">,
    IQueryFetchDeletedCouponArgs
  >(DELETED_COUPON);
  return { data };
};
