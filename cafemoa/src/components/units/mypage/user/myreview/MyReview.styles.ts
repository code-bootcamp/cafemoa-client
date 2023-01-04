import styled from "@emotion/styled";
import { DEFAULT_COLOR } from "../../../../../commons/default/default";
import { ContainerWrap } from "../../../../../commons/styles/commonStyles";
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

export const ReviewContentWrapper = styled.div`
  padding-bottom: 30px;
`;

export const ReviewInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
`;

export const ReviewInfoHead = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CafeName = styled.div`
  border-radius: 20px;
  background-color: ${DEFAULT_COLOR.subColor04};
  padding: 17px 24px;
  margin-right: 32px;
  word-break: keep-all;
  ${mq.MobileM} {
    margin-right: 16px;
  }
`;

export const DateWrap = styled.div`
  padding-top: 8px;
  text-align: right;
`;
export const LikeCount = styled.div``;

export const Review = styled.div`
  padding-left: 24px;
  padding-top: 24px;
`;
