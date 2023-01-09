import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";

export const USER_COUPONS = gql`
  query fetchUserCoupons {
    fetchUserCoupons {
      id
      # count
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
  const { data } = useQuery<Pick<IQuery, "fetchUserCoupons">>(USER_COUPONS);
  return { data };
};
