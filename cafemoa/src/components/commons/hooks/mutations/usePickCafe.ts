import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationPickCafeArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_CAFE_INFORM } from "../queries/useFetchCafeInform";

export const PICK_CAFE = gql`
  mutation PickCafe($CafeInformID: String!) {
    PickCafe(CafeInformID: $CafeInformID)
  }
`;

export const usePickCafe = () => {
  const router = useRouter();
  const [PickCafe] = useMutation<
    Pick<IMutation, "PickCafe">,
    IMutationPickCafeArgs
  >(PICK_CAFE);
  const PickCafeSubmit = async () => {
    try {
      await PickCafe({
        variables: {
          CafeInformID: router.query.cafeInformID,
        },
        refetchQueries: [
          {
            query: FETCH_CAFE_INFORM,
            variables: { cafeInformID: router.query.cafeInformID },
          },
        ],
      });
      console.log(router.query.CafeInformID);
    } catch (error) {
      if (error instanceof Error) return alert(error.message);
    }
  };

  return {
    PickCafeSubmit,
  };
};
