import styled from "@emotion/styled";
import { DEFAULT_COLOR } from "../../../../../commons/default/default";

export const UploadImage = styled.img`
  // width: 180px;
  // height: 180px;
  // margin-right: 24px;
  // cursor: pointer;
  // width:0%;
  background-color: ${DEFAULT_COLOR.subColor02};
  // margin-right: 24px;
  padding: 120px;
`;

export const UploadButton = styled.div`
  // width:0%;
  background-color: ${DEFAULT_COLOR.subColor02};
  // margin-right: 24px;
  padding: 90px;
`;

export const UploadFileHidden = styled.input`
  display: none;
`;

export const Cross = styled.span`
  width: 14px;
  height: 14px;
`;
export const Upload = styled.span`
  width: 56px;
  height: 30.56px;
  left: 540px;
  top: 1779.44px;
  // font-family: 'Noto Sans KR';
  // font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: #4f4f4f;
  margin-top: 15px;
`;
export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 40px 0px;
`;
