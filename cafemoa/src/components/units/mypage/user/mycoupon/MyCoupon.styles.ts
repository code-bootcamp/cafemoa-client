import styled from "@emotion/styled";
import { Tabs } from "antd";
import { DEFAULT_COLOR } from "../../../../../commons/default/default";
import {
  ContainerWrap,
  MediumBtn,
} from "../../../../../commons/styles/commonStyles";
import * as mq from "../../../../../commons/styles/mediaQuery";

export const ContainerWrapper = styled(ContainerWrap)`
  padding-top: 100px;
`;
export const ModalButton = styled(MediumBtn)``;

export const CouponUseBtn = styled(MediumBtn)`
  padding-top: 8px;
  padding-bottom: 8px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  padding-bottom: 32px;
`;

export const ValidWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0 -30px;
`;

export const ValidBox = styled.li`
  display: block;
  width: 50%;
  padding: 0 30px 72px;
  ${mq.MobileL} {
    width: 100%;
    padding: 0 30px 32px;
  }
`;

export const BoxWrapper = styled.div`
  position: relative;
  height: 100%;
  background-color: ${DEFAULT_COLOR.subColor04};
  padding-right: 90px;
  border-radius: 10px;

  ${mq.MobileS} {
    padding-right: 0;
    padding-bottom: 64px;
  }
`;

export const UsedCouponBoxWrapper = styled.div`
  position: relative;
  background-color: ${DEFAULT_COLOR.subColor04};
  padding-right: 90px;
  border-radius: 10px;
  ::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url("/images/mycoupon/mycoupon_used.png");
    background-repeat: no-repeat;
    background-color: transparent;
    background-position: right 190px center;
    z-index: 99;
  }
  ${mq.MobileS} {
    padding-right: 0;
    padding-bottom: 64px;
    ::before {
      background-position: right 20px top 20px;
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
  padding: 40px 24px 40px;
`;

export const UsedCoupon = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${DEFAULT_COLOR.white};
  border: 1px solid ${DEFAULT_COLOR.black};
  border-radius: 10px;
  padding: 40px 24px 40px;
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
  right: 30px;
  top: 73px;
  width: 28px;
  ${mq.MobileS} {
    right: initial;
    top: initial;
    left: 50%;
    transform: translateX(-50%) rotate(90deg) scale(0.6);
    bottom: -50px;
  }
`;

export const InvalidCouponImg = styled.img`
  position: absolute;
  right: 32px;
  top: 41px;
  width: 23px;
  ${mq.MobileS} {
    width: 28px;
    right: initial;
    top: initial;
    left: 50%;
    transform: translateX(-50%) rotate(90deg) scale(0.6);
    bottom: -50px;
  }
`;

export const CoffeeImgWrap = styled.div`
  font-size: 40px;
  color: ${DEFAULT_COLOR.subColor01};
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
`;

export const ModalFromWrap = styled.form`
  padding-top: 32px;
`;
