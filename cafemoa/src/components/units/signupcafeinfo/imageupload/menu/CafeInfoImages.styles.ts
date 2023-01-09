import styled from "@emotion/styled";
import { DEFAULT_COLOR } from "../../../../../commons/default/default";

export const UploadImage = styled.img`
  width: 180px;
  height: 180px;
  margin-right: 24px;
  cursor: pointer;
`;

export const UploadButton = styled.div`
  width: 33.3333%;
  display:flex;
  background-color: ${DEFAULT_COLOR.subColor02};
  margin: 20px;
  // padding: 90px 0px; 동은님....살려주세용
  padding: 90px;
  // padding-left: 90px;
  text-align: center;
  // background: red;
`;

export const UploadFileHidden = styled.input`
  display: none;
`;

export const Cross = styled.span`
  width: 14px;
  height: 14px;
`
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
  color: #4F4F4F;
  margin-top: 15px;
`
export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 40px 0px;
`