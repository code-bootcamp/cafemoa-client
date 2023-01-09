import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";

export const FETCH_USER_COMMENTS = gql`
  query fetchUserComments {
    fetchUserComments {
      id
      reply
      like
      time
      user {
        id
        name
        nickname
        profileImage
      }
    }
  }
`;

export const useFetchUserComments = () => {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserComments">>(FETCH_USER_COMMENTS);
  return { data };
};
