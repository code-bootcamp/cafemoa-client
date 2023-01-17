import styled from "@emotion/styled";
import { Modal, Tabs } from "antd";
import * as mq from "../../../../../commons/styles/mediaQuery";
import { DEFAULT_COLOR } from "../../../../../commons/default/default";
import {
  BtnWrap,
  ContainerWrap,
  MediumBtn,
  SmallBtn,
} from "../../../../../commons/styles/commonStyles";

export const SaveButton = styled(SmallBtn)``;

export const ContainerWrapper = styled(ContainerWrap)`
  padding-top: 100px;
  display: flex;
  flex-direction: row;
  ${mq.MobileM} {
    flex-direction: column;
  }
`;

export const ModalButton = styled(MediumBtn)``;

export const ModalFromWrap = styled.form`
  padding-top: 32px;
`;

export const StampButton = styled(MediumBtn)`
  border-radius: 10px;
  background-color: #f3e6d8;
  padding-top: 8px;
  padding-bottom: 8px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 350px);
  ${mq.DesktopS} {
    width: calc(100% - 252px);
  }
  ${mq.MobileM} {
    padding-top: 24px;
    width: 100%;
  }
`;

export const TitleWrapper = styled.div`
  text-align: center;
  padding-bottom: 56px;
  ${mq.MobileM} {
    padding-bottom: 24px;
  }
`;

export const StampWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 800px;
  width: 100%;
  > div {
    padding: 40px 50px;
    ${mq.MobileL} {
      padding: 20px 24px;
    }
    ${mq.MobileS} {
      padding: 0;
      border: 0 none;
    }
  }
`;

export const StampContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserWrapper = styled.div`
  display: flex;
  max-width: 500px;
  ${mq.MobileS} {
    flex-direction: column;
  }
`;

export const StampSelect = styled.div`
  /* display: flex;
  align-items: center; */
  margin-left: 10px;
  width: 100%;
  ${mq.MobileS} {
    margin-left: 0;
  }
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

export const StampTable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding-top: 20px;
  width: 100%;

  > ul {
    width: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    border-bottom: 1px solid ${DEFAULT_COLOR.black};
    margin-bottom: 0em;
    padding: 4px 0px;
  }
`;

export const Name = styled.li`
  width: 30%;
`;

export const PhoneEnd = styled.li`
  width: 40%;
`;

export const SaveStamp = styled.li`
  width: 30%;
`;

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 15px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 40px;
`;

export const TapWrap = styled(Tabs)`
  .ant-tabs-nav::before {
    display: none;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: ${DEFAULT_COLOR.mainColor};
    transform: scale(1);
  }

  .ant-tabs-tab + .ant-tabs-tab {
    margin-left: 16px;
  }

  .ant-tabs-tab-btn {
    font-size: 20px;
    color: ${DEFAULT_COLOR.gray};
    transform: scale(0.8);
  }

  .ant-tabs-ink-bar {
    background: none;
  }

  .ant-tabs-content {
    padding-top: 56px;
    ${mq.MobileM} {
      padding-top: 0;
    }
  }

  .ant-tabs-top > .ant-tabs-nav::before {
    border-bottom: none;
  }
`;

export const ModalWrap = styled(Modal)`
  .ant-modal-body {
    padding: 64px 64px;
  }
  ${mq.MobileL} {
    .ant-modal-body {
      padding: 32px 3%;
    }
  }
`;

export const ModalContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalTitle = styled.div`
  text-align: center;
  white-space: pre-line;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const QrStampSelect = styled.div`
  width: 100%;
  padding-bottom: 16px;
`;

export const QrReader = styled.div`
  margin-bottom: 30px;
`;

export const QrWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding-top: 20px;
  width: 100%;
`;

export const QrUserWrapper = styled.div`
  display: flex;
  max-width: 500px;
  width: 100%;
`;

export const QrSaveStamp = styled.div`
  width: 30%;
  margin-left: 10px;
`;

export const QrModalTitle = styled.div`
  position: relative;
  padding-top: 48px;
  text-align: center;
  white-space: pre-line;
`;

export const QrModalContents = styled.div`
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
