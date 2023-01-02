import { css } from "@emotion/react";
import { Modal } from "antd";
import { BtnWrap } from "../../../../commons/styles/commonStyles";
import styled from "@emotion/styled";

export const ModalWrap = styled(Modal)`
  .ant-modal-body {
    padding: 64px 80px;
  }
`;
export const ModalContentsWrap = styled.div``;
export const IconWrap = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  > svg {
    font-size: 40px;
  }
`;
export const ModalTitle = styled.div`
  position: relative;
  padding-top: 48px;
  text-align: center;
  white-space: pre-line;
`;
export const ModalContents = styled.div`
  padding-top: 32px;
  text-align: center;
  white-space: pre-line;
`;
export const ModalBtnWrap = styled(BtnWrap)`
  > button {
    margin: 0 8px;
    width: calc(50% - 16px);
    text-align: center;
    border-radius: 20px;
  }
`;
