import { ChangeEvent, ReactNode, useEffect, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import Text from "../../text/01/Text01.index";
import * as S from "./Input02.styles";

interface IInputProps {
  type: "text" | "password";
  register?: UseFormRegisterReturn;
  errorMsg?: string;
  name: string;
  readOnly?: boolean;
  isValid?: boolean;
  children?: ReactNode;
  defaultValue?: string | number;
}

export default function Input02(props: IInputProps) {
  const [isValid, setIsValid] = useState<boolean>(false);
  const onChangeData = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    if (value.length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
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
        // required
        type={props.type}
        {...props.register}
        readOnly={props.readOnly ?? false}
        // onInput={onInputData}
        onChange={onChangeData}
        defaultValue={props.defaultValue}
      />
      <label>{props.name}</label>
      <div>
        <Text size="14" fontColor="red">
          {props.errorMsg}
        </Text>
      </div>
      <div style={{ marginTop: "4px", wordBreak: "keep-all" }}>
        {props.children}
      </div>
    </S.InputWrap>
  );
}
