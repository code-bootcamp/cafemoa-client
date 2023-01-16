import { Image } from "antd";
import { useRouter } from "next/router";
import { GetDate } from "../../../../../commons/libraries/utill";
import Box01 from "../../../../commons/box/01/Box01.index";
import HeroWrap from "../../../../commons/hero/HeroWrap.index";
import { useFetchUserComments } from "../../../../commons/hooks/queries/useFetchUserComments";
import MypageSidebarLayout from "../../../../commons/layout/mypage/user/MypageSidebar.index";
import SidebarMenuLayout from "../../../../commons/layout/mypage/user/sidebarMenu/SidebarMenu.index";
import Like01 from "../../../../commons/like/01/Like01.index";
import Text from "../../../../commons/text/01/Text01.index";
import * as S from "./MyReview.styles";

export default function MyReview() {
  const router = useRouter();
  const { data } = useFetchUserComments();
  console.log(data);

  return (
    <>
      <HeroWrap
        imageUrl="/images/review/review_hero01.png"
        title="마이모아"
        subject="내 정보를 한눈에 보기 쉽게 모아!"
      ></HeroWrap>
      <S.ContainerWrapper>
        <div>
          <MypageSidebarLayout>
            <SidebarMenuLayout asPath={router.asPath} />
          </MypageSidebarLayout>
        </div>
        <S.Container>
          <S.TitleWrapper>
            <Text size="32" weight="500">
              내가 남긴 리뷰를 모아보세요!
            </Text>
          </S.TitleWrapper>
          <div>
            {data?.fetchUserComments.map((el) => (
              <S.ReviewContentWrapper key={el.id}>
                <Box01>
                  <div>
                    <S.ReviewInfoWrapper>
                      <S.ReviewInfoHead>
                        <S.CafeName>
                          <Text size="20" weight="500" fontColor="subColor01">
                            {el.cafeinfo.owner.brandName}
                          </Text>
                        </S.CafeName>
                      </S.ReviewInfoHead>
                      <S.LikeCount>
                        <Like01 iconColor="black" count={el.cafeinfo.like} />
                      </S.LikeCount>
                    </S.ReviewInfoWrapper>
                    <S.ReviewImagesWrap>
                      {el.commentImage.map((el) => (
                        <Image
                          key={el.id}
                          src={`https://storage.googleapis.com/${el.image_url}`}
                        />
                      ))}
                    </S.ReviewImagesWrap>
                    <S.Review>
                      <Text size="18" weight="300">
                        {el.reply}
                      </Text>
                    </S.Review>
                    <S.DateWrap>
                      <Text size="14" weight="300" fontColor="gray">
                        {GetDate(el.time)}
                      </Text>
                    </S.DateWrap>
                  </div>
                </Box01>
              </S.ReviewContentWrapper>
            ))}
          </div>
        </S.Container>
      </S.ContainerWrapper>
    </>
  );
}
