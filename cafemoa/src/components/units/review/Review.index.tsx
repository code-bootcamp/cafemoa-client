import Card01 from "../../commons/card/01/Card01.index";
import HeroWrap from "../../commons/hero/HeroWrap.index";
import Tag from "../../commons/text/02/Text02.index";
import * as S from "./Review.styles";
import Users01 from "../../commons/user/01/Users01.index";
import Text from "../../commons/text/01/Text01.index";
import { v4 as uuidv4 } from "uuid";
import { TAG_VALUES } from "../../../commons/default/default";
import { useEffect, useState } from "react";
import { useFetchCommentsAll } from "../../commons/hooks/queries/useFetchCommentsAll";
import Select01 from "../../commons/select/01/Select01.index";
import Link from "next/link";
import Masonry from "react-masonry-component";
import { GetDate } from "../../../commons/libraries/utill";

const SELECT_VALUES02 = [
  { label: "전체", value: "" },
  { label: "서울특별시", value: "서울" },
  { label: "경기도", value: "경기" },
  { label: "강원도", value: "강원" },
  { label: "충청북도", value: "충북" },
  { label: "충청남도", value: "충남" },
  { label: "전라북도", value: "전북" },
  { label: "전라남도", value: "전남" },
  { label: "경상북도", value: "경북" },
  { label: "경상남도", value: "경남" },
  { label: "광주광역시", value: "광주" },
  { label: "대구광역시", value: "대구" },
  { label: "대전광역시", value: "대전" },
  { label: "부산광역시", value: "부산" },
  { label: "세종특별자치시", value: "세종" },
  { label: "울산광역시", value: "울산" },
  { label: "인천광역시", value: "인천" },
  { label: "제주도", value: "제주도" },
];

export default function ReviewList() {
  const [selectTag, setSelectTag] = useState<string[]>([]);
  const [selectValue, setSelectValue] = useState<string | number>("");
  const { data, onRefetchComments, onSelectLocation } = useFetchCommentsAll();
  // 태그 클릭 버튼
  const onClickTag = (value: string) => () => {
    const tagArr = selectTag;
    const _tempTag = tagArr.filter((el) => el.includes(value));
    if (_tempTag.length === 1) {
      const idx = tagArr.indexOf(value);
      tagArr.splice(idx, 1);
      setSelectTag([...tagArr]);
      return;
    }
    if (tagArr.length >= 3) {
      tagArr.shift();
    }
    tagArr.push(value);
    setSelectTag([...tagArr]);
  };

  useEffect(() => {
    onSelectLocation(selectValue);
    onRefetchComments(selectTag);
  }, [selectValue, selectTag]);
  console.log(data?.fetchCommentsAll);
  return (
    <>
      <HeroWrap
        imageUrl="/images/review/review_hero01.png"
        title="리뷰모아"
        subject="리뷰를 한눈에 보기 쉽게 모아"
      ></HeroWrap>
      <S.ContainerWrapper>
        <S.FilterWrapper>
          <Select01
            defaultText="지역"
            selectValue={SELECT_VALUES02}
            setSelectValue={setSelectValue}
          ></Select01>
        </S.FilterWrapper>
        <S.Container>
          <S.TagWrapper style={{ marginBottom: "40px" }}>
            {TAG_VALUES.map((el) => (
              <button key={uuidv4()} onClick={onClickTag(el)}>
                <Tag size="md" isActive={selectTag.includes(el)}>
                  {el}
                </Tag>
              </button>
            ))}
          </S.TagWrapper>
          <S.ReviewListsWrap>
            <Masonry>
              {data?.fetchCommentsAll.map((el: any) => (
                <S.ReviewList key={el.id}>
                  <Link href={`/cafe/${String(el.id)}`}>
                    <a>
                      <Card01 imageUrl="/images/temp/temp01.png">
                        <div>
                          <S.UserWrapper>
                            <Users01
                              image="/images/review/review_profile01.png"
                              name={el.user.nickname}
                              size="sm"
                            />
                          </S.UserWrapper>
                          <S.CafeName>
                            <Text size="24" weight="500">
                              {el.cafeinfo.owner.brandName}
                            </Text>
                          </S.CafeName>
                          <S.ReviewContent>
                            <Text size="16" weight="300">
                              {el.reply}
                            </Text>
                          </S.ReviewContent>
                          <S.ReviewTag>
                            {el.cafeinfo.cafeTag.map((el, idx) => (
                              <Tag key={idx} size="sm">
                                {el.tagName}
                              </Tag>
                            ))}
                          </S.ReviewTag>
                          <S.ReviewDate>
                            <Text size="14" weight="300" fontColor="gray">
                              {GetDate(el.time)}
                            </Text>
                          </S.ReviewDate>
                        </div>
                      </Card01>
                    </a>
                  </Link>
                </S.ReviewList>
              ))}
            </Masonry>
            {/* <S.ReviewList>
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
            </S.ReviewList>
            <S.ReviewList>
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
            </S.ReviewList>
            <S.ReviewList>
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
            </S.ReviewList> */}
          </S.ReviewListsWrap>
        </S.Container>
      </S.ContainerWrapper>
    </>
  );
}
