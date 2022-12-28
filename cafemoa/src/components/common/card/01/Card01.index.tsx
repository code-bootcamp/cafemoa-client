import * as S from "./Card01.styles";

interface ICardProps {
  children: JSX.Element;
  imageUrl: string;
  styles?: {
    [key: string]: string | number;
  };
}

export default function Card01(props: ICardProps) {
  const _styles = { ...props.styles };
  return (
    <S.CardWrapper style={_styles}>
      <S.CardImgWrap>
        <img src={props.imageUrl} alt="" />
      </S.CardImgWrap>
      <S.CardInfoWrap>{props.children}</S.CardInfoWrap>
    </S.CardWrapper>
  );
}
