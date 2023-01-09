import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export const MYPICK_LIST_LOCATION = gql`
  query fetchMyPickListLocation($Location: String!) {
    fetchMyPickListLocation(Location: $Location) {
      id
      user {
        id
        name
      }
      cafeInform {
        id
        brandName
        cafeinfo
        cafeAddr
        like
        cafeTag {
          id
          tagName
        }
      }
    }
  }
`;

export const useFetchMyPickListLocation = () => {
  const [locationState, setLocationState] = useState<string>("");
  const { data, refetch } = useQuery<Pick<IQuery, "fetchMyPickListLocation">>(
    MYPICK_LIST_LOCATION,
    {
      variables: {
        Location: "",
      },
    }
  );

  const onSelectLocation = (location: string) => {
    console.log(location);
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
