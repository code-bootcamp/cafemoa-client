import { css } from "@emotion/react";
import styled from "@emotion/styled"
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";



export const CafeImage = styled.div`
  width: 100%;
  transition : all 0.5s;
`
export const CafeContent = styled.div`
  width: 100%;
  opacity: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 50px;
  // background: red;
  transform: translateX(-45px)translateY(100px); 
  transition : all 0.8s;  
`
export const SlideWrapper = styled.div`
  width: 100%;
  height: 100%;
  ${(props) => props.isActive && css`
    ${CafeImage}{
        transform: scale(1.2)
    }
    ${CafeContent}{
        opacity: 1;
        transform: translateX(-45px) translateY(60px)
    }
  `}
`

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
  .slick-slide{
    padding: 0 40px
  }
  .slick-slide img {
    margin: 0 auto;
  }
  .slick-dots {
    position: relative;
    bottom: -380px;
  }
`;