import Box01 from "../../../../commons/box/01/Box01.index";
import HeroWrap from "../../../../commons/hero/HeroWrap.index";
import Text from "../../../../commons/text/01/Text01.index";
import * as S from "./MyPick.styles";

export default function MyPick() {
  return (
    <>
      <HeroWrap
        imageUrl="/images/review/review_hero01.png"
        title="마이모아"
        subject="마이페이지 마이페이지 마이페이지"
      ></HeroWrap>
      <S.ContainerWrapper>
        <S.Container>
          <S.TitleWrapper>
            <Text size="32" weight="500">
              내가 찜한 카페를 모아보세요!
            </Text>
          </S.TitleWrapper>

          <S.StampContainer>
            <S.StampWrapper>
              <Box01>
                <S.StampInfoWrapper>
                  <div>
                    <Text size="24" weight="500" fontColor="brown">
                      카페한번모아
                    </Text>
                  </div>
                </S.StampInfoWrapper>
              </Box01>
            </S.StampWrapper>
          </S.StampContainer>
        </S.Container>
      </S.ContainerWrapper>
    </>
  );
}
