import Card01 from "../../commons/card/01/Card01.index";
import HeroWrap from "../../commons/hero/HeroWrap.index";
import Tag from "../../commons/text/02/Text02.index";
import * as S from "./Review.styles";
import Users01 from "../../commons/user/01/Users01.index";
import Text from "../../commons/text/01/Text01.index";
import Masonry from "react-masonry-component";

export default function ReviewList() {
  return (
    <>
      <HeroWrap
        imageUrl="/images/review/review_hero01.png"
        title="리뷰모아"
        subject="리뷰를 한눈에 보기 쉽게 모아"
      ></HeroWrap>
      <S.ContainerWrapper>
        <S.Container>
          <S.TagWrapper>
            <Tag size="md">태그</Tag>
            <Tag size="md">태그</Tag>
            <Tag size="md">태그</Tag>
            <Tag size="md">태그</Tag>
            <Tag size="md">태그</Tag>
            <Tag size="md">태그</Tag>
            <Tag size="md">태그</Tag>
            <Tag size="md">태그</Tag>
          </S.TagWrapper>
          <S.UL>
            <S.LI>
              <Card01 imageUrl="/images/temp/temp01.png">
                <div>
                  <Users01
                    image="/images/review/review_profile01.png"
                    name="김덕배"
                    size="sm"
                  />
                  <S.CafeName>
                    <Text size="24" weight="500">
                      카페모아
                    </Text>
                  </S.CafeName>
                  <S.ReviewContent>
                    <Text size="16" weight="300">
                      정말 너무 마쉰는 디저트네용 제가 한쿡와서 먹어본 것 중
                      가장 맛이쒀요 정말 너무 마쉰는 디저트네용 제가 한쿡와서
                      먹어본 것 중 가장 맛이쒀요 최고에요 싸랑해여 연예가중계
                    </Text>
                  </S.ReviewContent>
                  <S.ReviewTag>
                    <div>
                      <Tag size="sm">태그</Tag>
                      <Tag size="sm">태그</Tag>
                    </div>
                    <S.ReviewDate>
                      <Text size="14" weight="300" fontColor="gray">
                        3일 전
                      </Text>
                    </S.ReviewDate>
                  </S.ReviewTag>
                </div>
              </Card01>
            </S.LI>
            <S.LI>
              <Card01 imageUrl="/images/temp/temp01.png">
                <div>
                  <Users01
                    image="/images/review/review_profile02.png"
                    name="원두학살자"
                    size="sm"
                  />
                  <S.CafeName>
                    <Text size="24" weight="500">
                      카페모아
                    </Text>
                  </S.CafeName>
                  <S.ReviewContent>
                    <Text size="16" weight="300">
                      일산에 갈 때마다 방문하는 카페인데 사장님도 너무
                      친절하시고 커피 맛도 최고에요! 일산에 방문하는 모든 사람들
                      이 카페 꼭 가보세요
                      강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추
                      강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추
                      강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추
                      강추강강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추
                      강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추
                      강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추
                      강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추
                      강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추
                      강추강추강추강추강추강추강추강추강추강추강추강추강추강추추강추강추강추강추
                    </Text>
                  </S.ReviewContent>
                  <S.ReviewTag>
                    <div>
                      <Tag size="sm">태그</Tag>
                      <Tag size="sm">태그</Tag>
                      <Tag size="sm">태그</Tag>
                    </div>
                    <S.ReviewDate>
                      <Text size="14" weight="300" fontColor="gray">
                        6일 전
                      </Text>
                    </S.ReviewDate>
                  </S.ReviewTag>
                </div>
              </Card01>
            </S.LI>
            <S.LI>
              <Card01 imageUrl="/images/temp/temp01.png">
                <div>
                  <Users01
                    image="/images/review/review_profile03.png"
                    name="진쓰 월클인디"
                    size="sm"
                  />
                  <S.CafeName>
                    <Text size="24" weight="500">
                      카페모아
                    </Text>
                  </S.CafeName>
                  <S.ReviewContent>
                    <Text size="16" weight="300">
                      정말 너무 마쉰는 디저트네용 제가 한쿡와서 먹어본 것 중
                      가장 맛이쒀요 정말 너무 마쉰는 디저트네용 제가 한쿡와서
                      먹어본 것 중 가장 맛이쒀요 최고에요 싸랑해여 연예가중계
                    </Text>
                  </S.ReviewContent>
                  <S.ReviewTag>
                    <div>
                      <Tag size="sm">태그</Tag>
                      <Tag size="sm">태그</Tag>
                    </div>
                    <S.ReviewDate>
                      <Text size="14" weight="300" fontColor="gray">
                        3일 전
                      </Text>
                    </S.ReviewDate>
                  </S.ReviewTag>
                </div>
              </Card01>
            </S.LI>
            <S.LI>
              <Card01 imageUrl="/images/temp/temp01.png">
                <div>
                  <Users01
                    image="/images/review/review_profile02.png"
                    name="원두학살자"
                    size="sm"
                  />
                  <S.CafeName>
                    <Text size="24" weight="500">
                      카페모아
                    </Text>
                  </S.CafeName>
                  <S.ReviewContent>
                    <Text size="16" weight="300">
                      일산에 갈 때마다 방문하는 카페인데 사장님도 너무
                      친절하시고 커피 맛도 최고에요! 일산에 방문하는 모든 사람들
                      이 카페 꼭 가보세요
                      강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추
                      강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추
                      강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추
                      강추강강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추
                      강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추
                      강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추
                      강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추
                      강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추강추
                      강추강추강추강추강추강추강추강추강추강추강추강추강추강추추강추강추강추강추
                    </Text>
                  </S.ReviewContent>
                  <S.ReviewTag>
                    <div>
                      <Tag size="sm">태그</Tag>
                      <Tag size="sm">태그</Tag>
                      <Tag size="sm">태그</Tag>
                    </div>
                    <S.ReviewDate>
                      <Text size="14" weight="300" fontColor="gray">
                        6일 전
                      </Text>
                    </S.ReviewDate>
                  </S.ReviewTag>
                </div>
              </Card01>
            </S.LI>
          </S.UL>
        </S.Container>
      </S.ContainerWrapper>
    </>
  );
}
