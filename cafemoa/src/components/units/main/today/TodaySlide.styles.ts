import styled from "@emotion/styled";
import { DEFAULT_COLOR } from "../../../../commons/default/default";
import { EllipsisTwo } from "../../../../commons/styles/commonStyles";
// import { DEFAULT_COLOR } from "../../../commons/default/default";
// import * as mq from "../../../commons/styles/mediaQuery";

export const ImageWrap = styled.div`
  position: relative;
  display: block;
  padding-bottom: 56.25%;
  overflow: hidden;
  /* margin-right: 40px; */
  > img {
    position: absolute;
    left: 50%;
    top: 0;
    width: 100%;
    transform: translateX(-50%);
  }
`;
export const InfoWrap = styled.div`
  background-color: ${DEFAULT_COLOR.subColor01};
`;

export const TodaySlideWrap = styled.div`
  padding-top: 20px;
  display: flex;
`;
export const TodaySlideInfoWrap = styled.div`
  width: 38.57%;
  padding-right: 40px;
  > a {
    display: block;
  }
  ${InfoWrap} {
    > div {
      margin-top: 16px;
    }
  }
`;
export const TodaySlideListsWrap = styled.div`
  width: 61.43%;
  margin-top: 40px;
  .swiper-wrapper {
    margin-left: -45%;
    .swiper-slide {
      width: calc(45% - 40px);
    }
  }
  ${ImageWrap} {
    margin-bottom: 8px;
  }
`;
export const TagWrap = styled.div`
  height: 60px;
`;
export const SlideItem = styled.div``;
export const InfoTitle = styled(EllipsisTwo)`
  color: ${DEFAULT_COLOR.white};
`;
export const InfoContents = styled(EllipsisTwo)`
  color: ${DEFAULT_COLOR.white};
`;
export const SlideBtn = styled.button`
  display: block;
  width: 100%;
`;
