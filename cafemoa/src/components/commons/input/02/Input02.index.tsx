import { ChangeEvent, useEffect, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import * as S from "./Input02.styles";

interface IInputProps {
  type: "text" | "password";
  register?: UseFormRegisterReturn;
  error?: string;
  name: string;
  readOnly?: boolean;
  isValid?: boolean;
}

export default function Input02(props: IInputProps) {
  const [isValid, setIsValid] = useState<boolean>(false);
  const onChangeData = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    console.log(value.length);
    if (value.length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    console.log(!isValid);
  };
  // const onInputData = (event: ChangeEvent<HTMLInputElement>) => {
  //   const { value } = event.currentTarget;
  //   if (value.length > 0) {
  //     setIsValid(true);
  //   } else {
  //     setIsValid(false);
  //   }
  // };

  useEffect(() => {
    setIsValid(props.isValid ?? false);
  }, [props.isValid]);

  return (
    <S.InputWrap isVaild={isValid}>
      {}
      <input
        required
        type={props.type}
        {...props.register}
        readOnly={props.readOnly ?? false}
        // onInput={onInputData}
        onChange={onChangeData}
      />
      <label>{props.name}</label>
      {/* <Error>{props.error}</Error> */}
    </S.InputWrap>
  );
}
