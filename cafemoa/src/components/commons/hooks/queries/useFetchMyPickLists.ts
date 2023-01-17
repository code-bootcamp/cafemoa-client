import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import {
  IQuery,
  IQueryFetchMyPickListsArgs,
} from "../../../../commons/types/generated/types";

export const MY_PICK_LISTS = gql`
  query fetchMyPickLists($page: Int, $Location: String) {
    fetchMyPickLists(page: $page, Location: $Location) {
      id
      user {
        id
        name
      }
      cafeInform {
        id
        cafeinfo
        cafeAddr
        like
        cafeTag {
          id
          tagName
        }
        cafeImage {
          id
          cafe_image
        }
        owner {
          brandName
        }
      }
    }
  }
`;

export const useFetchMyPickLists = () => {
  const [locationState, setLocationState] = useState<string>("");
  const { data, refetch, fetchMore } = useQuery<
    Pick<IQuery, "fetchMyPickLists">,
    IQueryFetchMyPickListsArgs
  >(MY_PICK_LISTS, {
    variables: {
      page: 1,
      Location: "",
    },
  });

  const onSelectLocation = (location: string) => {
    if (location === "전체") {
      setLocationState("");
    } else {
      setLocationState(location);
    }
  };

  useEffect(() => {
    void refetch({ Location: locationState });
  }, [locationState]);

  const onHandleMore = async () => {
    if (data === undefined) return;
    if (data.fetchMyPickLists?.length === 0) return;
    try {
      void fetchMore({
        variables: {
          location: "",
          page: Number(Math.ceil(data.fetchMyPickLists.length / 10) + 1),
        },
        updateQuery(prev, { fetchMoreResult }) {
          if (fetchMoreResult.fetchMyPickLists === undefined) {
            return {
              fetchMyPickLists: [...prev.fetchMyPickLists],
            };
          }
          if (prev.fetchMyPickLists === undefined) {
            return {
              fetchMyPickLists: [],
            };
          }
          return {
            fetchMyPickLists: [
              ...prev?.fetchMyPickLists,
              ...fetchMoreResult?.fetchMyPickLists,
            ],
          };
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return { data, onSelectLocation, onHandleMore };
};
