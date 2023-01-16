import styled from "@emotion/styled";
import { Tabs } from "antd";
import { DEFAULT_COLOR } from "../../../../../commons/default/default";
import {
  BtnWrap,
  EllipsisOne,
  MediumBtn,
} from "../../../../../commons/styles/commonStyles";
import * as mq from "../../../../../commons/styles/mediaQuery";

export const BannerWrap = styled.div`
  > div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    ${mq.MobileM} {
      padding: 0 !important;
      border: 0 none;
    }
    > div {
      ${mq.MobileM} {
        width: 100%;
      }
    }
  }
  ${mq.MobileM} {
    flex-direction: column;
  }
`;

export const BannerLeft = styled.div`
  text-align: center;
  padding-right: 40px;
  width: 40%;
  > canvas {
    width: 100% !important;
    max-width: 400px;
    height: auto !important;
  }
  ${mq.MobileM} {
    padding-right: 0;
  }
`;
export const BannerRight = styled.div`
  width: 60%;
`;
export const BannerBtnWrap = styled(BtnWrap)`
  margin-top: 0;
  > button {
    width: calc(50% - 24px);
    margin: 0 12px;
    max-width: 320px;
    text-align: center;
  }
  ${mq.MobileL} {
    margin-top: 0;
  }
  ${mq.MobileM} {
    margin-top: 32px;
  }
`;
export const SignUpBtn = styled(MediumBtn)``;
export const SignInBtn = styled(MediumBtn)``;

export const TapWrap = styled(Tabs)`
  .ant-tabs-content {
    > div {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
    }
  }
  .ant-tabs-tabpane-hidden {
    display: block;
    visibility: hidden;
    height: 0;
    overflow: hidden;
  }
  .ant-tabs-content-holder {
    min-height: 140px;
  }
  .ant-tabs-nav {
    margin-bottom: 0;
  }
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

  .ant-tabs-top > .ant-tabs-nav::before {
    border-bottom: none;
  }
`;
export const SlideItem = styled.div`
  padding: 0 8px;
`;
export const BoxIconWrap = styled.div`
  width: 40px;
  margin-right: 16px;
  > svg {
    font-size: 40px;
    color: ${DEFAULT_COLOR.mainColor};
  }
`;
export const BoxTextWrap = styled.div`
  width: calc(100% - 56px);
`;
export const CafeName = styled(EllipsisOne)``;
export const SlideWrap = styled.div`
  margin: 0 -8px;
  .slick-track {
    margin-left: 0;
  }
`;
