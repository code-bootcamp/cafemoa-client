import HeroWrap from "../../../../commons/hero/HeroWrap.index";
import Text from "../../../../commons/text/01/Text01.index";
import * as S from "./Owner.styles";
export default function OwnerMyPage() {
  return (
    <>
      <HeroWrap
        imageUrl="/images/owner/Owner01.jpeg"
        title="마이 모아"
        subject="마이페이지 마이페이지 마이페이지 마이페이지 마이페이지 마이페이지 마이페이지"
      ></HeroWrap>
      <S.MyPageContainer>
        <S.OwnerMenuContainer>
          <S.Box>
            <S.EditCafeInfo>
              <div style={{ paddingBottom: "5%" }}>
                <Text size="54" weight="700">
                  카페 정보 수정
                </Text>
              </div>
              <img src="/images/owner/Owner02.png" />
            </S.EditCafeInfo>
            <S.EditMyInfo>
              <div style={{ paddingBottom: "5%" }}>
                <Text size="54" weight="700">
                  내 개인정보 수정
                </Text>
              </div>
              <img src="/images/owner/Owner03.png" />
            </S.EditMyInfo>
          </S.Box>
          <S.Box>
            <S.CheckUsers>
              <div style={{ paddingBottom: "5%" }}>
                <Text size="54" weight="700">
                  적립 회원 점검
                </Text>
              </div>
              <img src="/images/owner/Owner04.png" />
            </S.CheckUsers>
            <S.StampPage>
              <div style={{ paddingBottom: "5%" }}>
                <Text size="54" weight="700">
                  적립 페이지
                </Text>
              </div>
              <img src="/images/owner/Owner05.png" />
            </S.StampPage>
          </S.Box>
        </S.OwnerMenuContainer>
      </S.MyPageContainer>
    </>
  );
}
