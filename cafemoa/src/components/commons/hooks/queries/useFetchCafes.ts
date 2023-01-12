import { gql, useQuery } from "@apollo/client";
import _ from "lodash";
import { useEffect, useState } from "react";
import {
  IQuery,
  IQueryFetchCafesArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_CAFES = gql`
  query fetchCafes($location: String, $tags: [String!]) {
    fetchCafes(location: $location, tags: $tags) {
      id
      cafeinfo
      operatingInfo
      like
      cafeAddr
      like
      owner {
        brandName
      }
      cafeTag {
        id
        tagName
      }
      cafeImage {
        id
        cafe_image
      }
    }
  }
`;

export const useFetchCafes = () => {
  const [tagState, setTagState] = useState<string[]>([]);
  const [locationState, setLocationState] = useState<string>("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchCafes">,
    IQueryFetchCafesArgs
  >(FETCH_CAFES, {
    variables: {
      location: "",
      tags: [],
    },
  });

  const getDebounce = _.debounce((tagValue) => {
    setTagState(tagValue);
  }, 300);

  const onRefetchCafes = (tags: string[]) => {
    getDebounce(tags);
  };

  const onSelectLocation = (location: string) => {
    setLocationState(location);
  };

  useEffect(() => {
    void refetch({ tags: tagState, location: locationState });
  }, [tagState, locationState]);
  return { data, onRefetchCafes, onSelectLocation, refetch };
};
