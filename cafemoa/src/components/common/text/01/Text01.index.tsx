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
  children: string;
}
export default function Text(props: ITextProps) {
  return (
    <S.Word size={props.size} weight={props.weight}>
      {props.children}
    </S.Word>
  );
}
