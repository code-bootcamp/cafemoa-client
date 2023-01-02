import styled from "@emotion/styled";
import { DEFAULT_COLOR } from "../../../../../commons/default/default";
import {
  ContainerWrap,
  MediumBtn,
  SmallBtn,
} from "../../../../../commons/styles/commonStyles";
import * as mq from "../../../../../commons/styles/mediaQuery";

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

  ${mq.MobileM} {
    flex-direction: column;
  }
`;

export const StampWrapper = styled.li`
  display: block;
  padding: 0 30px 70px;
  width: 50%;
  ${mq.MobileM} {
    width: 100%;
  }
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
  align-items: center;
  width: calc(100% - 30px);
  > span + span {
    margin-left: 8px;
  }
`;

export const IconWrap = styled.div`
  font-size: 30px;
  color: ${DEFAULT_COLOR.gray};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 30px;
`;

export const Stamp = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const IconWrap2 = styled.div`
  width: 20%;
  text-align: center;
  font-size: 70px;
  color: ${DEFAULT_COLOR.lightGray};
  ${mq.MobileL} {
    font-size: 54px;
  }
  /* margin-right: 7%; */
`;
