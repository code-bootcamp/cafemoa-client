import { ChangeEvent, useEffect, useState } from "react";
import * as S from "./CafeDetail.ReviewImages.styles";
// import { v4 as uuidv4 } from "uuid";

interface IUploadProps {
  defaultUrls?: string[];
  onChangeFileUrls: (fileUrl: File, index: number) => void;
}

export default function ReviewImageUpload(props: IUploadProps) {
  const [imgUrl, setImgUrl] = useState<string[]>(["", "", ""]);
  useEffect(() => {
    if (!props?.defaultUrls) return;
    const tempImgUrl = [...imgUrl];
    tempImgUrl.map((el, idx) => {
      if (props?.defaultUrls[idx] !== undefined) {
        tempImgUrl[
          idx
        ] = `https://storage.googleapis.com/${props?.defaultUrls[idx].image_url}`;
      } else {
        tempImgUrl[idx] = "";
      }
    });
    setImgUrl(tempImgUrl);
  }, [props.defaultUrls]);

  const onChangeFile =
    (idx: number) => async (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file === undefined) return;

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (event) => {
        if (typeof event.target?.result === "string") {
          const tempImgUrls = [...imgUrl];
          tempImgUrls[idx] = event.target?.result;
          setImgUrl(tempImgUrls);
          props.onChangeFileUrls(file, idx);
        }
      };
    };

  return (
    <>
      <S.ImageWrapper>
        <S.UploadImage>
          {/* <img src={"/images/cafedetail/CafeDetail07.png"} /> */}
        </S.UploadImage>
        <S.UploadImage>
          {/* <img src="/images/cafedetail/CafeDetail07.png" /> */}
        </S.UploadImage>
        <S.UploadImage>
          {/* <img src="/images/cafedetail/CafeDetail07.png" /> */}
        </S.UploadImage>
        {/* {imgUrl?.map((el, idx) => (
          <S.UploadImage key={uuidv4()}>
            {el !== "" ? (
              <img src={el} />
            ) : (
              // <img src="/images/cafedetail/CafeDetail07.png" />
              <span>aaa</span>
            )}
            <input type="file" onChange={onChangeFile(idx)} />
          </S.UploadImage>
        ))} */}
      </S.ImageWrapper>
    </>
  );
}
