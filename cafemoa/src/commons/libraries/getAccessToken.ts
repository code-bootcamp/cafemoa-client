import { gql, GraphQLClient } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation {
    restoreAccessToken
  }
`;

export const getAccessToken = async () => {
  try {
    const graphQLClient = new GraphQLClient("https://backkim.shop/graphql", {
      credentials: "include",
    });
    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    console.log(result);
    const newAccessToken = result.restoreAccessToken;
    console.log(newAccessToken);
    return newAccessToken;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
};
