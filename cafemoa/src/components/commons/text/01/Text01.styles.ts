import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { DEFAULT_COLOR } from "../../../../commons/styles/commonStyles";

interface IFontProps {
  size?: string;
  weight?: string;
  fontColor?: string;
}

export const Word = styled.span`
  font-size: ${(props: IFontProps) =>
    props.size === undefined ? "16px" : `${props.size}px`};
  font-weight: ${(props: IFontProps) =>
    props.weight === null ? "300" : props.weight};
  color: ${(props: IFontProps) =>
    props.fontColor === undefined ? "#000" : DEFAULT_COLOR[props.fontColor]};
  @media screen and (max-width: 1024px) {
    ${(props: IFontProps) =>
      props.size === "54" &&
      css`
        font-size: 40px;
      `}
    ${(props: IFontProps) =>
      props.size === "32" &&
      css`
        font-size: 28px;
      `}
    ${(props: IFontProps) =>
      props.size === "28" &&
      css`
        font-size: 24px;
      `}
    ${(props: IFontProps) =>
      props.size === "24" &&
      css`
        font-size: 20px;
      `}
    ${(props: IFontProps) =>
      props.size === "20" &&
      css`
        font-size: 18px;
      `}
    ${(props: IFontProps) =>
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
