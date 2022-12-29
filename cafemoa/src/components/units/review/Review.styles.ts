import styled from "@emotion/styled";
import { ContainerWrap } from "../../../commons/styles/commonStyles";

export const ContainerWrapper = styled(ContainerWrap)``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 142px;
`;

export const TagWrapper = styled.div`
  position: relative;
  padding-bottom: 157px;
`;

export const UL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0 -8px;
`;

export const LI = styled.li`
  display: block;
  width: 33.3%;
  padding: 0 8px;
`;

export const CafeName = styled.div`
  padding-top: 20px;
`;

export const ReviewContent = styled.div`
  padding-top: 15px;
`;

export const ReviewTag = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 21px;
  width: 100%;
`;

export const ReviewDate = styled.span`
  margin-left: 10px;
`;
