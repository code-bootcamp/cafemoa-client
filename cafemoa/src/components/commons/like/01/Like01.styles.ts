import styled from "@emotion/styled";

interface ILikeStylesProps {
  iconColor?: "black" | "red" | "white";
  fontColor?: "black" | "white";
}

const LIKE_COLORS = {
  red: "#FF8989",
  white: "#ffffff",
  black: "#000000",
};

export const IconWrap = styled.div<ILikeStylesProps>`
  > svg {
    font-size: 30px;
    color: ${(props) =>
      props.iconColor !== undefined && LIKE_COLORS[props.iconColor]};
  }
`;
export const CountWrap = styled.div<ILikeStylesProps>`
  font-size: 14px;
  color: ${(props) =>
    props.fontColor !== undefined && LIKE_COLORS[props.fontColor]};
`;
export const LikeWrap = styled.div`
  display: flex;
  align-items: center;
`;
