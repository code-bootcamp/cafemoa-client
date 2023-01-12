import styled from "@emotion/styled";
import { DEFAULT_COLOR } from "../../../../commons/default/default";
import {
  EllipsisOne,
  EllipsisTwo,
} from "../../../../commons/styles/commonStyles";
// import { DEFAULT_COLOR } from "../../../commons/default/default";
// import * as mq from "../../../commons/styles/mediaQuery";

export const TodaySlideListsWrap = styled.div`
  .slick-list {
    margin: 0 -20px;
  }
  .slick-slide {
    padding: 20px;
  }
`;
export const SlideItem = styled.div``;
export const SlideBtn = styled.div``;

export const CafeName = styled.div`
  padding-top: 24px;
  padding-bottom: 16px;
`;

export const ReviewContent = styled(EllipsisTwo)``;

export const ReviewTag = styled(EllipsisOne)`
  padding-top: 8px;
`;

export const ReviewDate = styled.span`
  position: absolute;
  right: 8px;
  bottom: 8px;
`;
