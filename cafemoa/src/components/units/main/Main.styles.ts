import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { DEFAULT_COLOR } from "../../../commons/default/default";
import { ContainerWrap } from "../../../commons/styles/commonStyles";
import * as mq from "../../../commons/styles/mediaQuery";
import { IMainStylesProps } from "./Main.types";

const VisualAnimation = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.8;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.3);
    opacity: 1;
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

export const VisualImage = styled.div<IMainStylesProps>`
  width: 100%;
  height: 100%;
  ::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%) scale(1);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* background-image: url("/images/main/img_main_visual01.png"); */
    background-image: ${(props) =>
      props.imageNum !== undefined
        ? `url("/images/main/img_main_visual0${props.imageNum}.png")`
        : `url("/images/main/img_main_visual01.png")`};
    animation: ${VisualAnimation} 10s linear infinite alternate;
  }
  ::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;
export const VisualText = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
export const TodayCafeWrap = styled.div`
  padding: 48px 0;
  background-color: ${DEFAULT_COLOR.subColor01};
`;
export const MainSection = styled.div`
  padding: 50px 0;
`;
export const MainSectionInner = styled(ContainerWrap)`
  padding-top: 0 !important;
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
