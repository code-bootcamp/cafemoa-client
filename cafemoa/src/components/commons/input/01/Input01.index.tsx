import { ChangeEvent } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { CgPlayStopR } from "react-icons/cg";

import * as S from "./Input01.styles";

interface IInputProps {
  type: "text" | "password";
  register?: UseFormRegisterReturn;
  textAlign?: "left" | "center";
  placeHolder?: string;
  error?: string;
  children?: JSX.Element;
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
        {...props.register}
      />
      {props.children}
    </S.InputWrap>
  );
}
