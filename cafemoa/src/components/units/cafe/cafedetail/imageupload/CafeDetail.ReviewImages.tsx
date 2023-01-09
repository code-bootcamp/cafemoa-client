import { ChangeEvent, useRef } from "react";
import * as S from "./CafeDetail.ReviewImages.styles";
import { useUploadFile } from "../../../../commons/hooks/mutations/useUploadFile";

export default function ReviewImageUpload(props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const { SubmitUploadFile } = useUploadFile();

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    if (!file) return;
    void SubmitUploadFile();
    props.onChangeFileUrls(result.data.uploadFile.url, props.index);
  };

  return (
    <>
      {props.fileUrl ? (
        <S.UploadImage
          onClick={onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <S.ImageWrapper>
          <S.UploadButton type="button" onClick={onClickUpload}>
            <img src="/images/cafedetail/CafeDetail07.png" />
            {/* <S.Cross>+</S.Cross>
            <br />
            <S.Upload>Upload</S.Upload> */}
          </S.UploadButton>
        </S.ImageWrapper>
      )}
      <S.UploadFileHidden type="file" ref={fileRef} onChange={onChangeFile} />
    </>
  );
}
