import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";

export const FETCH_OWNER_COMMENT = gql`
  query fetchOwnerComment {
    fetchOwnerComment {
      id
      content
      time
    }
  }
`;

export const useFetchOwnerComment = () => {
  const { data } =
    useQuery<Pick<IQuery, "fetchOwnerComment">>(FETCH_OWNER_COMMENT);

  const OwnerData = data;
  return { OwnerData };
};
