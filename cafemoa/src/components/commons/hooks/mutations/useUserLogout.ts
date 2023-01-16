import { gql, useMutation } from "@apollo/client";

export const USER_LOGOUT = gql`
  mutation userLogout {
    userLogout
  }
`;

export const useUserLogout = () => {
  const [userLogout] = useMutation(USER_LOGOUT);

  const userLogoutSubmit = async () => {
    try {
      await userLogout();
      location.reload();
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return {
    userLogoutSubmit,
  };
};
