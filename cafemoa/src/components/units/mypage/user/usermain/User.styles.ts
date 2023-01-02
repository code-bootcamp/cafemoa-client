import styled from "@emotion/styled";
import { ContainerWrap } from "../../../../../commons/styles/commonStyles";

export const ContainerWrapper = styled(ContainerWrap)``;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 142px;
`;

export const ProfileWrapper = styled.div`
  width: 30%;
  padding-right: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    padding-bottom: 15px;
  }
`;

export const UserName = styled.div`
  // padding-bottom: 10px;
`;

export const UserMainArea = styled.div`
  text-align: center;
`;

export const MenuWrapper = styled.div``;

export const BoxContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0 -8px;
`;

export const BoxWrapper = styled.li`
  display: block;
  width: 50%;
  padding: 30px 18px;
`;

export const MypageButton = styled.div`
  cursor: pointer;
`;

export const MenuDetail = styled.div`
  padding-top: 40px;

  > div {
    display: flex;
  }
`;

export const CouponLabel = styled.div`
  padding-right: 16px;
`;

export const CouponCount = styled.div`
  padding-right: 50px;
`;
