import Box01 from "../../../../commons/box/01/Box01.index";
import HeroWrap from "../../../../commons/hero/HeroWrap.index";
import Like01 from "../../../../commons/like/01/Like01.index";
import Text from "../../../../commons/text/01/Text01.index";
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
            <Text size="32" weight="500">
              내가 남긴 리뷰를 모아보세요!
            </Text>
          </S.TitleWrapper>
          <div>
            <S.ReviewContentWrapper>
              <Box01>
                <div>
                  <S.ReviewInfoWrapper>
                    <S.ReviewInfoHead>
                      <S.CafeName>
                        <Text size="20" weight="500" fontColor="subColor01">
                          카페모아 구로디지털점
                        </Text>
                      </S.CafeName>
                    </S.ReviewInfoHead>
                    <S.LikeCount>
                      <Like01 iconColor="black" count={22} />
                    </S.LikeCount>
                  </S.ReviewInfoWrapper>
                  <S.Review>
                    <Text size="18" weight="300">
                      댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글
                    </Text>
                  </S.Review>
                  <S.DateWrap>
                    <Text size="14" weight="300" fontColor="gray">
                      2022.12.27
                    </Text>
                  </S.DateWrap>
                </div>
              </Box01>
            </S.ReviewContentWrapper>

            <S.ReviewContentWrapper>
              <Box01>
                <div>
                  <S.ReviewInfoWrapper>
                    <S.ReviewInfoHead>
                      <S.CafeName>
                        <Text size="20" weight="500" fontColor="subColor01">
                          카페모아 구로디지털점
                        </Text>
                      </S.CafeName>
                    </S.ReviewInfoHead>
                    <S.LikeCount>
                      <Like01 iconColor="black" count={22} />
                    </S.LikeCount>
                  </S.ReviewInfoWrapper>
                  <S.Review>
                    <Text size="18" weight="300">
                      댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글
                    </Text>
                  </S.Review>
                  <S.DateWrap>
                    <Text size="14" weight="300" fontColor="gray">
                      2022.12.27
                    </Text>
                  </S.DateWrap>
                </div>
              </Box01>
            </S.ReviewContentWrapper>

            <S.ReviewContentWrapper>
              <Box01>
                <div>
                  <S.ReviewInfoWrapper>
                    <S.ReviewInfoHead>
                      <S.CafeName>
                        <Text size="20" weight="500" fontColor="subColor01">
                          카페모아 구로디지털점
                        </Text>
                      </S.CafeName>
                    </S.ReviewInfoHead>
                    <S.LikeCount>
                      <Like01 iconColor="black" count={22} />
                    </S.LikeCount>
                  </S.ReviewInfoWrapper>
                  <S.Review>
                    <Text size="18" weight="300">
                      댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글
                    </Text>
                  </S.Review>
                  <S.DateWrap>
                    <Text size="14" weight="300" fontColor="gray">
                      2022.12.27
                    </Text>
                  </S.DateWrap>
                </div>
              </Box01>
            </S.ReviewContentWrapper>
          </div>
        </S.Container>
      </S.ContainerWrapper>
    </>
  );
}
