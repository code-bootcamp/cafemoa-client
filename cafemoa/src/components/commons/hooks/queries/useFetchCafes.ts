import { gql, useQuery } from "@apollo/client";
import _ from "lodash";
import {
  IQuery,
  IQueryFetchCafesArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_CAFES = gql`
  query fetchCafes($Location: String, $Tags: [String!], $page: Float!) {
    fetchCafes(Location: $Location, Tags: $Tags, page: $page) {
      id
      cafeinfo
      operatingInfo
      brandName
      like
      cafeAddr
      like
      brandName
      cafeTag {
        id
        tagName
      }
    }
  }
`;

export const useFetchCafes = () => {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchCafes">,
    IQueryFetchCafesArgs
  >(FETCH_CAFES, {
    variables: {
      Location: "",
      Tags: [],
      page: 1,
    },
  });

  const getDebounce = _.debounce((tagValue, LocationValues) => {
    void refetch({ Tags: tagValue, Location: LocationValues });
  }, 500);

  const onRefetchCafes = (tagValue: string[], LocationValues: string) => {
    getDebounce(tagValue, LocationValues);
  };

  return { data, onRefetchCafes };
};
