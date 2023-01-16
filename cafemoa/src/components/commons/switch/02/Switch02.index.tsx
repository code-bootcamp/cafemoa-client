import { ChangeEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import * as S from "./Switch02.styles";

interface ISwitchProps {
  // register?: UseFormRegisterReturn;
  defaultValue?: boolean;
  onSetValue: (value: boolean) => void;
}

export default function Switch02(props: ISwitchProps) {
  const onChangeSwitch = (event: ChangeEvent<HTMLInputElement>) => {
    // props.setValue("", event.currentTarget.checked);
    props.onSetValue(event.currentTarget.checked);
  };

  return (
    <S.Label>
      <input
        type="checkbox"
        onChange={onChangeSwitch}
        key={uuidv4()}
        checked={props.defaultValue}
      />
      <S.LabelSlider />
      <S.LabelOn>있음</S.LabelOn>
      <S.LabelOff>없음</S.LabelOff>
    </S.Label>
  );
}
