import styled from "@emotion/styled";
import { Tabs } from "antd";
import {
  ContainerWrap,
  MediumBtn,
} from "../../../../commons/styles/commonStyles";

export const ContainerWrapper = styled(ContainerWrap)``;

export const CouponUseBtn = styled(MediumBtn)`
  padding-top: 8px;
  padding-bottom: 8px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 142px;
`;

export const TitleWrapper = styled.div`
  padding-bottom: 113px;
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
  padding: 0 30px 70px;
`;

export const BoxWrapper = styled.div`
  position: relative;
  background-color: #f3e6d8;
  padding-right: 90px;
  border-radius: 10px;
`;

export const UsedCouponBoxWrapper = styled.div`
  position: relative;
  background-color: #f3e6d8;
  padding-right: 90px;
  border-radius: 10px;
  ::before {
    content: "";
    width: 100%;
    position: absolute;
    top: 56px;
    left: 393px;
    background-image: url("/images/mycoupon/mycoupon_used.png");
    background-repeat: no-repeat;
    height: 100%;
    background-color: transparent;
    z-index: 99;
  }
`;

export const CouponDetail = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border: 1px solid black;
  border-radius: 10px;
  padding: 40px 24px 40px;
`;

export const UsedCoupon = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border: 1px solid black;
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

// export const InValidCoupon = styled.div`
//   background-color: lightgray;
// `;

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
  right: 28px;
  top: 62px;
`;

export const CoffeeImgWrap = styled.div`
  font-size: 40px;
  color: #69473e;
`;

export const TapWrap = styled(Tabs)`
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #81564b;
    font-size: 20px;
  }

  .ant-tabs-tab {
    color: gray;
  }

  .ant-tabs-ink-bar {
    background: none;
  }

  .ant-tabs-content {
    padding-top: 100px;
  }

  .ant-tabs-top > .ant-tabs-nav::before {
    border-bottom: none;
  }
`;
