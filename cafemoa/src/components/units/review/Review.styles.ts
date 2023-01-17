import styled from "@emotion/styled";
import { ContainerWrap, TagWrap } from "../../../commons/styles/commonStyles";
import * as mq from "../../../commons/styles/mediaQuery";

export const ContainerWrapper = styled(ContainerWrap)`
  padding-top: 100px;
`;
export const FilterWrapper = styled.div`
  max-width: 150px;
  padding-bottom: 40px;
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

export const ReviewListsWrap = styled.div`
  // display: flex;
  // flex-wrap: wrap;
  > div {
    padding: 0;
    margin: 0 -20px;
  }
`;

export const ReviewList = styled.div`
  display: block;
  width: 25%;
  padding: 20px;
  ${mq.MobileL} {
    width: 50%;
  }
  ${mq.MobileM} {
    width: 100%;
  }
`;
export const UserWrapper = styled.div`
  // padding-top: 8px;
`;
export const CafeName = styled.div`
  padding-top: 20px;
`;

export const ReviewContent = styled.div`
  padding-top: 15px;
`;

export const ReviewTag = styled.div`
  padding-top: 8px;
`;

export const ReviewDate = styled.span`
  position: absolute;
  right: 8px;
  bottom: 8px;
`;
