// import { useInterval } from "../../commons/hooks/customs/useInterval";
import Link from "next/link";
import Text from "../../commons/text/01/Text01.index";
import { MAIN_CATEGORY } from "./Main.category";
import { v4 as uuidv4 } from "uuid";
import * as S from "./Main.styles";
import Card01 from "../../commons/card/01/Card01.index";
import Users01 from "../../commons/user/01/Users01.index";
import Tag from "../../commons/text/02/Text02.index";
import TodaySlide from "./today/TodaySlide.index";
import { useState } from "react";
import { useInterval } from "../../commons/hooks/customs/useInterval";

export default function Main() {
  const [imageNum, setImageNum] = useState(1);
  useInterval(() => {
    // console.log(aaa);
    if (imageNum === 1) {
      setImageNum((prev) => prev + 1);
    } else {
      setImageNum((prev) => prev - 1);
    }
  }, 5000);
  return (
    <>
      <S.MainVisual>
        <S.VisualImage imageNum={imageNum} />
        <S.VisualText>
          <Text size="54" weight="700" fontColor="white">
            쿠폰을 모두 모아
            <br />
            카페 모아
          </Text>
        </S.VisualText>
      </S.MainVisual>
      <S.MainSection></S.MainSection>

      {/* 태그를 모아 */}
      <S.MainSection>
        <S.MainSectionInner>
          <Text size="32" weight="700">
            태그로 카페를 모아
          </Text>
          <S.CategoryWrap>
            {MAIN_CATEGORY.map((el) => (
              <S.Category imageUrl={el.imageUrl} key={uuidv4()}>
                <Link href="/">
                  <a>
                    <Text size="24" fontColor="white" weight="700">
                      {el.label}
                    </Text>
                  </a>
                </Link>
              </S.Category>
            ))}
          </S.CategoryWrap>
        </S.MainSectionInner>
      </S.MainSection>

      {/* 오늘의 카페 모아 */}
      <S.MainSection>
        <S.TodayCafeWrap>
          <S.MainSectionInner>
            <Text size="32" weight="700" fontColor="white">
              오늘의 카페를 모아
            </Text>
            <div>
              <TodaySlide />
            </div>
          </S.MainSectionInner>
        </S.TodayCafeWrap>
      </S.MainSection>

      {/* 리뷰를 모아 */}
      <S.MainSection>
        <S.MainSectionInner>
          <Text size="32" weight="700">
            카페의 리뷰 모아
          </Text>
          <S.ReviewListsWrap>
            <S.ReviewList>
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
            </S.ReviewList>
            <S.ReviewList>
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
            </S.ReviewList>
            <S.ReviewList>
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
            </S.ReviewList>
          </S.ReviewListsWrap>
        </S.MainSectionInner>
      </S.MainSection>
    </>
  );
}
