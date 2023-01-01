import { Collapse, Modal, Select } from "antd";
import styled from "@emotion/styled";
import { BtnWrap } from "../../../commons/styles/commonStyles";

export const ModalWrap = styled(Modal)`
  .ant-modal-body {
    padding-bottom: 10px;
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
  padding-bottom: 37px; ;
`;

export const ModalContents = styled.div`
  padding-top: 32px;
  //  text-align: center;
  white-space: pre-line;
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
  padding-bottom: 10px;
  width: 100%;
`;

// export const AreaSelect = styled(Select)`
//   width: 100%;

//   .select-selector {
//     background-color: transparent;
//     border: none;
//     border-radius: 100px;
//   }
// `;

// export const AreaSelectWrap = styled.div`
//   width: 80%;

//   .ant-select:not(.ant-select-customize-input) .ant-select-selector {
//     background-color: #f3e6d8;
//     border: none;
//     border-radius: 15px;
//     padding: 14px 16px;
//     height: auto;
//     font-size: 20px;
//     color: gray;
//   }
// `;

// export const SubAreaSelectWrap = styled.div`
//   width: 80%;

//   .ant-select:not(.ant-select-customize-input) .ant-select-selector {
//     background-color: #f3e6d8;
//     border: none;
//     border-radius: 15px;
//     padding: 14px 16px;
//     height: auto;
//     font-size: 20px;
//     color: gray;
//   }
// `;

export const AreaSelectWrap = styled.div`
  width: calc(100% - 45% - 10px);
  margin-right: 10px;
`;

export const SubAreaSelectWrap = styled.div`
  width: 45%;
`;

export const ContentWrapper = styled.div`
  padding-bottom: 20px;
`;

export const SearchCafeInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SearchCafeWrap = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 30px;
`;

export const CafePictureWrap = styled.div`
  padding-right: 30px;

  > img {
    width: 120px;
    height: 100px;
  }
`;

export const CafeOperationWrap = styled.div`
  padding-bottom: 10px;
`;

export const CafeOperation = styled.div`
  display: flex;
  flex-direction: column;

  > p {
    margin-bottom: 0;
    /* padding-right: 20px; */
  }
`;

export const CafeInfo = styled.div`
  display: flex;

  > p {
    margin-bottom: 0;
    padding-right: 20px;
  }
`;
