import Box01 from "../../../../commons/box/01/Box01.index";
import Text from "../../../../commons/text/01/Text01.index";
import * as S from "./NonMember.styles";

export default function NonMember() {
  return (
    <>
      <Box01
        styles={{
          padding: "48px",
        }}
      >
        <S.BannerWrap>
          <S.BannerLeft>
            <div>
              <Text size="24">아직도 종이쿠폰 모아?</Text>
            </div>
            <div>
              <Text size="40">난 카페모아!</Text>
            </div>
          </S.BannerLeft>
          <S.BannerRight>
            <S.BannerBtnWrap>
              <S.SignUpBtn color="black">
                <Text fontColor="white">회원가입</Text>
              </S.SignUpBtn>
              <S.SignInBtn>
                <Text fontColor="black">로그인</Text>
              </S.SignInBtn>
            </S.BannerBtnWrap>
          </S.BannerRight>
        </S.BannerWrap>
      </Box01>
    </>
  );
}
