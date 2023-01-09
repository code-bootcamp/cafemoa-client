import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
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
  const [nameState, setNameState] = useState<string>("");

  const { data, refetch } = useQuery<Pick<IQuery, "fetchCouponAddUsers">>(
    COUPON_ADD_USERS,
    {
      variables: {
        phone: "",
      },
    }
  );

  const getDebounce = _.debounce((name) => {
    setNameState(name);
  }, 300);

  const onRefetchUsers = (name: string) => {
    console.log(name);
    getDebounce(name);
  };

  useEffect(() => {
    void refetch({ phone: nameState });
  }, [nameState]);

  return { data, onRefetchUsers };
};
