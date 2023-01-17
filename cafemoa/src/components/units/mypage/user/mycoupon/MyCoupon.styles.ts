import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Tabs } from "antd";
import { DEFAULT_COLOR } from "../../../../../commons/default/default";
import {
  ContainerWrap,
  MediumBtn,
} from "../../../../../commons/styles/commonStyles";
import * as mq from "../../../../../commons/styles/mediaQuery";

interface ICouponStylesProps {
  expired?: boolean;
}

export const ContainerWrapper = styled(ContainerWrap)`
  padding-top: 100px;
  display: flex;
  flex-direction: row;
  ${mq.MobileM} {
    flex-direction: column;
  }
`;
export const ModalButton = styled(MediumBtn)``;

export const CouponUseBtn = styled(MediumBtn)`
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
  padding-bottom: 32px;
`;

export const ValidWrapper = styled.div`
  > div {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0 -15px;
  }
`;

export const ValidBox = styled.div`
  display: block;
  width: 50%;
  padding: 0 15px 30px;
  ${mq.MobileL} {
    width: 100%;
  }
  ${mq.DesktopS} {
    width: 100%;
  }
`;

export const BoxWrapper = styled.div`
  position: relative;
  height: 100%;
  background-color: ${DEFAULT_COLOR.subColor04};
  padding-right: 90px;
  border-radius: 10px;

  ${mq.DesktopM} {
    padding-right: 0;
    padding-bottom: 0;
  }
`;

export const UsedCouponBoxWrapper = styled.div<ICouponStylesProps>`
  position: relative;
  background-color: ${DEFAULT_COLOR.subColor04};
  border-radius: 10px;
  ::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    ${(props) =>
      props?.expired ?? false
        ? css`
            background-image: url("/images/mycoupon/mycoupon_expired.png");
          `
        : css`
            background-image: url("/images/mycoupon/mycoupon_used.png");
          `}
    background-repeat: no-repeat;
    background-color: transparent;
    background-position: right 190px center;
    z-index: 99;
    ${mq.DesktopM} {
      padding-right: 0;
      background-position: right 100px center;
    }
  }
  ${mq.MobileS} {
    ::before {
      /* background-position: right 20px top 20px; */
      background-size: 72px;
    }
  }
`;

export const CouponDetail = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${DEFAULT_COLOR.white};
  border: 1px solid ${DEFAULT_COLOR.black};
  border-radius: 10px;
  padding: 24px 24px 40px;
`;

export const UsedCoupon = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${DEFAULT_COLOR.white};
  border: 1px solid ${DEFAULT_COLOR.black};
  border-radius: 10px;
  padding: 24px 24px 40px;
  ::before {
    content: "";
    background-color: lightgray;
    opacity: 50%;
    border-radius: 10px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }
`;

export const Div = styled.div`
  padding-bottom: 10px;
  padding-right: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BtnWrapper = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const CouponImg = styled.img`
  position: absolute;
  right: 5px;
  top: 50px;
  width: 28px;
`;

export const InvalidCouponImg = styled.img`
  position: absolute;
  right: 34px;
  top: 64px;
  width: 18px;
`;

export const CoffeeImgWrap = styled.div`
  position: absolute;
  right: 24px;
  top: 20px;
  font-size: 40px;
  color: ${DEFAULT_COLOR.subColor01};

  ${mq.MobileL} {
    display: block;
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
    padding-top: 56px;
  }

  .ant-tabs-top > .ant-tabs-nav::before {
    border-bottom: none;
  }
  ${mq.MobileL} {
    .ant-tabs-content {
      padding-top: 32px;
    }
  }
`;

export const ModalFromWrap = styled.form`
  padding-top: 32px;
`;
