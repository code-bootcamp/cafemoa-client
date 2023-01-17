import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUserCouponsArgs,
} from "../../../../commons/types/generated/types";

export const USER_COUPONS = gql`
  query fetchUserCoupons($page: Int) {
    fetchUserCoupons(page: $page) {
      id
      expiredDate
      user {
        id
        name
      }
      cafeInform {
        id
        cafeinfo
        owner {
          name
          brandName
        }
      }
    }
  }
`;

export const useFetchUserCoupons = () => {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUserCoupons">,
    IQueryFetchUserCouponsArgs
  >(USER_COUPONS);

  const onHandleMore = async () => {
    if (data === undefined) return;
    if (data.fetchUserCoupons?.length === 0) return;
    try {
      void fetchMore({
        variables: {
          location: "",
          page: Number(Math.ceil(data.fetchUserCoupons.length / 10) + 1),
        },
        updateQuery(prev, { fetchMoreResult }) {
          if (fetchMoreResult.fetchUserCoupons === undefined) {
            return {
              fetchUserCoupons: [...prev.fetchUserCoupons],
            };
          }
          if (prev.fetchUserCoupons === undefined) {
            return {
              fetchUserCoupons: [],
            };
          }
          return {
            fetchUserCoupons: [
              ...prev?.fetchUserCoupons,
              ...fetchMoreResult?.fetchUserCoupons,
            ],
          };
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return { data, onHandleMore };
};
