import { ReactNode } from "react";
import * as S from "./Box01.styles";

interface IBoxProps {
  children: ReactNode;
  styles?: {
    [key: string]: string | number;
  };
}

export default function Box01(props: IBoxProps) {
  const _styles = { ...props.styles };
  return <S.BoxWrapper style={_styles}>{props.children}</S.BoxWrapper>;
}
