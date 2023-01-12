import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUserCommentsArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_USER_COMMENTS = gql`
  query fetchUserComments {
    fetchUserComments {
      id
      reply
      time
      cafeinfo {
        id
        like
        owner {
          brandName
        }
      }
    }
  }
`;

export const useFetchUserComments = () => {
  const { data } = useQuery<
    Pick<IQuery, "fetchUserComments">,
    IQueryFetchUserCommentsArgs
  >(FETCH_USER_COMMENTS);
  return { data };
};
