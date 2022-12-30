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
  @media screen and (max-width: 1024) {
  }
`;
