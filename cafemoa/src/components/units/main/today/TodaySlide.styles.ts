import styled from "@emotion/styled";
// import { DEFAULT_COLOR } from "../../../commons/default/default";
// import * as mq from "../../../commons/styles/mediaQuery";

export const ImageWrap = styled.div`
  position: relative;
  display: block;
  padding-bottom: 56.25%;
  overflow: hidden;
  margin-right: 40px;
  > img {
    position: absolute;
    left: 50%;
    top: 0;
    width: auto;
    max-width: none;
    height: 100%;
    transform: translateX(-50%);
  }
`;
export const InfoWrap = styled.div``;

export const TodaySlideWrap = styled.div`
  display: flex;
`;
export const TodaySlideInfoWrap = styled.div`
  width: 58.33%;
  > a {
    display: flex;
  }
  ${ImageWrap} {
    width: 50%;
  }
  ${InfoWrap} {
    width: calc(100% - 160px);
    > div + div {
      margin-top: 8px;
    }
  }
`;
export const TodaySlideListsWrap = styled.div`
  width: 41.77%;
`;
export const SlideItem = styled.div``;
