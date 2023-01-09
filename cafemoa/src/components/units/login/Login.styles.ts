import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Tabs } from "antd";
import { DEFAULT_COLOR } from "../../../commons/default/default";
import { ContainerWrap, MediumBtn } from "../../../commons/styles/commonStyles";
import * as mq from "../../../commons/styles/mediaQuery";

export const ContainerWrapper = styled(ContainerWrap)`
  ${mq.MobileL} {
    padding: 0 6.25%;
  }
  /* ${mq.MobileM} {
    padding: 0;
  } */
`;

export const LoginButton = styled(MediumBtn)`
  padding-top: 8px;
  padding-bottom: 8px;
`;

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #ccc;
  background-size: cover;
  ${mq.MobileL} {
    background-color: ${DEFAULT_COLOR.subColor04};
  }
`;

export const LoginContainer = styled.div`
  position: relative;
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: ${DEFAULT_COLOR.subColor04};
  border-radius: 3px;
  padding: 25px 0;

  ${mq.MobileL} {
    background-color: transparent;
  }
`;

export const OptionsRegister = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 75px 45px;
  color: ${DEFAULT_COLOR.white};
  font-weight: 300;
  padding: 50px 45px;

  ${mq.MobileL} {
    display: none;
  }
`;

export const OptionsDetail = styled.div`
  padding-top: 25px;
`;

export const OptionsButtonWrap = styled.div`
  padding-top: 25px;
`;

export const OptionsButton = styled.button`
  margin-top: 30px;
  border: 1px solid black;
  border-radius: 3px;
  padding: 10px 30px;
  color: ${DEFAULT_COLOR.white};
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  :hover {
    color: ${DEFAULT_COLOR.white};
    background-color: ${DEFAULT_COLOR.black};
  }
`;

export const FormsContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 30px;
  width: calc(50% - 30px);
  min-height: 500px;
  background-color: ${DEFAULT_COLOR.white};
  border-radius: 3px;
  box-shadow: 2px 0 15px rgba(${DEFAULT_COLOR.black} 0.25);
  overflow: hidden;
  transform: translate3d(0, -50%, 0);
  transition: 0.4s ease-in-out;
  ${(props) =>
    props.dir === "left"
      ? css`
          transform: translate3d(0, -50%, 0);
        `
      : css`
          transform: translate3d(100%, -50%, 0);
        `}

  ${mq.MobileL} {
    display: none;
  }
`;

export const MobileLWrapper = styled.div`
  display: none;

  ${mq.MobileL} {
    display: block;
    background-color: ${DEFAULT_COLOR.white};
    width: 100%;
    margin: 0 auto;
  }
`;

export const MqFormsContainer = styled.div`
  ${mq.MobileL} {
    border-radius: 3px;
  }
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
    padding-top: 16px;
  }

  .ant-tabs-top > .ant-tabs-nav::before {
    border-bottom: none;
  }
`;

export const RegistForms = styled.div`
  transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-out;
  position: absolute;
  top: 70px;
  left: 40px;
  width: calc(100% - 80px);
  transition: opacity 0.4s ease-in-out,
    visibility 0.4s ease-in-out transform 0.5s ease-in-out;
  transform: translate3d(0, 0, 0);
  ${mq.MobileL} {
    position: static;
    padding: 100px;
    width: 100%;
  }
`;

export const FormTitle = styled.div`
  padding-bottom: 40px;
`;

export const FormsField = styled.div`
  margin-bottom: 50px;
`;

export const FormsButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 35px;
`;

export const FindPassword = styled.button`
  color: ${DEFAULT_COLOR.gray};
  text-decoration: underline;
  transition: color 0.2s ease-in-out;
`;
