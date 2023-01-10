import { ChangeEvent } from "react";
// import { UseFormRegisterReturn } from "react-hook-form";
import * as S from "./Switch01.styles";

interface ISwitchProps {
  // register?: UseFormRegisterReturn;
  onSetValue: (value: boolean) => void;
}

export default function Switch01(props: ISwitchProps) {
  const onChangeSwitch = (event: ChangeEvent<HTMLInputElement>) => {
    // props.setValue("", event.currentTarget.checked);
    props.onSetValue(event.currentTarget.checked);
  };

  return (
    <S.Label>
      <input type="checkbox" onChange={onChangeSwitch} />
      <S.LabelSlider />
      <S.LabelOn>On</S.LabelOn>
      <S.LabelOff>Off</S.LabelOff>
    </S.Label>
  );
}
