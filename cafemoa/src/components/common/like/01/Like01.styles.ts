import styled from "@emotion/styled";

interface ILikeStylesProps {
  iconColor?: "black" | "red";
  fontColor?: "black" | "white";
}

const LIKE_COLORS = {
  red: "#FF8989",
  white: "#ffffff",
  black: "#000000",
};

export const IconWrap = styled.div`
  > svg {
    font-size: 30px;
    color: ${(props: ILikeStylesProps) =>
      props.iconColor !== undefined && LIKE_COLORS[props.iconColor]};
  }
`;
export const CountWrap = styled.div`
  font-size: 14px;
  color: ${(props: ILikeStylesProps) =>
    props.fontColor !== undefined && LIKE_COLORS[props.fontColor]};
`;
export const LikeWrap = styled.div`
  display: flex;
  align-items: center;
`;
