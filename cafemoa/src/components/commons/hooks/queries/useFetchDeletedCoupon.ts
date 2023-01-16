import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";

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
        owner {
          brandName
        }
      }
    }
  }
`;

export const useFetchDeletedCoupon = () => {
  const { data } = useQuery<Pick<IQuery, "fetchDeletedCoupon">>(DELETED_COUPON);
  return { data };
};
