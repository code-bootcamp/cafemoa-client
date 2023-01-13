import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import _ from "lodash";
import {
  IQuery,
  IQueryFetchCafeInformsByBrandNameArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_CAFE_BRAND_NAME = gql`
  query fetchCafeInformsByBrandName($page: Int, $name: String) {
    fetchCafeInformsByBrandName(page: $page, name: $name) {
      id
      cafeinfo
      operatingInfo
      owner {
        brandName
      }
      cafeAddr
      detailAddr
      cafeTag {
        id
        tagName
      }
    }
  }
`;

export const useFetchCafeByBrandName = () => {
  const [brandNameState, setBrandNameState] = useState<string>("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchCafeInformsByBrandName">,
    IQueryFetchCafeInformsByBrandNameArgs
  >(FETCH_CAFE_BRAND_NAME, {
    variables: {
      name: "",
      page: 1,
    },
  });
  const getDebounce = _.debounce((name) => {
    setBrandNameState(name);
  }, 300);

  const onRefetchCafe = (name: string) => {
    console.log(name);
    getDebounce(name);
  };

  useEffect(() => {
    void refetch({ name: brandNameState });
  }, [brandNameState]);

  return { data, onRefetchCafe };
};
