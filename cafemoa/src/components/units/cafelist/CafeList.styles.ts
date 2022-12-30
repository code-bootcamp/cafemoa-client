import styled from "@emotion/styled"
import InfiniteScroll from "react-infinite-scroller";
import { ContainerWrap } from "../../../commons/styles/commonStyles"


// --------------------------------------------------카페 상세페이지 퍼블리싱
export const ContainerWrapper = styled(ContainerWrap)``
export const CardsWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 48px -8px 0px -8px;
  // background: green;
`;
export const CardBox = styled.li`
  display: block;
  width: 25%;
  padding: 8px 8px;
`;
export const FilterWrapper = styled.div`
  width: 10%;
  margin-top: 64px;
`
export const TagsWrapper = styled.div`
  margin-top: 56px;
`
export const SliderWrapper = styled.div`
  width: 100%;
  margin-top: 72px;
`
export const LikeWrapper = styled.div`
  width: 100%;
  transform: translateX(248px) translateY(-200px);
  margin-bottom: -40px;
`

// -------------------------------------------------카페 상세페이지 기능부분
export const CafeInfiniteScroll = styled(InfiniteScroll)``;
