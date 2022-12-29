import HeroWrap from "../../common/hero/HeroWrap.index";
import * as S from "./Templet.styles";

export default function Template() {
  return (
    <>
      <HeroWrap
        imageUrl="/images/temp/temp_hero01.png"
        title="카페 모아"
        subject="카페를 한눈에 보기 쉽게 모아!"
      />
      <S.TemplateWrap>
        <div>
          컨텐츠 입니다.컨텐츠 입니다.컨텐츠 입니다.컨텐츠 입니다.컨텐츠 입니다.
          컨텐츠 입니다.
        </div>
      </S.TemplateWrap>
    </>
  );
}
