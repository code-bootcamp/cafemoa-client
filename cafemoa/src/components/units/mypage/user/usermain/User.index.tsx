import Link from "next/link";
import { useRecoilState } from "recoil";
import { infoUserState } from "../../../../../commons/stores";
import Box01 from "../../../../commons/box/01/Box01.index";
import HeroWrap from "../../../../commons/hero/HeroWrap.index";
import { useFetchDeletedCoupon } from "../../../../commons/hooks/queries/useFetchDeletedCoupon";
import { useFetchMyPickLists } from "../../../../commons/hooks/queries/useFetchMyPickLists";
import { useFetchUserComments } from "../../../../commons/hooks/queries/useFetchUserComments";
import { useFetchUserCoupons } from "../../../../commons/hooks/queries/useFetchUserCoupons";
import { useFetchUserStamps } from "../../../../commons/hooks/queries/useFetchUserStamps";
import MypageSidebarLayout from "../../../../commons/layout/mypage/user/MypageSidebar.index";
import Text from "../../../../commons/text/01/Text01.index";
import * as S from "./User.styles";

export default function UserMain() {
  const [infoUser] = useRecoilState(infoUserState);
  // console.log(infoUser?.fetchUser);
  const userId = infoUser?.fetchUser?.id;
  const mainRegion = infoUser?.fetchUser?.address?.split(" ");
  // console.log(mainRegion);
  const { data: allStamps } = useFetchUserStamps();
  const { data: myValidCouponData } = useFetchUserCoupons();
  const { data: myInvalidCouponData } = useFetchDeletedCoupon();
  const { data: myPickData } = useFetchMyPickLists();
  const { data: myReviewData } = useFetchUserComments();

  console.log(allStamps);
  console.log(myValidCouponData);
  // console.log(myInvalidCouponData);
  // console.log(myPickData);
  // console.log(myReviewData);

  const stampLength = allStamps?.fetchUserStamps?.filter(
    (el) => el?.count !== 0
  );

  const validStampLength = myValidCouponData?.fetchUserCoupons.length;
  const invalidStampLength = myInvalidCouponData?.fetchDeletedCoupon.length;
  const pickLength = myPickData?.fetchMyPickLists.length;
  const reviewLength = myReviewData?.fetchUserComments.length;
  return (
    <>
      <HeroWrap
        imageUrl="/images/review/review_hero01.png"
        title="????????????"
        subject="??? ????????? ????????? ?????? ?????? ??????!"
      ></HeroWrap>
      <S.ContainerWrapper>
        <div>
          <MypageSidebarLayout>
            <S.UserMainArea>
              <Text size="24" weight="500">
                ?????? ???????????? ????????? <br />
                {mainRegion !== undefined &&
                  `${mainRegion[0]} ${mainRegion[1]}`}
                ?????????.
              </Text>
            </S.UserMainArea>
          </MypageSidebarLayout>
        </div>
        <S.Container>
          <S.MenuWrapper>
            <S.BoxContainer>
              <S.BoxWrapper>
                <Box01 styles={{ padding: 0, height: "100%" }}>
                  <Link href={`/mypage/user/${String(userId)}/mystamp`}>
                    <a>
                      <S.MypageButton>
                        <div>
                          <Text size="28" weight="700">
                            ???????????? ???????????????!
                          </Text>
                        </div>
                        <S.MenuDetail>
                          <Text size="18" weight="300">
                            ???????????? ?????? ??? ????????? {stampLength?.length}???
                            ????????????.
                          </Text>
                        </S.MenuDetail>
                      </S.MypageButton>
                    </a>
                  </Link>
                </Box01>
              </S.BoxWrapper>
              <S.BoxWrapper>
                <Box01 styles={{ padding: 0, height: "100%" }}>
                  <Link href={`/mypage/user/${String(userId)}/mycoupon`}>
                    <a>
                      <S.MypageButton>
                        <div>
                          <Text size="28" weight="700">
                            ????????? ???????????????!
                          </Text>
                        </div>
                        <S.MenuDetail>
                          <div>
                            <Text size="18" weight="500" fontColor="mainColor">
                              ???????????? ?????? &nbsp;
                            </Text>
                            <Text size="18" weight="300" fontColor="mainColor">
                              {validStampLength}
                            </Text>
                          </div>
                          <div>
                            <Text size="18" weight="500" fontColor="mainColor">
                              ???????????? ?????? &nbsp;
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
                <Box01 styles={{ padding: 0, height: "100%" }}>
                  <Link href={`/mypage/user/${String(userId)}/mypick`}>
                    <a>
                      <S.MypageButton>
                        <div>
                          <Text size="28" weight="700">
                            ?????? ??? ????????? ???????????????!
                          </Text>
                        </div>
                        <S.MenuDetail>
                          <Text size="18" weight="300">
                            ?????? ????????? {pickLength}??? ????????????.
                          </Text>
                        </S.MenuDetail>
                      </S.MypageButton>
                    </a>
                  </Link>
                </Box01>
              </S.BoxWrapper>
              <S.BoxWrapper>
                <Box01 styles={{ padding: 0, height: "100%" }}>
                  <Link href={`/mypage/user/${String(userId)}/myreview`}>
                    <a>
                      <S.MypageButton>
                        <div>
                          <Text size="28" weight="700">
                            ?????? ????????? ???????????????!
                          </Text>
                        </div>
                        <S.MenuDetail>
                          <Text size="18" weight="300">
                            ????????? ????????? {reviewLength}??? ????????????.
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
