import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";
import { ContainerWrap, TagWrap } from "../../../commons/styles/commonStyles";

// --------------------------------------------------카페 상세페이지 퍼블리싱
export const ContainerWrapper = styled(ContainerWrap)`
  padding-top: 100px;
`;
export const CardsWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0 -20px;
  // background: green;
`;
export const CardBox = styled.li`
  display: block;
  width: 25%;
  padding: 20px;
`;
export const FilterWrapper = styled.div`
  width: 10%;
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
`;
export const LikeWrapper = styled.div`
  width: 100%;
  transform: translateX(248px) translateY(-200px);
  margin-bottom: -40px;
`;

// -------------------------------------------------카페 상세페이지 기능부분
export const CafeInfiniteScroll = styled(InfiniteScroll)``;
