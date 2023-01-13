import { gql, useQuery } from "@apollo/client";
import _ from "lodash";
import { useEffect, useState } from "react";
import {
  IQuery,
  IQueryFetchCafesArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_CAFES = gql`
  query fetchCafes($location: String, $tags: [String!], $page: Int) {
    fetchCafes(location: $location, tags: $tags, page: $page) {
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
  const { data, refetch, fetchMore, error } = useQuery<
    Pick<IQuery, "fetchCafes">,
    IQueryFetchCafesArgs
  >(FETCH_CAFES, {
    variables: {
      location: "",
      tags: [],
      page: 1,
    },
    onError: (error) => {
      console.log(error);
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

  const onHandleMore = async () => {
    if (data === undefined) return;
    try {
      void fetchMore({
        variables: {
          tags: tagState,
          page: Number(Math.ceil(data.fetchCafes.length / 10) + 1),
          location: locationState,
        },
        updateQuery(prev, { fetchMoreResult }) {
          if (prev?.fetchCafes?.length === 0) {
            return {
              fetchCafes: [],
            };
          }
          if (
            fetchMoreResult.fetchCafes === undefined ||
            fetchMoreResult.fetchCafes === null
          ) {
            console.log(prev, "sss");
            return {
              fetchCafes: [...prev.fetchCafes],
            };
          }
          return {
            fetchCafes: [...prev?.fetchCafes, ...fetchMoreResult?.fetchCafes],
          };
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    void refetch({ tags: tagState, location: locationState });
  }, [tagState, locationState]);

  return { data, onRefetchCafes, onSelectLocation, refetch, onHandleMore };
};
