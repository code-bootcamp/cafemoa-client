import Text from "../text/01/Text01.index";
import * as S from "./HeroWrap.styles";

interface IHeroWrapProps {
  imageUrl: string;
  title: string;
  subject: string;
}

export default function HeroWrap(props: IHeroWrapProps) {
  return (
    <S.HeroWrap>
      <S.ImageWrap imageUrl={props.imageUrl} />
      <S.HeroTextWrap>
        <S.HeroTextTitle>
          <Text size="54" fontColor="white">
            {props.title}
          </Text>
        </S.HeroTextTitle>
        <S.HeroTextSubject>
          <Text size="24" fontColor="white">
            {props.subject}
          </Text>
        </S.HeroTextSubject>
      </S.HeroTextWrap>
    </S.HeroWrap>
  );
}
