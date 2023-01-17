import styled from "@emotion/styled";
import {
  ContainerWrap,
  TagWrap,
} from "../../../../commons/styles/commonStyles";
import * as mq from "../../../../commons/styles/mediaQuery";

// --------------------------------------------------카페 상세페이지 퍼블리싱
export const ContainerWrapper = styled(ContainerWrap)`
  padding-top: 100px;
`;
export const CardsWrapper = styled.div`
  /* display: flex;
  flex-wrap: wrap; */
  // background: green;
  > div {
    padding: 0;
    margin: 0 -20px;
  }
`;
export const CardBox = styled.div`
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
export const FilterWrapper = styled.div`
  max-width: 150px;
  padding-bottom: 40px;
`;
export const TagsWrap = styled(TagWrap)`
  padding: 0 0 16px;
  > button + button {
    margin-left: 16px;
  }
`;
export const SliderWrapper = styled.div`
  width: 100%;
  padding-top: 100px;
  ${mq.MobileL} {
    padding-top: 36px;
  }
`;
export const LikeWrapper = styled.div`
  position: absolute;
  right: 16px;
  top: 6px;
`;

export const DetailTagWrap = styled.div`
  padding-top: 8px;
`;

// -------------------------------------------------카페 상세페이지 기능부분
// export const CafeInfiniteScroll = styled(InfiniteScroll)``;
