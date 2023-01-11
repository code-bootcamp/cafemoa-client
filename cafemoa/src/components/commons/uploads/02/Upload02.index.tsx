import * as S from "./Upload02.styles";
import { v4 as uuidv4 } from "uuid";
import { ChangeEvent, useEffect, useState } from "react";
import { CropModal } from "../../cropModal/cropModal.index";
import { checkValidationImage } from "../uploadValidation";

interface IUploadProps {
  maxLength?: 1 | 2 | 3;
  cropShape?: "rect" | "round";
  defaultUrls?: string[];
  onChangeFileUrls: (fileUrl: File, index: number) => void;
}

export default function Uploads02(props: IUploadProps) {
  // console.log(props.defaultUrls);
  // const [uploadFile] = useMutation(UPLOAD_FILE);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [imgUrls, setImgUrls] = useState<string[]>(
    props.maxLength !== undefined
      ? new Array(props.maxLength).fill("")
      : ["", "", ""]
  );
  const [selectList, setSelectList] = useState(["", "", 0]);
  // useEffect(() => {
  //   if (props?.defaultUrls === undefined) return;
  //   const tempImgUrl = [...imgUrl];
  //   tempImgUrl.map((el, idx) => {
  //     if (el !== "") {
  //       tempImgUrl[
  //         idx
  //       ] = `https://storage.googleapis.com/${props?.defaultUrls[idx]}`;
  //     } else {
  //       tempImgUrl[idx] = "";
  //     }
  //   });
  //   setImgUrl(tempImgUrl);
  // }, [props.defaultUrls]);

  const onChangeFile =
    (idx: number) => async (event: ChangeEvent<HTMLInputElement>) => {
      const file = checkValidationImage(event.target.files?.[0]);
      if (file === undefined) return;
      const fileName = event.target.files?.[0].name;

      setIsModalOpen(true);
      const fileReader = new FileReader();
      fileReader.onload = (event: any) => {
        setSelectList([event.target.result, fileName, idx]);
      };
      fileReader.readAsDataURL(file as any);
      // fileReader.onload = (event) => {
      //   if (typeof event.target?.result === "string") {
      //     const tempImgUrls = [...imgUrl];
      //     tempImgUrls[idx] = event.target?.result;
      //     console.log(tempImgUrls);
      //     setImgUrl(tempImgUrls);
      //     props.onChangeFileUrls(file, idx);
      //   }
      // };
    };
  return (
    <>
      <S.InputFileWrap>
        {imgUrls?.map((el, idx) => (
          <S.InputFile key={uuidv4()}>
            {el !== "" ? <img src={el} /> : <span>Upload</span>}
            <input type="file" onChange={onChangeFile(idx)} />
          </S.InputFile>
        ))}
      </S.InputFileWrap>
      <CropModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        imgUrls={imgUrls}
        setImgUrls={setImgUrls}
        selectList={selectList}
        // uploadFile={uploadFile}
        onChangeFileUrls={props.onChangeFileUrls}
        cropShape={props.cropShape ?? "rect"}
      />
    </>
  );
}
