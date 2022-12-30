import HeroWrap from "../../commons/hero/HeroWrap.index";
import * as S from "./CafeList.styles";
import SlickSlider from "../slider/Slider.index";
import Card02 from "../../commons/card/02/Card02.index";
import Select01 from "../../commons/select/01/Select01.index";
import Tag from "../../commons/text/02/Text02.index";
import Text from "../../commons/text/01/Text01.index";
import Like01 from "../../commons/like/01/Like01.index";

export default function CafeList() {
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
          <Select01 defaultText="지역" selectValue={SELECT_VALUES02}></Select01>
        </S.FilterWrapper>
        <S.TagsWrapper>
          {" "}
          {/*map으로 코드 간소화 예정*/}
          <span>
            <Tag size="md">태그</Tag>
          </span>
          <span style={{ marginLeft: "2%" }}>
            <Tag size="md">태그</Tag>
          </span>
          <span style={{ marginLeft: "2%" }}>
            <Tag size="md">태그</Tag>
          </span>
          <span style={{ marginLeft: "2%" }}>
            <Tag size="md">태그</Tag>
          </span>
          <span style={{ marginLeft: "2%" }}>
            <Tag size="md">태그</Tag>
          </span>
          <span style={{ marginLeft: "2%" }}>
            <Tag size="md">태그</Tag>
          </span>
          <span style={{ marginLeft: "2%" }}>
            <Tag size="md">태그</Tag>
          </span>
          <span style={{ marginLeft: "2%" }}>
            <Tag size="md">태그</Tag>
          </span>
          <span style={{ marginLeft: "2%" }}>
            <Tag size="md">태그</Tag>
          </span>
          <span style={{ marginLeft: "2%" }}>
            <Tag size="md">태그</Tag>
          </span>
          <span style={{ marginLeft: "2%" }}>
            <Tag size="md">태그</Tag>
          </span>
          <span style={{ marginLeft: "2%" }}>
            <Tag size="md">태그</Tag>
          </span>
        </S.TagsWrapper>
        <S.CardsWrapper>
          {" "}
          {/*map으로 코드 간소화 예정 */}
          <S.CardBox>
            <Card02 imageUrl="/images/temp/temp01.png">
              <div>
                <S.LikeWrapper>
                  <Like01 iconColor="red" fontColor="white" count={22} />
                </S.LikeWrapper>
                <Text size="24" weight="500">
                  카페명
                </Text>
                <div style={{ marginTop: "8%" }}>
                  <Text size="16" weight="300">
                    카페소개 카페소개 카페소개 카페소개 카페소개 카페소개
                    카페소개 카페소개
                  </Text>
                  <div style={{ marginTop: "7%" }}>
                    <Tag size="sm">태그</Tag>
                    <Tag size="sm">태그</Tag>
                    <Tag size="sm">태그</Tag>
                  </div>
                </div>
              </div>
            </Card02>
          </S.CardBox>
          <S.CardBox>
            <Card02 imageUrl="/images/temp/temp01.png">
              <div>
                <S.LikeWrapper>
                  <Like01 iconColor="red" fontColor="white" count={22} />
                </S.LikeWrapper>
                <Text size="24" weight="500">
                  카페명
                </Text>
                <div style={{ marginTop: "8%" }}>
                  <Text size="16" weight="300">
                    카페소개 카페소개 카페소개 카페소개 카페소개 카페소개
                    카페소개 카페소개
                  </Text>
                  <div style={{ marginTop: "7%" }}>
                    <Tag size="sm">태그</Tag>
                    <Tag size="sm">태그</Tag>
                    <Tag size="sm">태그</Tag>
                  </div>
                </div>
              </div>
            </Card02>
          </S.CardBox>
          <S.CardBox>
            <Card02 imageUrl="/images/temp/temp01.png">
              <div>
                <S.LikeWrapper>
                  <Like01 iconColor="red" fontColor="white" count={22} />
                </S.LikeWrapper>
                <Text size="24" weight="500">
                  카페명
                </Text>
                <div style={{ marginTop: "8%" }}>
                  <Text size="16" weight="300">
                    카페소개 카페소개 카페소개 카페소개 카페소개 카페소개
                    카페소개 카페소개
                  </Text>
                  <div style={{ marginTop: "7%" }}>
                    <Tag size="sm">태그</Tag>
                    <Tag size="sm">태그</Tag>
                    <Tag size="sm">태그</Tag>
                  </div>
                </div>
              </div>
            </Card02>
          </S.CardBox>
          <S.CardBox>
            <Card02 imageUrl="/images/temp/temp01.png">
              <div>
                <S.LikeWrapper>
                  <Like01 iconColor="red" fontColor="white" count={22} />
                </S.LikeWrapper>
                <Text size="24" weight="500">
                  카페명
                </Text>
                <div style={{ marginTop: "8%" }}>
                  <Text size="16" weight="300">
                    카페소개 카페소개 카페소개 카페소개 카페소개 카페소개
                    카페소개 카페소개
                  </Text>
                  <div style={{ marginTop: "7%" }}>
                    <Tag size="sm">태그</Tag>
                    <Tag size="sm">태그</Tag>
                    <Tag size="sm">태그</Tag>
                  </div>
                </div>
              </div>
            </Card02>
          </S.CardBox>
          <S.CardBox>
            <Card02 imageUrl="/images/temp/temp01.png">
              <div>
                <S.LikeWrapper>
                  <Like01 iconColor="red" fontColor="white" count={22} />
                </S.LikeWrapper>
                <Text size="24" weight="500">
                  카페명
                </Text>
                <div style={{ marginTop: "8%" }}>
                  <Text size="16" weight="300">
                    카페소개 카페소개 카페소개 카페소개 카페소개 카페소개
                    카페소개 카페소개
                  </Text>
                  <div style={{ marginTop: "7%" }}>
                    <Tag size="sm">태그</Tag>
                    <Tag size="sm">태그</Tag>
                    <Tag size="sm">태그</Tag>
                  </div>
                </div>
              </div>
            </Card02>
          </S.CardBox>
          <S.CardBox>
            <Card02 imageUrl="/images/temp/temp01.png">
              <div>
                <S.LikeWrapper>
                  <Like01 iconColor="red" fontColor="white" count={22} />
                </S.LikeWrapper>
                <Text size="24" weight="500">
                  카페명
                </Text>
                <div style={{ marginTop: "8%" }}>
                  <Text size="16" weight="300">
                    카페소개 카페소개 카페소개 카페소개 카페소개 카페소개
                    카페소개 카페소개
                  </Text>
                  <div style={{ marginTop: "7%" }}>
                    <Tag size="sm">태그</Tag>
                    <Tag size="sm">태그</Tag>
                    <Tag size="sm">태그</Tag>
                  </div>
                </div>
              </div>
            </Card02>
          </S.CardBox>
        </S.CardsWrapper>
      </S.ContainerWrapper>
    </>
  );
}
