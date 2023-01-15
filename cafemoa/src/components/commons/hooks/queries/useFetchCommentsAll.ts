import { gql, useQuery } from "@apollo/client";
import _ from "lodash";
import { useEffect, useState } from "react";
import {
  IQuery,
  IQueryFetchCommentsAllArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_COMMENTS_ALL = gql`
  query fetchCommentsAll($location: String, $tags: [String!], $page: Int) {
    fetchCommentsAll(location: $location, tags: $tags, page: $page) {
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
        id
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
  const { data, refetch, fetchMore } = useQuery<
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

  const onHandleMore = () => {
    if (data === undefined) return;
    console.log();
    void fetchMore({
      variables: {
        tags: tagState,
        page: Number(Math.ceil(data.fetchCommentsAll.length / 10) + 1),
        location: locationState,
      },
      updateQuery(prev, { fetchMoreResult }) {
        console.log(fetchMoreResult.fetchCommentsAll);
        if (fetchMoreResult.fetchCommentsAll === undefined) {
          return {
            fetchCommentsAll: [...prev.fetchCommentsAll],
          };
        }
        if (prev.fetchCommentsAll === undefined) {
          return {
            fetchCommentsAll: [],
          };
        }
        return {
          fetchCommentsAll: [
            ...prev.fetchCommentsAll,
            ...fetchMoreResult.fetchCommentsAll,
          ],
        };
      },
    });
  };

  useEffect(() => {
    void refetch({ tags: tagState, location: locationState });
  }, [tagState, locationState]);
  return { data, onRefetchComments, onSelectLocation, onHandleMore };
};
