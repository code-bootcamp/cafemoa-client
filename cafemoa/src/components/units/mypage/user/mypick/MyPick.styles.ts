import styled from "@emotion/styled";
import { ContainerWrap } from "../../../../../commons/styles/commonStyles";

export const ContainerWrapper = styled(ContainerWrap)``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 142px;
`;

export const TitleWrapper = styled.div`
  padding-bottom: 113px;
`;

export const StampContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0 -30px;
`;

export const StampWrapper = styled.li`
  display: block;
  width: 50%;
  padding: 0 30px 70px;
`;

export const StampInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px 30px;
`;
