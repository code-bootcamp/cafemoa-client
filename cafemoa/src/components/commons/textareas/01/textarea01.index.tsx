import { UseFormRegisterReturn } from "react-hook-form";

import * as S from "./textarea01.styles";

interface ITextareaProps {
  register?: UseFormRegisterReturn;
  placeHolder?: string;
  error?: string;
  defaultValue?: string;
  styles?: {
    [key: string]: string | number;
  };
}

export default function Textarea01(props: ITextareaProps) {
  const _styles = { ...props.styles };
  console.log(props);
  return (
    <S.TextareaWrap style={_styles}>
      <textarea
        placeholder={props.placeHolder}
        defaultValue={props.defaultValue}
        {...props.register}
      ></textarea>
    </S.TextareaWrap>
  );
}
