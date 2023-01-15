import * as S from "./Upload03.styles";
import { v4 as uuidv4 } from "uuid";
import { ChangeEvent, useEffect, useState } from "react";

interface IUploadProps {
  defaultUrls?: string[];
  onChangeCafeImageFileUrls: (fileUrl: File, index: number) => void;
}

export default function Uploads03(props: IUploadProps) {
  // console.log(props.defaultUrls);
  // console.log(props.defaultUrls);
  // const [uploadFile] = useMutation(UPLOAD_FILE);
  const [imgUrls, setImgUrls] = useState<string[]>([]);
  useEffect(() => {
    if (props?.defaultUrls === undefined) return;
    console.log(props?.defaultUrls);
    const tempImgUrl = [...imgUrls];
    console.log(tempImgUrl);
    props?.defaultUrls.map((el, idx) => {
      if (el !== "") {
        console.log(el);
        tempImgUrl[
          idx
        ] = `https://storage.googleapis.com/${props?.defaultUrls[idx]}`;
      } else {
        console.log(el);
        tempImgUrl[idx] = "";
      }
    });
    console.log(tempImgUrl);
    setImgUrls(tempImgUrl);
  }, [props.defaultUrls]);

  const onChangeFile =
    (idx: number) => async (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file === undefined) return;

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (event) => {
        if (typeof event.target?.result === "string") {
          const tempImgUrls = [...imgUrls];
          tempImgUrls[idx] = event.target?.result;
          setImgUrls(tempImgUrls);
          props.onChangeCafeImageFileUrls(file, idx);
        }
      };
    };

  // useEffect(() => {
  //   if (props?.defaultUrls === undefined) return;
  //   const tempImgUrl = [...imgUrls];
  //     // eslint-disable-next-line array-callback-return
  //     tempImgUrl.map((el, idx) => {
  //       if (el !== "") {
  //         tempImgUrl[
  //           idx
  //         ] = `https://storage.googleapis.com/${props?.defaultUrls[idx]}`;
  //       } else {
  //         tempImgUrl[idx] = "";
  //       }
  //     });
  //   }
  //   setImgUrls(tempImgUrl);
  // }, [props.defaultUrls]);

  return (
    <>
      <S.InputFileWrap>
        {imgUrls?.map((el, idx) => (
          <S.InputFile key={uuidv4()}>
            {el !== "" ? (
              <img src={el} />
            ) : (
              <S.EmptyImage>
                <img src="/images/cafedetail/CafeDetail07.png" />
              </S.EmptyImage>
            )}
            <input type="file" onChange={onChangeFile(idx)} />
          </S.InputFile>
        ))}
      </S.InputFileWrap>
    </>
  );
}
