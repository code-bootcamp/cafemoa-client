import { ChangeEvent } from "react";
import * as S from "./Switch01.styles";

export default function Switch01() {
  const onChangeSwitch = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.checked);
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
