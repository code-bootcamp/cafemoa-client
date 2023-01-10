import { useRouter } from "next/router";
import { AiOutlineSetting } from "react-icons/ai";
import Box01 from "../../../../commons/box/01/Box01.index";
import HeroWrap from "../../../../commons/hero/HeroWrap.index";
import { useFetchMyPickLists } from "../../../../commons/hooks/queries/useFetchMyPickLists";
import { useFetchUserCoupons } from "../../../../commons/hooks/queries/useFetchUserCoupons";
import Text from "../../../../commons/text/01/Text01.index";
import Users01 from "../../../../commons/user/01/Users01.index";

import * as S from "./User.styles";

export default function UserMain(props: any) {
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

  const { data: myCouponData } = useFetchUserCoupons();
  const { data: myPickData } = useFetchMyPickLists();

  console.log(myCouponData);
  console.log(myPickData);
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
            <button>
              <Users01 size="lg">
                <S.SettingIcon>
                  <AiOutlineSetting />
                </S.SettingIcon>
              </Users01>
            </button>
            <S.UserName>
              <Text size="32" weight="700">
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
                <Box01 styles={{ height: "100%" }}>
                  <S.MypageButton onClick={onClickMystamp}>
                    <div>
                      <Text size="28" weight="700">
                        스탬프를 확인
                      </Text>
                    </div>
                    <S.MenuDetail>
                      <Text size="18" weight="300">
                        스탬프가 적립 된 곳이 5개 있습니다.
                      </Text>
                    </S.MenuDetail>
                  </S.MypageButton>
                </Box01>
              </S.BoxWrapper>
              <S.BoxWrapper>
                <Box01 styles={{ height: "100%" }}>
                  <S.MypageButton onClick={onClickMycoupon}>
                    <div>
                      <Text size="28" weight="700">
                        쿠폰을 모아보세요!
                      </Text>
                    </div>
                    <S.MenuDetail>
                      <div>
                        <Text size="18" weight="500" fontColor="mainColor">
                          사용가능 쿠폰 &nbsp;
                        </Text>
                        <Text size="18" weight="300" fontColor="mainColor">
                          4
                        </Text>
                      </div>
                      <div>
                        <Text size="18" weight="500" fontColor="mainColor">
                          사용완료 쿠폰 &nbsp;
                        </Text>
                        <Text size="18" weight="300" fontColor="mainColor">
                          6
                        </Text>
                      </div>
                    </S.MenuDetail>
                  </S.MypageButton>
                </Box01>
              </S.BoxWrapper>
              <S.BoxWrapper>
                <Box01 styles={{ height: "100%" }}>
                  <S.MypageButton onClick={onClickMyPick}>
                    <div>
                      <Text size="28" weight="700">
                        나의 찜 리스트
                      </Text>
                    </div>
                    <S.MenuDetail>
                      <Text size="18" weight="300">
                        찜한 가게가 5개 있습니다.
                      </Text>
                    </S.MenuDetail>
                  </S.MypageButton>
                </Box01>
              </S.BoxWrapper>
              <S.BoxWrapper>
                <Box01 styles={{ height: "100%" }}>
                  <S.MypageButton onClick={onClickMyreview}>
                    <div>
                      <Text size="28" weight="700">
                        나의 리뷰 확인
                      </Text>
                    </div>
                    <S.MenuDetail>
                      <Text size="18" weight="300">
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
