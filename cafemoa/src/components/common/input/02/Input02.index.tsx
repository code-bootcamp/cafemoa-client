import { UseFormRegisterReturn } from "react-hook-form";
import * as S from "./Input02.styles";

interface IInputProps {
  type: "text" | "password";
  register?: UseFormRegisterReturn;
  error?: string;
  name: string;
}

export default function Input02(props: IInputProps) {
  // console.log(props);
  return (
    <S.InputWrap>
      <input required type={props.type} {...props.register} />
      <label>{props.name}</label>
      {/* <Error>{props.error}</Error> */}
    </S.InputWrap>
  );
}
