import styled from "@emotion/styled";
import { DEFAULT_COLOR } from "../../../../commons/default/default";
import { EllipsisTwo } from "../../../../commons/styles/commonStyles";
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
