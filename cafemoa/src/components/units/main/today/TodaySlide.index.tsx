import Link from "next/link";
import Text from "../../../commons/text/01/Text01.index";
import { v4 as uuidv4 } from "uuid";
import * as S from "./TodaySlide.styles";
import Tag from "../../../commons/text/02/Text02.index";
import Slider, { Settings } from "react-slick";
import { useEffect, useRef, useState } from "react";

const NAV_SETTINGS: Settings = {
  autoplay: true,
  infinite: true,
  slidesToShow: 2,
  arrows: false,
  speed: 500,
  variableWidth: true,
};

const VIEW_SETTINGS: Settings = {
  infinite: true,
  arrows: false,
  speed: 500,
  fade: true,
  draggable: false,
  adaptiveHeight: true,
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

export default function TodaySlide() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current ?? undefined);
    setNav2(slider2.current ?? undefined);
  }, []);

  return (
    <S.TodaySlideWrap>
      <S.TodaySlideInfoWrap>
        <Slider {...VIEW_SETTINGS} asNavFor={nav2} ref={slider1}>
          {SLIDE_TEST.map((el, idx) => (
            <Link href="/" key={uuidv4()}>
              <a>
                <S.ImageWrap>
                  <img src={el.thumbNail} />
                </S.ImageWrap>
                <S.InfoWrap>
                  <div>
                    <Text size="32" fontColor="white" weight="700">
                      {el.brandName}
                    </Text>
                  </div>
                  <S.InfoContents>
                    <Text size="16" fontColor="white" weight="500">
                      {el.cafeinfo}
                    </Text>
                  </S.InfoContents>
                  <div>
                    <Text size="16" fontColor="white" weight="500">
                      {el.cafeAddr}
                    </Text>
                  </div>
                  <div>
                    {el.cafeTag.map((cur, idx) => (
                      <Tag key={idx + "asdwd"} size="sm">
                        {cur}
                      </Tag>
                    ))}
                  </div>
                </S.InfoWrap>
              </a>
            </Link>
          ))}
        </Slider>
      </S.TodaySlideInfoWrap>
      <S.TodaySlideListsWrap>
        <Slider {...NAV_SETTINGS} asNavFor={nav1} ref={slider2}>
          {SLIDE_TEST.map((el, idx) => (
            <S.SlideItem key={idx}>
              <S.SlideBtn>
                <S.ImageWrap>
                  <img src={el.thumbNail} />
                </S.ImageWrap>
                <div>
                  <Text size="14" fontColor="white">
                    {el.brandName}
                  </Text>
                </div>
              </S.SlideBtn>
            </S.SlideItem>
          ))}
        </Slider>
      </S.TodaySlideListsWrap>
    </S.TodaySlideWrap>
  );
}
