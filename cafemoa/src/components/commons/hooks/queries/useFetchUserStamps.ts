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
  const { data, refetch, fetchMore } = useQuery<
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

  const onHandleMore = async () => {
    if (data === undefined) return;
    if (data.fetchUserStamps?.length === 0) return;
    try {
      void fetchMore({
        variables: {
          location: "",
          page: Number(Math.ceil(data.fetchUserStamps.length / 10) + 1),
        },
        updateQuery(prev, { fetchMoreResult }) {
          if (fetchMoreResult.fetchUserStamps === undefined) {
            return {
              fetchUserStamps: [...prev.fetchUserStamps],
            };
          }
          if (prev.fetchUserStamps === undefined) {
            return {
              fetchUserStamps: [],
            };
          }
          return {
            fetchUserStamps: [
              ...prev?.fetchUserStamps,
              ...fetchMoreResult?.fetchUserStamps,
            ],
          };
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    void refetch({ location: locationState });
  }, [locationState]);

  return { data, onSelectLocation, onHandleMore };
};
