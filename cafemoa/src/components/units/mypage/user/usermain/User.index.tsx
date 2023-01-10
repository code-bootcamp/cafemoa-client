import Link from "next/link";
import { AiOutlineSetting } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { infoUserState } from "../../../../../commons/stores";
import Box01 from "../../../../commons/box/01/Box01.index";
import HeroWrap from "../../../../commons/hero/HeroWrap.index";
import Text from "../../../../commons/text/01/Text01.index";
import Users01 from "../../../../commons/user/01/Users01.index";
import * as S from "./User.styles";

export default function UserMain(props: any) {
  const [infoUser] = useRecoilState(infoUserState);
  console.log(infoUser?.fetchUser);
  const userId = infoUser?.fetchUser?.id;
  const mainRegion = infoUser?.fetchUser?.address?.split(" ");
  console.log(mainRegion);

  // const { data: myStampData } = useFetchUserStamps();

  const stampLength = props.allStamps?.fetchStamps.filter(
    (el) => el?.count !== 0
  );
  const validStampLength = props.myValidCouponData?.fetchUserCoupons.length;
  const invalidStampLength =
    props.myInvalidCouponData?.fetchDeletedCoupon.length;
  const pickLength = props.myPickData?.fetchMyPickLists.length;
  // console.log(myValidCouponData);
  // console.log(myInvalidCouponData);
  // console.log(myPickData);
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
                <>
                  <S.SettingIcon>
                    <AiOutlineSetting />
                  </S.SettingIcon>
                </>
              </Users01>
            </button>
            <S.UserName>
              <Text size="32" weight="700">
                {infoUser?.fetchUser?.nickname}
              </Text>
            </S.UserName>
            <S.UserMainArea>
              <Text size="24" weight="500">
                내가 활동하는 지역은 <br />
                {mainRegion !== undefined &&
                  `${mainRegion[0]} ${mainRegion[1]}`}
                입니다.
              </Text>
            </S.UserMainArea>
          </S.ProfileWrapper>
          <S.MenuWrapper>
            <S.BoxContainer>
              <S.BoxWrapper>
                <Box01 styles={{ height: "100%" }}>
                  <Link href={`/mypage/user/${String(userId)}/mystamp`}>
                    <a>
                      <S.MypageButton>
                        <div>
                          <Text size="28" weight="700">
                            스탬프를 모아보세요!
                          </Text>
                        </div>
                        <S.MenuDetail>
                          <Text size="18" weight="300">
                            스탬프가 적립 된 카페가 {stampLength?.length}개
                            있습니다.
                          </Text>
                        </S.MenuDetail>
                      </S.MypageButton>
                    </a>
                  </Link>
                </Box01>
              </S.BoxWrapper>
              <S.BoxWrapper>
                <Box01 styles={{ height: "100%" }}>
                  <Link href={`/mypage/user/${String(userId)}/mycoupon`}>
                    <a>
                      <S.MypageButton>
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
                              {validStampLength}
                            </Text>
                          </div>
                          <div>
                            <Text size="18" weight="500" fontColor="mainColor">
                              사용완료 쿠폰 &nbsp;
                            </Text>
                            <Text size="18" weight="300" fontColor="mainColor">
                              {invalidStampLength}
                            </Text>
                          </div>
                        </S.MenuDetail>
                      </S.MypageButton>
                    </a>
                  </Link>
                </Box01>
              </S.BoxWrapper>
              <S.BoxWrapper>
                <Box01 styles={{ height: "100%" }}>
                  <Link href={`/mypage/user/${String(userId)}/mypick`}>
                    <a>
                      <S.MypageButton>
                        <div>
                          <Text size="28" weight="700">
                            나의 찜 카페를 모아보세요!
                          </Text>
                        </div>
                        <S.MenuDetail>
                          <Text size="18" weight="300">
                            찜한 카페가 {pickLength}개 있습니다.
                          </Text>
                        </S.MenuDetail>
                      </S.MypageButton>
                    </a>
                  </Link>
                </Box01>
              </S.BoxWrapper>
              <S.BoxWrapper>
                <Box01 styles={{ height: "100%" }}>
                  <Link href={`/mypage/user/${String(userId)}/myreview`}>
                    <a>
                      <S.MypageButton>
                        <div>
                          <Text size="28" weight="700">
                            나의 리뷰를 모아보세요!
                          </Text>
                        </div>
                        <S.MenuDetail>
                          <Text size="18" weight="300">
                            작성한 리뷰가 5개 있습니다.
                          </Text>
                        </S.MenuDetail>
                      </S.MypageButton>
                    </a>
                  </Link>
                </Box01>
              </S.BoxWrapper>
            </S.BoxContainer>
          </S.MenuWrapper>
        </S.Container>
      </S.ContainerWrapper>
    </>
  );
}
