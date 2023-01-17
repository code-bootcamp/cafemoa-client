// import { css } from "@emotion/react";
import styled from "@emotion/styled";
import * as mq from "../../../commons/styles/mediaQuery";

interface IHeroProps {
  imageUrl: string;
}
export const ImageWrap = styled.div<IHeroProps>`
  position: relative;
  width: 100%;
  height: 100%;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${(props) =>
    props.imageUrl !== "" && `url(${props.imageUrl})`};

  ::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const HeroTextWrap = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  text-align: center;
`;
export const HeroTextTitle = styled.div``;
export const HeroTextSubject = styled.div`
  margin-top: 16px;
  word-break: keep-all;
`;
export const HeroWrap = styled.div`
  position: relative;
  height: 400px;
  ${mq.MobileM} {
    height: 280px;
  }
`;
