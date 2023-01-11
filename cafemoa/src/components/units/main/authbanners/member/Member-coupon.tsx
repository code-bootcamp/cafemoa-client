import Slider, { Settings } from "react-slick";
import Box01 from "../../../../commons/box/01/Box01.index";
import Text from "../../../../commons/text/01/Text01.index";
import * as S from "./Member.styles";
import Link from "next/link";
import { RiCoupon3Line } from "react-icons/ri";
import { useFetchUserCoupons } from "../../../../commons/hooks/queries/useFetchUserCoupons";

const SETTINGS: Settings = {
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  dots: true,
  arrows: false,
  speed: 500,
};

export default function MemberCoupon() {
  const { data } = useFetchUserCoupons();
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
        {data?.fetchUserCoupons?.map((el, idx) => (
          <S.SlideItem key={idx}>
            <Box01 styles={{ padding: "16px", display: "flex" }}>
              <S.BoxIconWrap>
                <RiCoupon3Line />
              </S.BoxIconWrap>
              <S.BoxTextWrap>
                <S.CafeName>{el.cafeInform.owner.brandName}</S.CafeName>
                <div>유효기간 ~ {el.expiredDate}</div>
              </S.BoxTextWrap>
            </Box01>
          </S.SlideItem>
        ))}
      </Slider>
    </S.SlideWrap>
  );
}
