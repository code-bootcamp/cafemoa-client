// import { UseFormRegisterReturn } from "react-hook-form";

import * as S from "./Input01.styles";

interface IInputProps {
  type: "text" | "password";
  textAlign?: "left" | "center";
  placeHolder?: string;
  error?: string;
  children?: JSX.Element;
}

export default function Input01(props: IInputProps) {
  return (
    <S.InputWrap textAlign={props.textAlign}>
      <input type={props.type} placeholder={props.placeHolder} />
      {props.children}
    </S.InputWrap>
  );
}
