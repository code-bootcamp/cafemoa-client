import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";

export const UPLOAD_FILE = gql`
  mutation uploadFile($files: [Upload!]!) {
    uploadFile(files: $files)
  }
`;

export const useUploadFile = () => {
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  // const SubmitUploadFile = async (file) => {
  //   try {
  //     await uploadFile({
  //       variables: {
  //         files: file,
  //       },
  //     });
  //   } catch (error) {
  //     if (error instanceof Error) alert(error.message);
  //   }
  // };

  // return {
  //   SubmitUploadFile,
  // };
  return {
    uploadFile,
  };
};
