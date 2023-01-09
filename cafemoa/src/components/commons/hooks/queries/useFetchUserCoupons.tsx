import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";

export const USER_COUPONS = gql`
  query fetchUserCoupons($page: Int) {
    fetchUserCoupons(page: $page) {
      id
      stamp
      expiredDate
      user {
        id
        name
        phoneNumber
      }
      cafeInform {
        id
        brandName
      }
    }
  }
`;

export const useFetchUserCoupons = (page) => {
  const { data } = useQuery<Pick<IQuery, "fetchUserCoupons">>(USER_COUPONS, {
    variables: {
      page,
    },
  });
  return { data };
};
