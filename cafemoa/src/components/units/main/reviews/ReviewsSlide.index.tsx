import Link from "next/link";
import Text from "../../../commons/text/01/Text01.index";
import { v4 as uuidv4 } from "uuid";
import * as S from "./ReviewsSlide.styles";
import Tag from "../../../commons/text/02/Text02.index";
import Slider, { Settings } from "react-slick";
import Card01 from "../../../commons/card/01/Card01.index";
import Users01 from "../../../commons/user/01/Users01.index";

const SETTINGS: Settings = {
  autoplay: true,
  infinite: true,
  slidesToShow: 3,
  arrows: true,
  speed: 500,
};

const SLIDE_TEST = [
  {
    thumbNail: "/images/temp/temp04.png",
    brandName: "카페명이야~",
    cafeinfo:
      "상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야",
    cafeAddr: "경기도 어디일까? ",
    cafeTag: ["태그", "맞아"],
  },
  {
    thumbNail: "/images/temp/temp03.png",
    brandName: "카페모아",
    cafeinfo:
      "상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야",
    cafeAddr: "경기도 어디일까?ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ ",
    cafeTag: ["태그", "맞아", "카페"],
  },
  {
    thumbNail: "/images/temp/temp01.png",
    brandName: "카페명적기~",
    cafeinfo:
      "상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야",
    cafeAddr:
      "경기도 어디일까? ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅋㅇ륲ㅋㄴ아ㅓ픀ㄴ아ㅓ픀나어퓬카어ㅠㅏㅋㄴ",
    cafeTag: ["태그"],
  },
  {
    thumbNail: "/images/temp/temp02.png",
    brandName: "카페명 너무 길면 어떡해? 두줄처리? 한줄처리?",
    cafeinfo:
      "상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야",
    cafeAddr: "경기도 어디일까? ㄴㅇㅁㄴㅇㅁㄴㅇㅁ",
    cafeTag: ["태그", "맞아"],
  },
  {
    thumbNail: "/images/temp/temp03.png",
    brandName: "10개가 이렇게 많아?",
    cafeinfo:
      "상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야",
    cafeAddr: "경기도 어디일까? ",
    cafeTag: ["태그", "맞아", "스터디"],
  },
  {
    thumbNail: "/images/temp/temp01.png",
    brandName: "카페 그만 적을까~",
    cafeinfo:
      "상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야",
    cafeAddr: "경기도 어디일까? ",
    cafeTag: ["태그"],
  },
  {
    thumbNail: "/images/temp/temp04.png",
    brandName: "이제 6번째인가..?~",
    cafeinfo:
      "상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야",
    cafeAddr: "경기도 어디일까? ",
    cafeTag: ["태그", "맞아"],
  },
  {
    thumbNail: "/images/temp/temp03.png",
    brandName: "이제 얼마 안남았어~",
    cafeinfo:
      "상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야",
    cafeAddr: "경기도 어디일까? ",
    cafeTag: ["태그", "맞아"],
  },
  {
    thumbNail: "/images/temp/temp04.png",
    brandName: "그만그만,,,, 제발~",
    cafeinfo:
      "상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야",
    cafeAddr: "경기도 어디일까? ",
    cafeTag: ["태그", "맞아"],
  },
  {
    thumbNail: "/images/temp/temp02.png",
    brandName: "마지막이야 ~~",
    cafeinfo:
      "상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야상세정보야",
    cafeAddr: "경기도 어디일까? ",
    cafeTag: ["태그", "맞아"],
  },
];

export default function ReviewsSlide() {
  return (
    <S.TodaySlideListsWrap>
      <Slider {...SETTINGS}>
        {SLIDE_TEST.map((el, idx) => (
          <S.SlideItem key={idx}>
            <S.SlideBtn>
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
            </S.SlideBtn>
          </S.SlideItem>
        ))}
      </Slider>
    </S.TodaySlideListsWrap>
  );
}
