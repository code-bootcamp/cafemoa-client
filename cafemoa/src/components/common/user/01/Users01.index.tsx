// import { GetDateYYMMDD } from "../../../../commons/library/utill";
import * as S from "./Users01.styles";

interface IUserProps {
  size: "sm" | "md";
  name?: string;
  alignItem?: string;
  image?: string;
  time?: string;
}

export default function Users01(props: IUserProps) {
  return (
    <S.UserWrap size={props.size} alignItem={props.alignItem ?? ""}>
      <S.UserImageWrap>{props.image}</S.UserImageWrap>
      {props.name !== undefined && <S.UserName>{props.name}</S.UserName>}
    </S.UserWrap>
  );
}
