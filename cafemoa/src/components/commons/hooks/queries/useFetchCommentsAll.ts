import { gql, useQuery } from "@apollo/client";
import _ from "lodash";
import { useEffect, useState } from "react";
import {
  IQuery,
  IQueryFetchCommentsAllArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_COMMENTS_ALL = gql`
  query fetchCommentsAll($location: String, $tags: [String!]) {
    fetchCommentsAll(location: $location, tags: $tags) {
      id
      reply
      like
      time
      user {
        name
        nickname
        profileImage
      }
      cafeinfo {
        owner {
          brandName
        }
        cafeTag {
          id
          tagName
        }
      }
      commentImage {
        image_url
      }
    }
  }
`;

export const useFetchCommentsAll = () => {
  const [tagState, setTagState] = useState<string[]>([]);
  const [locationState, setLocationState] = useState<string>("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchCommentsAll">,
    IQueryFetchCommentsAllArgs
  >(FETCH_COMMENTS_ALL, {
    variables: {
      location: "",
      tags: [],
    },
  });

  const getDebounce = _.debounce((tagValue) => {
    setTagState(tagValue);
  }, 300);

  const onRefetchComments = (tags: string[]) => {
    getDebounce(tags);
  };

  const onSelectLocation = (location: string) => {
    setLocationState(location);
  };

  useEffect(() => {
    void refetch({ tags: tagState, location: locationState });
  }, [tagState, locationState]);
  return { data, onRefetchComments, onSelectLocation };
};
