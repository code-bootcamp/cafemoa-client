import styled from "@emotion/styled";
import { DEFAULT_COLOR } from "../../../../../commons/default/default";

export const UploadImage = styled.img`
  background-color: ${DEFAULT_COLOR.subColor02};
  padding: 120px;
`;

export const UploadButton = styled.button`
  background-color: ${DEFAULT_COLOR.subColor02};
  padding: 90px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 40px 0px;
`;

export const UploadFileHidden = styled.input`
  display: none;
`;
