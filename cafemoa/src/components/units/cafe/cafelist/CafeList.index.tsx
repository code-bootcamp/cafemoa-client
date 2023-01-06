import HeroWrap from "../../../commons/hero/HeroWrap.index";
import * as S from "./CafeList.styles";
import SlickSlider from "./slider/Slider.index";
import Card02 from "../../../commons/card/02/Card02.index";
import Select01 from "../../../commons/select/01/Select01.index";
import Tag from "../../../commons/text/02/Text02.index";
import Text from "../../../commons/text/01/Text01.index";
import Like01 from "../../../commons/like/01/Like01.index";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { TAG_VALUES } from "../../../../commons/default/default";
import { useFetchCafes } from "../../../commons/hooks/queries/useFetchCafes";

const SELECT_VALUES02 = [
  { label: "서울시", value: "서울" },
  { label: "경기도", value: "경기" },
  { label: "강원도", value: "강원" },
  { label: "충청북도", value: "충북" },
  { label: "충청남도", value: "충남" },
  { label: "전라북도", value: "전북" },
  { label: "전라남도", value: "전남" },
  { label: "경상북도", value: "경북" },
  { label: "경상남도", value: "경남" },
  { label: "제주도", value: "제주도" },
];

export default function CafeList() {
  const [selectTag, setSelectTag] = useState<string[]>([]);
  const [selectValue, setSelectValue] = useState<string | number>("");
  const { data, onRefetchCafes } = useFetchCafes();
  console.log(selectValue);
  // 태그 클릭 버튼
  const onClickTag = (value: string) => () => {
    const tagArr = selectTag;
    const _tempTag = tagArr.filter((el) => el.includes(value));
    if (_tempTag.length === 1) {
      const idx = tagArr.indexOf(value);
      tagArr.splice(idx, 1);
      setSelectTag([...tagArr]);
      onRefetchCafes(selectTag, "");
      return;
    }
    if (tagArr.length >= 3) {
      tagArr.shift();
    }
    tagArr.push(value);
    setSelectTag([...tagArr]);
    onRefetchCafes(selectTag, selectValue);
  };

  return (
    <>
      <HeroWrap
        imageUrl="/images/temp/temp_hero01.png"
        title="카페 모아"
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
            <button key={uuidv4()} onClick={onClickTag(el)}>
              <Tag size="md" isActive={selectTag.includes(el)}>
                {el}
              </Tag>
            </button>
          ))}
        </S.TagsWrap>
        <S.CardsWrapper>
          {data?.fetchCafes.map((el: any) => (
            <S.CardBox key={el.id}>
              <Card02 imageUrl="/images/temp/temp01.png">
                <div>
                  <S.LikeWrapper>
                    <Like01 iconColor="red" fontColor="white" count={el.like} />
                  </S.LikeWrapper>
                  <Text size="20" weight="500">
                    {el.brandName}
                  </Text>
                  <div style={{ paddingTop: "32px" }}>
                    <Text size="16" weight="300">
                      {el.cafeinfo}
                    </Text>
                    <div style={{ paddingTop: "32px" }}>
                      <Tag size="sm">{el.cafeTag[0].tagName}</Tag>
                      <Tag size="sm">{el.cafeTag[1].tagName}</Tag>
                      <Tag size="sm">{el.cafeTag[2].tagName}</Tag>
                    </div>
                  </div>
                </div>
              </Card02>
            </S.CardBox>
          ))}
        </S.CardsWrapper>
      </S.ContainerWrapper>
    </>
  );
}
