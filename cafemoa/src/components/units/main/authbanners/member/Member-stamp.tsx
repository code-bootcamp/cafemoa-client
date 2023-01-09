import Slider, { Settings } from "react-slick";
import Box01 from "../../../../commons/box/01/Box01.index";
import Text from "../../../../commons/text/01/Text01.index";
import { TfiStamp } from "react-icons/tfi";
import * as S from "./Member.styles";
import Link from "next/link";
import { GetStamp } from "../../../../../commons/libraries/utill";

const SLIDE_TEST = [
  {
    stamp: 3,
    accstamp: 23,
    cafeInform: {
      brandName: "카페 하나모아",
    },
  },
  {
    stamp: 1,
    accstamp: 42,
    cafeInform: {
      brandName: "카페 두개모아",
    },
  },
  {
    stamp: 22,
    accstamp: 50,
    cafeInform: {
      brandName: "카페 세개모아",
    },
  },
  {
    stamp: 4,
    accstamp: 4,
    cafeInform: {
      brandName: "카페 네개모아",
    },
  },
  {
    stamp: 11,
    accstamp: 11,
    cafeInform: {
      brandName: "카페 다섯개모아",
    },
  },
  {
    stamp: 21,
    accstamp: 21,
    cafeInform: {
      brandName: "카페 여섯모아",
    },
  },
  {
    stamp: 12,
    accstamp: 42,
    cafeInform: {
      brandName: "카페 일곱모아",
    },
  },
  {
    stamp: 54,
    accstamp: 54,
    cafeInform: {
      brandName: "카페 여덟개모아",
    },
  },
  {
    stamp: 42,
    accstamp: 42,
    cafeInform: {
      brandName: "카페 아홉개모아",
    },
  },
  {
    stamp: 17,
    accstamp: 57,
    cafeInform: {
      brandName: "카페 열개모아",
    },
  },
];

const SETTINGS: Settings = {
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  dots: true,
  arrows: false,
  speed: 500,
};

export default function MemberStamp() {
  return (
    <S.SlideWrap>
      <div style={{ textAlign: "right", marginBottom: "8px" }}>
        <Link href="/">
          <a>
            <Text size="14">자세히 보기</Text>
          </a>
        </Link>
      </div>
      <Slider {...SETTINGS}>
        {SLIDE_TEST?.map((el, idx) => (
          <S.SlideItem key={idx}>
            <Box01 styles={{ padding: "16px", display: "flex" }}>
              <S.BoxIconWrap>
                <TfiStamp />
              </S.BoxIconWrap>
              <S.BoxTextWrap>
                <S.CafeName>{el.cafeInform.brandName}</S.CafeName>
                <div>{GetStamp(el.stamp)} / 10</div>
              </S.BoxTextWrap>
            </Box01>
          </S.SlideItem>
        ))}
      </Slider>
    </S.SlideWrap>
  );
}
