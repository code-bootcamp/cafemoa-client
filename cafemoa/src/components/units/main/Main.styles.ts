import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { DEFAULT_COLOR } from "../../../commons/default/default";
import { ContainerWrap } from "../../../commons/styles/commonStyles";
import * as mq from "../../../commons/styles/mediaQuery";
import { IMainStylesProps } from "./Main.types";

const ScrollAni = keyframes`
  0% {
    top : 5px
  }
  100% {
    top : 30px
  }
`;

export const ContainerWrapper = styled(ContainerWrap)`
  padding-top: 100px;
`;
export const MainVisual = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 100px);
  overflow: hidden;
`;
export const VideoWrap = styled.div`
  width: 100%;
  height: 100%;
  ::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

export const VisualVideo = styled.video`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  min-width: 1400px;
  transform: translate(-50%, -50%);
  ${mq.MobileM} {
    left: 20%;
  }
  ${mq.MobileS} {
    height: 100%;
  }
`;
export const VisualText = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
export const ScrollAnimation = styled.div`
  position: absolute;
  left: 50%;
  bottom: 24px;
  width: 30px;
  height: 60px;
  border-radius: 20px;
  border: 2px solid ${DEFAULT_COLOR.white};
  transform: translateX(-50%);
  ::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 5px;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: ${DEFAULT_COLOR.white};
    transform: translateX(-50%);
    animation: ${ScrollAni} 2s ease-in infinite forwards;
  }
`;
export const TodayCafeWrap = styled.div`
  padding: 48px 0;
  background-color: ${DEFAULT_COLOR.subColor01};
`;
export const MainSection = styled.div`
  padding: 50px 0;
  &:nth-of-type(2) {
    padding-top: 120px;
  }
`;
export const MainSectionInner = styled(ContainerWrap)`
  padding-top: 0 !important;
`;
export const MainWrap = styled.div`
  > div + div {
    padding-top: 100px;
  }
`;

export const SectionTitle = styled.div`
  padding-bottom: 28px;
`;
export const CategoryWrap = styled.div`
  margin: 0 -20px;
  display: flex;
  flex-wrap: wrap;
`;
export const Category = styled.div<IMainStylesProps>`
  width: 25%;
  padding: 20px;
  > a {
    position: relative;
    padding-bottom: 100%;
    display: block;
    border-radius: 20px;
    overflow: hidden;
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    background-image: ${(props) =>
      props.imageUrl !== undefined
        ? `url(${props.imageUrl})`
        : "url('/images/main/img_main_category01.png')"};
    transition: all 0.4s;
    ::before {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      width: 100%;
      height: 100%;
      transform: translate(-50%, -50%);
      background-image: radial-gradient(
        circle,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.35) 56.77%
      );
    }
    > span {
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      width: 100%;
      text-align: center;
      transform: translate(-50%, -50%);
    }
    &:hover {
      background-size: 110%;
    }
  }
`;

export const ReviewListsWrap = styled.div``;

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
