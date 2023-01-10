import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUserCouponsArgs,
} from "../../../../commons/types/generated/types";

export const USER_COUPONS = gql`
  query fetchUserCoupons {
    fetchUserCoupons {
      id
      expiredDate
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

export const useFetchUserCoupons = () => {
  const { data } = useQuery<
    Pick<IQuery, "fetchUserCoupons">,
    IQueryFetchUserCouponsArgs
  >(USER_COUPONS);
  return { data };
};
