import Slider, { Settings } from "react-slick";
import Box01 from "../../../../commons/box/01/Box01.index";
import Text from "../../../../commons/text/01/Text01.index";
import * as S from "./Member.styles";
import Link from "next/link";
import { RiCoupon3Line } from "react-icons/ri";

const SLIDE_TEST = [
  {
    date: "2022/12/24",
    cafeInform: {
      brandName: "카페 하나모아",
    },
  },
  {
    date: "2022/12/24",
    cafeInform: {
      brandName: "카페 두개모아",
    },
  },
  {
    date: "2022/12/24",
    cafeInform: {
      brandName: "카페 세개모아",
    },
  },
  {
    date: "2022/12/24",
    cafeInform: {
      brandName: "카페 네개모아",
    },
  },
  {
    date: "2022/12/24",
    cafeInform: {
      brandName: "카페 다섯개모아",
    },
  },
  {
    date: "2022/12/24",
    cafeInform: {
      brandName: "카페 여섯모아",
    },
  },
  {
    date: "2022/12/24",
    cafeInform: {
      brandName: "카페 일곱모아",
    },
  },
  {
    date: "2022/12/24",
    cafeInform: {
      brandName: "카페 여덟개모아",
    },
  },
  {
    date: "2022/12/24",
    cafeInform: {
      brandName: "카페 아홉개모아",
    },
  },
  {
    date: "2022/12/24",
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

export default function MemberCoupon() {
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
                <RiCoupon3Line />
              </S.BoxIconWrap>
              <S.BoxTextWrap>
                <S.CafeName>{el.cafeInform.brandName}</S.CafeName>
                <div>유효기간 {el.date}</div>
              </S.BoxTextWrap>
            </Box01>
          </S.SlideItem>
        ))}
      </Slider>
    </S.SlideWrap>
  );
}
