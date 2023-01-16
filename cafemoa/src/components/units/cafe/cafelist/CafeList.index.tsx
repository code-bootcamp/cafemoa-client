import HeroWrap from "../../../commons/hero/HeroWrap.index";
import * as S from "./CafeList.styles";
import SlickSlider from "./slider/Slider.index";
import Card02 from "../../../commons/card/02/Card02.index";
import Select01 from "../../../commons/select/01/Select01.index";
import Tag from "../../../commons/text/02/Text02.index";
import Text from "../../../commons/text/01/Text01.index";
import Like01 from "../../../commons/like/01/Like01.index";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useRef, useState } from "react";
import { TAG_VALUES } from "../../../../commons/default/default";
import { useFetchCafes } from "../../../commons/hooks/queries/useFetchCafes";
import Link from "next/link";
import Masonry from "react-masonry-component";
import { useRouter } from "next/router";
import InfiniteScrollWrap from "../../../commons/infiniteScroll/01/InfiniteScroll.index";

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

export default function CafeList() {
  const router = useRouter();
  const [selectTag, setSelectTag] = useState<string[]>([]);
  const [selectValue, setSelectValue] = useState<string | number>("");
  const { data, onRefetchCafes, onSelectLocation, onHandleMore } =
    useFetchCafes();
  const tagBtnRef = useRef<HTMLButtonElement>(null);

  // console.log(selectValue);
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
    onSelectLocation(String(selectValue));
    onRefetchCafes(selectTag);
  }, [selectValue, selectTag]);

  useEffect(() => {
    if (router.query?.tag === undefined || tagBtnRef === null) return;
    const tagBtn = tagBtnRef?.current;
    if (tagBtn !== null) {
      tagBtn.focus();
      tagBtn.click();
    }
  }, [router.query?.tag]);

  // const onClickMoveToDetail = (event: MouseEvent<HTMLDivElement>) => {
  //   void router.push(`/cafe/${event.currentTarget.id}`);
  // };
  return (
    <>
      <HeroWrap
        imageUrl="/images/temp/temp_hero01.png"
        title="카페모아"
        subject="카페를 한눈에 보기 쉽게 모아!"
      ></HeroWrap>
      <S.SliderWrapper>
        <SlickSlider />
      </S.SliderWrapper>
      <S.ContainerWrapper>
        <S.FilterWrapper>
          <Select01
            defaultText="지역"
            selectValue={SELECT_VALUES02}
            setSelectValue={setSelectValue}
          ></Select01>
        </S.FilterWrapper>
        <S.TagsWrap style={{ marginBottom: "40px" }}>
          {TAG_VALUES.map((el) => (
            <button
              key={uuidv4()}
              onClick={onClickTag(el)}
              ref={el === router.query?.tag ? tagBtnRef : null}
            >
              <Tag size="md" isActive={selectTag.includes(el)}>
                {el}
              </Tag>
            </button>
          ))}
        </S.TagsWrap>
        <S.CardsWrapper>
          <InfiniteScrollWrap onHandleMore={onHandleMore}>
            <Masonry>
              {data?.fetchCafes.map((el) => (
                <S.CardBox id={el.id} key={el.id}>
                  <Link href={`/cafe/${String(el.id)}`}>
                    <a>
                      {/* <S.CardBox id={el.id} key={el.id} onClick={onClickMoveToDetail}> */}
                      <Card02
                        imageUrl={`https://storage.googleapis.com/${el.cafeImage[0].cafe_image}`}
                      >
                        <div>
                          <S.LikeWrapper>
                            <Like01
                              iconColor="red"
                              fontColor="white"
                              count={el.like}
                            />
                          </S.LikeWrapper>
                          <Text size="20" weight="500">
                            {el.owner.brandName}
                          </Text>
                          <div style={{ paddingTop: "8px" }}>
                            <Text size="16" weight="300">
                              {el.cafeinfo}
                            </Text>
                            <S.DetailTagWrap>
                              {el.cafeTag?.map((el) => (
                                <Tag key={uuidv4()} size="sm">
                                  {el.tagName}
                                </Tag>
                              ))}
                            </S.DetailTagWrap>
                          </div>
                        </div>
                      </Card02>
                    </a>
                  </Link>
                </S.CardBox>
              ))}
              {/* {data?.fetchCafes !== undefined &&
                new Array(data?.fetchCafes?.length % 4)
                  .fill("blank")
                  .map((el) => (
                    <li
                      style={{ width: "25%", minHeight: "400px" }}
                      key={uuidv4()}
                    ></li>
                  ))} */}
            </Masonry>
          </InfiniteScrollWrap>
        </S.CardsWrapper>
      </S.ContainerWrapper>
    </>
  );
}
