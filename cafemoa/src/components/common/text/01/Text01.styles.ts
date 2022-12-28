import styled from "@emotion/styled";

interface IFontProps {
  size?: string;
  weight?: string;
}

export const Word = styled.span`
  font-size: ${(props: IFontProps) =>
    props.size === undefined ? "16px" : `${props.size}px`};
  font-weight: ${(props: IFontProps) =>
    props.weight === null ? "300" : props.weight};

  @media screen and (max-width: 1024) {
  }
`;
