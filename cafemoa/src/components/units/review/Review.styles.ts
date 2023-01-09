import styled from "@emotion/styled";
import { ContainerWrap, TagWrap } from "../../../commons/styles/commonStyles";
import * as mq from "../../../commons/styles/mediaQuery";

export const ContainerWrapper = styled(ContainerWrap)`
  padding-top: 100px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TagWrapper = styled(TagWrap)`
  padding: 0 0 16px;
  > button + button {
    margin-left: 16px;
  }
`;

export const ReviewListsWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0 -20px;
`;

export const ReviewList = styled.li`
  display: block;
  width: 33.3%;
  padding: 20px;
  ${mq.MobileL} {
    width: 50%;
  }
  ${mq.MobileM} {
    width: 100%;
  }
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
