import { ReactNode } from "react";
import * as S from "./Text01.styles";

interface ITextProps {
  size?: "14" | "16" | "18" | "20" | "24" | "28" | "32" | "40" | "54";
  weight?: "300" | "500" | "700";
  fontColor?:
    | "black"
    | "white"
    | "gray"
    | "beige"
    | "deepBeige"
    | "lightBeige"
    | "green"
    | "brown"
    | "deepBrown"
    | "red";
  children: ReactNode;
}
export default function Text(props: ITextProps) {
  return (
    <S.Word size={props.size} weight={props.weight} fontColor={props.fontColor}>
      {props.children}
    </S.Word>
  );
}
