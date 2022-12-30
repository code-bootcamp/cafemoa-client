import styled from "@emotion/styled";
import { ContainerWrap } from "../../../../commons/styles/commonStyles";

export const ContainerWrapper = styled(ContainerWrap)``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 142px;
`;

export const TitleWrapper = styled.div`
  padding-bottom: 113px;
`;

export const CouponOption = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CouponOptionWrapper = styled.div`
  width: 11%;
  border-bottom: 4px solid #f3e6d8;
  margin-right: 4%;
  padding: 0 7px 7px;
  cursor: pointer;
`;

export const CouponCount = styled.span`
  margin-left: 23%;
`;

export const CouponWrapper = styled.div`
  padding-top: 113px;
`;

export const UL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0 -30px;
`;

export const LI = styled.li`
  display: block;
  width: 50%;
  padding: 0 30px 70px;
`;

export const CouponDetail = styled.div`
  display: flex;
  flex-direction: column;
`;
