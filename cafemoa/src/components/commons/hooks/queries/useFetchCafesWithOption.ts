import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import _ from "lodash";
import {
  IQuery,
  IQueryFetchCafesWithNameAndLocationArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_CAFE_WITH_OPTION = gql`
  query fetchCafesWithNameAndLocation(
    $page: Int
    $name: String
    $location: String
  ) {
    fetchCafesWithNameAndLocation(
      page: $page
      name: $name
      location: $location
    ) {
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

export const useFetchCafesWithOption = () => {
  const [brandNameState, setBrandNameState] = useState<string>("");
  const [locationState, setLocationState] = useState<string>("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchCafesWithNameAndLocation">,
    IQueryFetchCafesWithNameAndLocationArgs
  >(FETCH_CAFE_WITH_OPTION, {
    variables: {
      name: "",
      location: "",
      page: 1,
    },
  });
  const getDebounce = _.debounce((name) => {
    setBrandNameState(name);
  }, 300);

  const onRefetchCafe = (name: string) => {
    // console.log(name);
    getDebounce(name);
  };

  const onSelectLocation = (location: string) => {
    if (location === "전체") {
      setLocationState("");
    } else {
      setLocationState(location);
    }
  };

  useEffect(() => {
    void refetch({ name: brandNameState, location: locationState });
  }, [brandNameState, locationState]);

  return { data, onRefetchCafe, onSelectLocation };
};
