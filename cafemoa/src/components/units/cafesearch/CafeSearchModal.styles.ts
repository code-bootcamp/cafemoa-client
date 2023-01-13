import { Modal } from "antd";
import styled from "@emotion/styled";

export const ModalWrap = styled(Modal)`
  .ant-modal-body {
  }
`;

export const ModalContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ModalTitle = styled.div`
  text-align: center;
  white-space: pre-line;
`;

export const ModalContents = styled.div`
  white-space: pre-line;
  width: 100%;
  max-height: 300px;
  overflow: auto;
`;

export const InputIconWrap = styled.div`
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  svg {
    font-size: 24px;
  }
`;

export const AreaContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const AreaSelectWrap = styled.div`
  width: calc(100% - 45% - 10px);
  margin-right: 10px;
  padding-bottom: 10px;
`;

export const CafeSearchWrap = styled.form`
  width: 100%;
`;

export const SubAreaSelectWrap = styled.div`
  width: 45%;
`;

export const ContentWrapper = styled.div`
  border-bottom: 2px solid #f3e6d8;
  padding-top: 24px;
`;

export const SearchCafeInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SearchCafeWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CafePictureWrap = styled.div`
  > img {
    width: 120px;
    height: 100px;
  }
`;

export const CafeOperationWrap = styled.div`
  padding-bottom: 8px;
`;

export const CafeOperation = styled.div`
  display: flex;
  flex-direction: column;

  > p {
    margin-bottom: 0;
  }
`;

export const CafeInfo = styled.div`
  display: flex;

  > p {
    margin-bottom: 0;
  }
`;
