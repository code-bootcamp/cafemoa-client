import styled from "@emotion/styled";
import { Modal } from "antd";
import { useCallback, useState } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "./crop";
import { base64toFile } from "./cropUtill";

interface ICropModalProps {
  isModalOpen: boolean;
  imgUrls: string[];
  setIsModalOpen: (value: boolean) => void;
  setImgUrls: (arr: string[]) => void;
  selectList: Array<string | number>;
  cropShape?: "rect" | "round";
  onChangeFileUrls: (fileUrl: any, index: number) => void;
}

export const CropModal = (props: ICropModalProps) => {
  const [aspect, setAspect] = useState(1);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [originRatio, setOriginRatio] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);
  const handleOk = async () => {
    const croppedImage = await getCroppedImg(
      props.selectList[0],
      croppedAreaPixels,
      zoom
    );
    if (croppedImage === null) return;
    const file = base64toFile(croppedImage, String(props.selectList[1]));
    const tempImages = [...props.imgUrls];
    tempImages[Number(props.selectList[2])] = croppedImage;
    props.setImgUrls(tempImages);
    props.onChangeFileUrls(file, Number(props.selectList[2]));
    props.setIsModalOpen(false);
  };

  const handleCancel = () => {
    const tempImages = [...props.imgUrls];
    tempImages[Number(props.selectList[2])] = "";
    props.setImgUrls(tempImages);
    props.setIsModalOpen(false);
  };

  const onClickAspect = (value: number) => () => {
    setAspect(value);
  };

  return (
    <>
      {props.isModalOpen && (
        <Modal
          title="사진 편집"
          open={true}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <CropWrap>
            <Cropper
              image={String(props.selectList[0])}
              crop={crop}
              zoom={zoom}
              aspect={aspect}
              cropShape={props.cropShape ?? "rect"}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
              onMediaLoaded={(aaa) =>
                props.cropShape === "rect"
                  ? setOriginRatio(aaa.naturalWidth / aaa.naturalHeight)
                  : setOriginRatio(1)
              }
              setImageRef={() => setAspect(originRatio)}
            />
          </CropWrap>
          {props.cropShape === "rect" && (
            <RatioWrap>
              <RatioBtn onClick={onClickAspect(originRatio)}> 원본 </RatioBtn>
              <RatioBtn onClick={onClickAspect(4 / 4)}> 1:1 </RatioBtn>
              <RatioBtn onClick={onClickAspect(16 / 9)}> 16:9 </RatioBtn>
              <RatioBtn onClick={onClickAspect(1 / 2)}> 1:2 </RatioBtn>
            </RatioWrap>
          )}
        </Modal>
      )}
    </>
  );
};

const CropWrap = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
`;
const RatioWrap = styled.div`
  padding-top: 8px;
`;
const RatioBtn = styled.button`
  padding: 4px 8px;
  border: 1px solid #bdbdbd;
  & + button {
    margin-left: 8px;
  }
`;
