import styled from "@emotion/styled";
import { ContainerWrap } from "../../../../../commons/styles/commonStyles";
import * as mq from "../../../../../commons/styles/mediaQuery";

export const ContainerWrapper = styled(ContainerWrap)`
  padding-top: 100px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  ${mq.MobileL} {
    flex-direction: column;
  }
`;

export const ProfileWrapper = styled.div`
  width: 300px;
  padding-right: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  > * {
    padding-bottom: 15px;
  }
  ${mq.MobileL} {
    width: 100%;
    padding-right: 0;
  }
`;

export const UserName = styled.div`
  // padding-bottom: 10px;
`;
export const SettingIcon = styled.div`
  position: absolute;
  right: -8px;
  top: -8px;
  > svg {
    font-size: 32px;
  }
`;

export const UserMainArea = styled.div`
  text-align: center;
`;

export const MenuWrapper = styled.div`
  width: calc(100% - 300px);

  ${mq.MobileL} {
    width: 100%;
  }
`;

export const BoxContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0 -8px;
`;

export const BoxWrapper = styled.li`
  display: block;
  width: 50%;
  height: 100%;
  padding: 8px;

  ${mq.MobileM} {
    width: 100%;
  }
`;

export const MypageButton = styled.div`
  cursor: pointer;
`;

export const MenuDetail = styled.div`
  padding-top: 40px;
  display: flex;
  > div {
    margin-right: 16px;
  }
  > div:last-of-type {
    margin-right: 0;
  }
`;

export const CouponLabel = styled.div`
  padding-right: 16px;
`;

export const CouponCount = styled.div`
  padding-right: 24px;
`;
