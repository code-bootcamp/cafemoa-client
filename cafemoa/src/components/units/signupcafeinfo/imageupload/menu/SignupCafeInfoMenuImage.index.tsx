import { ChangeEvent, useRef } from "react";
import { checkValidationImage } from "./Uploads02.validation";
import { Modal } from "antd";
import { useUploadFile } from "../../../../commons/hooks/mutations/useUploadFile";
import * as S from "../menu/SignupCafeInfoMenuImage.styles";

export default function CafeInformMenuImage(props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const { SubmitUploadFile } = useUploadFile();
  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidationImage(event.target.files?.[0]);
    if (!file) return;

    try {
      const result = SubmitUploadFile(file);
      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
      console.log(result.data.uploadFile);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <>
      {props.fileUrl ? (
        <S.UploadImage
          onClick={onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <S.UploadButton type="button" onClick={onClickUpload}>
          <img src="/images/cafedetail/CafeDetail07.png" />
        </S.UploadButton>
      )}
      <S.UploadFileHidden type="file" ref={fileRef} onChange={onChangeFile} />
    </>
  );
}
