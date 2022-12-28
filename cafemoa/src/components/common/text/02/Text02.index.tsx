import * as S from "./Text02.styles";

interface ITagProps {
  size: "sm" | "md" | "lg";
  children: string;
}

export default function Tag(props: ITagProps) {
  return <S.Word size={props.size}>{props.children}</S.Word>;
}
