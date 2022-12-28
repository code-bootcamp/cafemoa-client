import * as S from "./Like01.styles";
import { AiOutlineHeart } from "react-icons/ai";

interface ILikeProps {
  count?: number;
  iconColor?: "black" | "red";
  fontColor?: "black" | "white";
}

export default function Like01(props: ILikeProps) {
  return (
    <S.LikeWrap>
      <S.IconWrap iconColor={props.iconColor}>
        <AiOutlineHeart />
      </S.IconWrap>
      <S.CountWrap fontColor={props.fontColor}>{props.count}</S.CountWrap>
    </S.LikeWrap>
  );
}
