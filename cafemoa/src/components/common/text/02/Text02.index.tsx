import * as S from "./Text02.styles";

interface ITagProps {
  size: "sm" | "md" | "lg";
  children: string;
  isActive?: boolean;
}

export default function Tag(props: ITagProps) {
  return (
    <S.Word size={props.size} isActive={props.isActive}>
      {props.children}
    </S.Word>
  );
}
