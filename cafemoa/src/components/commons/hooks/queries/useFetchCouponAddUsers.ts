import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchCouponAddUsersArgs,
} from "../../../../commons/types/generated/types";
import _ from "lodash";
import { useEffect, useState } from "react";

export const COUPON_ADD_USERS = gql`
  query fetchCouponAddUsers($phone: String) {
    fetchCouponAddUsers(phone: $phone) {
      id
      name
      nickname
      phone
    }
  }
`;

export const fetchCouponAddUsers = () => {
  const [phoneState, setPhoneState] = useState<string>("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchCouponAddUsers">,
    IQueryFetchCouponAddUsersArgs
  >(COUPON_ADD_USERS, {
    variables: {
      phone: "",
    },
  });

  const getDebounce = _.debounce((phone) => {
    setPhoneState(phone);
  }, 300);

  const onRefetchUsers = (phone: string) => {
    console.log(phone);
    getDebounce(phone);
  };

  useEffect(() => {
    void refetch({ phone: phoneState });
  }, [phoneState]);

  return { data, onRefetchUsers };
};
