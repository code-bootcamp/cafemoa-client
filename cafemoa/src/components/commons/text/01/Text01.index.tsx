import * as S from "./Text01.styles";

interface ITextProps {
  size?:
    | "16"
    | "18"
    | "20"
    | "24"
    | "28"
    | "32"
    | "36"
    | "42"
    | "48"
    | "54"
    | "72"
    | "80";
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
    | "deepBrown";
  children: string | [string, JSX.Element];
}
export default function Text(props: ITextProps) {
  return (
    <S.Word size={props.size} weight={props.weight} fontColor={props.fontColor}>
      {props.children}
    </S.Word>
  );
}
