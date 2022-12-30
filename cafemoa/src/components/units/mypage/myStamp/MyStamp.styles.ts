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

export const AreaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-bottom: 113px;
`;

export const MainArea = styled.div`
  width: 15%;
  margin-right: 2%;
`;

export const SubArea = styled.div`
  width: 15%;
  margin-right: 2%;
`;

export const Search = styled.button`
  border-radius: 10px;
  background-color: #f3e6d8;
  padding: 17px 22px;
  color: #8b8b8b;
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

export const StampInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* padding-bottom: 20px; */
  padding: 20px 0px 30px;
`;

export const StampInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 30%;
`;

export const IconWrap = styled.div`
  font-size: 30px;
  color: gray;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 70%;
`;

export const StampWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 9%;
`;

export const IconWrap2 = styled.div`
  font-size: 70px;
  color: lightgray;
  margin-right: 7%;
`;
