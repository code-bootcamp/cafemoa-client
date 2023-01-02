import { useRouter } from "next/router";
import Box01 from "../../../../commons/box/01/Box01.index";
import HeroWrap from "../../../../commons/hero/HeroWrap.index";
import Text from "../../../../commons/text/01/Text01.index";
import * as S from "./User.styles";

export default function UserMain() {
  const router = useRouter();

  const onClickMystamp = () => {
    void router.push("/mypage/user/mystamp");
  };

  const onClickMycoupon = () => {
    void router.push("/mypage/user/mycoupon");
  };

  const onClickMyPick = () => {
    void router.push("/mypage/user/mypick");
  };

  const onClickMyreview = () => {
    void router.push("/mypage/user/myreview");
  };

  return (
    <>
      <HeroWrap
        imageUrl="/images/review/review_hero01.png"
        title="마이모아"
        subject="마이페이지 마이페이지 마이페이지"
      ></HeroWrap>
      <S.ContainerWrapper>
        <S.Container>
          <S.ProfileWrapper>
            <div>
              <img src="/images/user/User.png" />
            </div>
            <S.UserName>
              <Text size="36" weight="700">
                닉네임
              </Text>
            </S.UserName>
            <S.UserMainArea>
              <Text size="24" weight="500">
                내가 활동하는 지역은 <br />
                서울특별시 입니다.
              </Text>
            </S.UserMainArea>
          </S.ProfileWrapper>
          <S.MenuWrapper>
            <S.BoxContainer>
              <S.BoxWrapper>
                <Box01>
                  <S.MypageButton onClick={onClickMystamp}>
                    <Text size="36" weight="700">
                      스탬프를 확인
                    </Text>
                    <S.MenuDetail>
                      <Text size="24" weight="300">
                        스탬프가 적립 된 곳이 5개 있습니다.
                      </Text>
                    </S.MenuDetail>
                  </S.MypageButton>
                </Box01>
              </S.BoxWrapper>
              <S.BoxWrapper>
                <Box01>
                  <S.MypageButton onClick={onClickMycoupon}>
                    <Text size="36" weight="700">
                      쿠폰을 모아보세요!
                    </Text>
                    <S.MenuDetail>
                      <div>
                        <S.CouponLabel>
                          <Text size="24" weight="500" fontColor="deepBrown">
                            사용가능 쿠폰
                          </Text>
                        </S.CouponLabel>
                        <S.CouponCount>
                          <Text size="24" weight="300" fontColor="deepBrown">
                            4
                          </Text>
                        </S.CouponCount>
                        <S.CouponLabel>
                          <Text size="24" weight="500" fontColor="deepBrown">
                            사용완료 쿠폰
                          </Text>
                        </S.CouponLabel>
                        <div>
                          <Text size="24" weight="300" fontColor="deepBrown">
                            6
                          </Text>
                        </div>
                      </div>
                    </S.MenuDetail>
                  </S.MypageButton>
                </Box01>
              </S.BoxWrapper>
              <S.BoxWrapper>
                <Box01>
                  <S.MypageButton onClick={onClickMyPick}>
                    <Text size="36" weight="700">
                      나의 찜 리스트
                    </Text>
                    <S.MenuDetail>
                      <Text size="24" weight="300">
                        찜한 가게가 5개 있습니다.
                      </Text>
                    </S.MenuDetail>
                  </S.MypageButton>
                </Box01>
              </S.BoxWrapper>
              <S.BoxWrapper>
                <Box01>
                  <S.MypageButton onClick={onClickMyreview}>
                    <Text size="36" weight="700">
                      나의 리뷰 확인
                    </Text>
                    <S.MenuDetail>
                      <Text size="24" weight="300">
                        리뷰작성 글이 5개 있습니다.
                      </Text>
                    </S.MenuDetail>
                  </S.MypageButton>
                </Box01>
              </S.BoxWrapper>
            </S.BoxContainer>
          </S.MenuWrapper>
        </S.Container>
      </S.ContainerWrapper>
    </>
  );
}
