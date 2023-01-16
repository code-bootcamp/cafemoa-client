import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import {
  IMutation,
  IMutationDeleteStampArgs,
} from "../../../../commons/types/generated/types";
import { USER_STAMPS } from "../queries/useFetchUserStamps";

export const DELETE_STAMP = gql`
  mutation deleteStamp($stampId: String!) {
    deleteStamp(stampId: $stampId)
  }
`;

export const useDeleteStamp = () => {
  const [deleteStamp] = useMutation<
    Pick<IMutation, "deleteStamp">,
    IMutationDeleteStampArgs
  >(DELETE_STAMP);

  const deleteStampSubmit = async (stampId: string) => {
    console.log(stampId);
    try {
      const result = await deleteStamp({
        variables: {
          stampId,
        },
        refetchQueries: [
          {
            query: USER_STAMPS,
          },
        ],
      });
      console.log(result);
      Modal.success({
        content: "스탬프 삭제가 완료되었습니다!",
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return {
    deleteStampSubmit,
  };
};
