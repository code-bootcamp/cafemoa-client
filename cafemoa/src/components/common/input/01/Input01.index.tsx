// import { UseFormRegisterReturn } from "react-hook-form";

import * as S from "./Input01.styles";

interface IInputProps {
  type: "text" | "password";
  error?: string;
}

export default function Input01(props: IInputProps) {
  // console.log(props);
  return (
    <S.InputWrap>
      <input type={props.type} />
    </S.InputWrap>
  );
}
