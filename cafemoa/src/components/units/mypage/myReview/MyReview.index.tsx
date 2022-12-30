import Box01 from "../../../common/box/01/Box01.index";
import HeroWrap from "../../../common/hero/HeroWrap.index";
import Like01 from "../../../common/like/01/Like01.index";
import Text from "../../../common/text/01/Text01.index";
import * as S from "./MyReview.styles";

export default function MyReview() {
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
            <Text size="36" weight="500">
              내가 남긴 리뷰를 모아보세요!
            </Text>
          </S.TitleWrapper>
          <div>
            <S.ReviewContentWrapper>
              <Box01 styles={{ padding: "50px 20px" }}>
                <div>
                  <S.ReviewInfoWrapper>
                    <S.ReviewInfoHead>
                      <S.CafeName>
                        <Text size="20" weight="500" fontColor="brown">
                          카페모아 구로디지털점
                        </Text>
                      </S.CafeName>
                      <div>
                        <Text size="18" weight="300" fontColor="gray">
                          2022.12.27
                        </Text>
                      </div>
                    </S.ReviewInfoHead>
                    <S.LikeCount>
                      <Like01 iconColor="black" count={22} />
                    </S.LikeCount>
                  </S.ReviewInfoWrapper>
                  <S.Review>
                    <Text size="24" weight="300">
                      댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글
                    </Text>
                  </S.Review>
                </div>
              </Box01>
            </S.ReviewContentWrapper>
            <S.ReviewContentWrapper>
              <Box01 styles={{ padding: "50px 20px" }}>
                <div>
                  <S.ReviewInfoWrapper>
                    <S.ReviewInfoHead>
                      <S.CafeName>
                        <Text size="20" weight="500" fontColor="brown">
                          카페모아 구로디지털점
                        </Text>
                      </S.CafeName>
                      <div>
                        <Text size="18" weight="300" fontColor="gray">
                          2022.12.27
                        </Text>
                      </div>
                    </S.ReviewInfoHead>
                    <S.LikeCount>
                      <Like01 iconColor="black" count={22} />
                    </S.LikeCount>
                  </S.ReviewInfoWrapper>
                  <S.Review>
                    <Text size="24" weight="300">
                      댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글
                    </Text>
                  </S.Review>
                </div>
              </Box01>
            </S.ReviewContentWrapper>
            <S.ReviewContentWrapper>
              <Box01 styles={{ padding: "50px 20px" }}>
                <div>
                  <S.ReviewInfoWrapper>
                    <S.ReviewInfoHead>
                      <S.CafeName>
                        <Text size="20" weight="500" fontColor="brown">
                          카페모아 구로디지털점
                        </Text>
                      </S.CafeName>
                      <div>
                        <Text size="18" weight="300" fontColor="gray">
                          2022.12.27
                        </Text>
                      </div>
                    </S.ReviewInfoHead>
                    <S.LikeCount>
                      <Like01 iconColor="black" count={22} />
                    </S.LikeCount>
                  </S.ReviewInfoWrapper>
                  <S.Review>
                    <Text size="24" weight="300">
                      댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글
                    </Text>
                  </S.Review>
                </div>
              </Box01>
            </S.ReviewContentWrapper>
            <S.ReviewContentWrapper>
              <Box01 styles={{ padding: "50px 20px" }}>
                <div>
                  <S.ReviewInfoWrapper>
                    <S.ReviewInfoHead>
                      <S.CafeName>
                        <Text size="20" weight="500" fontColor="brown">
                          카페모아 구로디지털점
                        </Text>
                      </S.CafeName>
                      <div>
                        <Text size="18" weight="300" fontColor="gray">
                          2022.12.27
                        </Text>
                      </div>
                    </S.ReviewInfoHead>
                    <S.LikeCount>
                      <Like01 iconColor="black" count={22} />
                    </S.LikeCount>
                  </S.ReviewInfoWrapper>
                  <S.Review>
                    <Text size="24" weight="300">
                      리뷰리뷰리뷰리뷰우우우우우우우우우우우우리뷰리뷰리뷰리뷰우우우우우우우우우우우우리뷰리뷰리뷰리뷰우우우우우우우우우우우우리뷰리뷰리뷰리뷰우우우우우우우우우우우우리뷰리뷰리뷰리뷰우우우우우우우우우우우우리뷰리뷰리뷰리뷰우우우우우우우우우우우우리뷰리뷰리뷰리뷰우우우우우우우우우우우우리뷰리뷰리뷰리뷰우우우우우우우우우우우우리뷰리뷰리뷰리뷰우우우우우우우우우우우우
                    </Text>
                  </S.Review>
                </div>
              </Box01>
            </S.ReviewContentWrapper>
          </div>
        </S.Container>
      </S.ContainerWrapper>
    </>
  );
}
