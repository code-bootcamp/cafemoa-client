// import { GetDateYYMMDD } from "../../../../commons/library/utill";
import { BiUser } from "react-icons/bi";
import * as S from "./Users01.styles";

interface IUserProps {
  size: "sm" | "md" | "lg";
  name?: string;
  alignItem?: string;
  image?: string;
  time?: string;
  children?: JSX.Element;
}

export default function Users01(props: IUserProps) {
  return (
    <S.UserWrap size={props.size} alignItem={props.alignItem ?? ""}>
      <S.UserImageWrap>
        {props.image !== undefined ? <img src={props.image} /> : <BiUser />}
      </S.UserImageWrap>
      {props.name !== undefined && <S.UserName>{props.name}</S.UserName>}
      {props.children}
    </S.UserWrap>
  );
}
