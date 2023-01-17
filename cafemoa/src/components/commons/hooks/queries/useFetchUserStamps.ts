import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import {
  IQuery,
  IQueryFetchUserStampsArgs,
} from "../../../../commons/types/generated/types";

export const USER_STAMPS = gql`
  query fetchUserStamps($page: Int, $location: String) {
    fetchUserStamps(page: $page, location: $location) {
      id
      count
      user {
        id
        name
      }
      cafeInform {
        id
        cafeinfo
        cafeAddr
        owner {
          brandName
        }
      }
    }
  }
`;

export const useFetchUserStamps = () => {
  const [locationState, setLocationState] = useState<string>("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchUserStamps">,
    IQueryFetchUserStampsArgs
  >(USER_STAMPS, {
    variables: {
      page: 1,
      location: "",
    },
  });
  const onSelectLocation = (location: string) => {
    console.log(location);
    if (location === "") {
      setLocationState("");
    } else {
      setLocationState(location);
    }
  };

  useEffect(() => {
    void refetch({ location: locationState });
  }, [locationState]);
  return { data, onSelectLocation };
};
