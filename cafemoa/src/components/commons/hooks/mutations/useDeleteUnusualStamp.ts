import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import {
  IMutation,
  IMutationDeleteUnusualStampArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_UNUSUAL_STAMPS } from "../queries/useFetchUnusalStamps";

interface IFormDeleteUnusualStampData {
  ownerpassword: string;
  stamphistoryId: string;
}

export const DELETE_UNUSUAL_STAMP = gql`
  mutation deleteUnusualStamp(
    $ownerpassword: String!
    $stamphistoryId: String!
  ) {
    deleteUnusualStamp(
      ownerpassword: $ownerpassword
      stamphistoryId: $stamphistoryId
    )
  }
`;

export const useDeleteUnusualStamp = () => {
  const [deleteUnusualStamp] = useMutation<
    Pick<IMutation, "deleteUnusualStamp">,
    IMutationDeleteUnusualStampArgs
  >(DELETE_UNUSUAL_STAMP);

  const deleteUnusualStampSubmit = async (
    data: IFormDeleteUnusualStampData
  ) => {
    try {
      const result = await deleteUnusualStamp({
        variables: {
          ...data,
        },
        refetchQueries: [
          {
            query: FETCH_UNUSUAL_STAMPS,
          },
        ],
      });
      console.log(result);
      Modal.success({
        content: "삭제가 완료되었습니다!",
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return {
    deleteUnusualStampSubmit,
  };
};
