import Slider, { Settings } from "react-slick";
import Box01 from "../../../../commons/box/01/Box01.index";
import Text from "../../../../commons/text/01/Text01.index";
import * as S from "./Member.styles";
import Link from "next/link";
import { RiCoupon3Line } from "react-icons/ri";
import { useFetchUserCoupons } from "../../../../commons/hooks/queries/useFetchUserCoupons";
import Link01 from "../../../../commons/link/01/Link01.index";
import { Swiper, SwiperSlide } from "swiper/react";

interface IMemberCouponProps {
  infoUserId?: string;
}

export default function MemberCoupon(props: IMemberCouponProps) {
  const { data } = useFetchUserCoupons();
  return (
    <S.SlideWrap>
      <div style={{ textAlign: "right", marginBottom: "8px" }}>
        <Link01
          href={`mypage/user/${String(props.infoUserId)}/mycoupon`}
          size="sm"
        >
          <Text size="14">자세히 보기</Text>
        </Link01>
      </div>
      {data?.fetchUserCoupons !== undefined &&
        data?.fetchUserCoupons.length > 0 && (
          <Swiper
            loop={true}
            slidesPerView={1}
            spaceBetween={20}
            autoplay={{ delay: 2000 }}
            breakpoints={{
              540: {
                slidesPerView: 2,
              },
            }}
          >
            {data?.fetchUserCoupons?.map((el, idx) => (
              <SwiperSlide key={el.id}>
                <Box01 styles={{ padding: "16px", display: "flex" }}>
                  <S.BoxIconWrap>
                    <RiCoupon3Line />
                  </S.BoxIconWrap>
                  <S.BoxTextWrap>
                    <S.CafeName>{el.cafeInform.owner.brandName}</S.CafeName>
                    <div>유효기간 ~ {el.expiredDate}</div>
                  </S.BoxTextWrap>
                </Box01>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      {data?.fetchUserCoupons.length === 0 && (
        <div style={{ textAlign: "center" }}>쿠폰이 없습니다.</div>
      )}
    </S.SlideWrap>
  );
}
