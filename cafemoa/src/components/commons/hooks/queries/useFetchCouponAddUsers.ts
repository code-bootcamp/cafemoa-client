import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
import _ from "lodash";
import { useEffect, useState } from "react";

export const COUPON_ADD_USERS = gql`
  query fetchCouponAddUsers($name: String!) {
    fetchCouponAddUsers(name: $name) {
      id
      name
      nickname
      phoneNumber
    }
  }
`;

export const fetchCouponAddUsers = () => {
  const [nameState, setNameState] = useState<string>("");

  const { data, refetch } = useQuery<Pick<IQuery, "fetchCouponAddUsers">>(
    COUPON_ADD_USERS,
    {
      variables: {
        name: "",
      },
    }
  );

  const getDebounce = _.debounce((name) => {
    setNameState(name);
  }, 300);

  const onRefetchUsers = (name: string) => {
    getDebounce(name);
  };

  useEffect(() => {
    void refetch({ name: nameState });
  }, [nameState]);

  return { data, onRefetchUsers };
};
