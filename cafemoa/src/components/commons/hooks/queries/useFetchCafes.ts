import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";

export const FETCH_CAFE_INFORMS = gql`
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
  const query = useQuery<Pick<IQuery, "fetchCafeInforms">>(FETCH_CAFE_INFORMS);

  return query;
};
