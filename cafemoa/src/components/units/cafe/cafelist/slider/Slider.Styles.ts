import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import * as mq from "../../../../../commons/styles/mediaQuery";

export const CafeImage = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 56.25%;
  transition: all 0.5s;
  overflow: hidden;
  > img {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;
export const CafeContent = styled.div`
  opacity: 0;
  transform: translateY(40px) scale(0.8);
  transition: all 0.5s;
`;
export const SlideWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const StyledSlider = styled(Slider)`
  .slick-list {
    width: 100%;
    margin: 0 auto;
    overflow: visible;
  }
  .slick-prev:before,
  .slick-next:before {
    color: black;
    opacity: 1;
    font-size: 30px;
  }
  // .slick-prev {
  //   top: 40%;
  //   left: 31%;
  //   z-index: 9;
  // }
  // .slick-next {
  //   top: 40%;
  //   right: 32%;
  //   z-index: 9;
  // }
  .slick-slide {
    padding: 0 40px;
  }
  .slick-slide img {
    margin: 0 auto;
  }
  .slick-dots {
    position: relative;
    bottom: -380px;
  }
`;

export const SwiperWrap = styled.div`
  .swiper {
    overflow: visible;
  }
  .swiper-slide {
    max-width: 33.3333%;
    transform: scale(0.8);
    ${mq.MobileM} {
      max-width: 100%;
      padding: 24px;
      transform: scale(1);
    }
  }
  .swiper-slide.swiper-slide-active {
    /* max-width: 50%; */
    transform: scale(1.1);
    transition: all 0.5s;
    ${CafeImage} {
    }
    ${CafeContent} {
      transform: translateY(0) scale(0.8);
      opacity: 1;
    }

    ${mq.MobileM} {
      transform: scale(1);
    }
  }
`;
