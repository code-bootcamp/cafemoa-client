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
        owner {
          brandName
        }
      }
    }
  }
`;

export const useFetchMyPickLists = () => {
  const [locationState, setLocationState] = useState<string>("");
  const { data, refetch } = useQuery<
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
  return { data, onSelectLocation };
};
