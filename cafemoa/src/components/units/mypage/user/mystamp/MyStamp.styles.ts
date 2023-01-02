import styled from "@emotion/styled";
import {
  ContainerWrap,
  MediumBtn,
  SmallBtn,
} from "../../../../../commons/styles/commonStyles";

export const ContainerWrapper = styled(ContainerWrap)`
  padding-top: 100px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  padding-bottom: 56px;
`;

export const AreaWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding-bottom: 40px;
`;

export const MainArea = styled.div`
  min-width: 150px;
  margin-right: 2%;
`;

export const SubArea = styled.div`
  min-width: 150px;
  margin-right: 2%;
`;

export const Search = styled(SmallBtn)``;

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

export const Stamp = styled.div`
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
