import { UseFormRegisterReturn } from "react-hook-form";

import * as S from "./Input01.styles";

interface IInputProps {
  type: "text" | "password";
  register?: UseFormRegisterReturn;
  textAlign?: "left" | "center";
  placeHolder?: string;
  error?: string;
  children?: JSX.Element;
  defaultValue?: string | number;
  styles?: {
    [key: string]: string | number;
  };
}

export default function Input01(props: IInputProps) {
  const _styles = { ...props.styles };
  return (
    <S.InputWrap textAlign={props.textAlign} style={_styles}>
      <input
        type={props.type}
        placeholder={props.placeHolder}
        defaultValue={props.defaultValue}
        {...props.register}
      />
      {props.children}
    </S.InputWrap>
  );
}
