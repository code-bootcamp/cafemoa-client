import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { DEFAULT_COLOR } from "../../../../commons/default/default";
import * as mq from "../../../../commons/styles/mediaQuery";

interface IFontProps {
  size?: string;
  weight?: string;
  fontColor?: string;
}

export const Word = styled.span<IFontProps>`
  font-size: ${(props) =>
    props.size === undefined ? "16px" : `${props.size}px`};
  font-weight: ${(props) => (props.weight === null ? "300" : props.weight)};
  color: ${(props) =>
    props.fontColor === undefined ? "#000" : DEFAULT_COLOR[props.fontColor]};
  ${mq.MobileL} {
    ${(props) =>
      props.size === "54" &&
      css`
        font-size: 40px;
      `}
    ${(props) =>
      props.size === "32" &&
      css`
        font-size: 28px;
      `}
    ${(props) =>
      props.size === "28" &&
      css`
        font-size: 24px;
      `}
    ${(props) =>
      props.size === "24" &&
      css`
        font-size: 20px;
      `}
    ${(props) =>
      props.size === "20" &&
      css`
        font-size: 18px;
      `}
    ${(props) =>
      props.size === "18" &&
      css`
        font-size: 16px;
      `}
  }
  /* 
  16 == 16
  18 == 16
  20 == 18
  24 == 20
  28 == 24
  32 == 28
  54 == 40
  */
`;
