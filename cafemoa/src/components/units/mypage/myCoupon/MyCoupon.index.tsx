import { useState } from "react";
import Box01 from "../../../common/box/01/Box01.index";
import HeroWrap from "../../../common/hero/HeroWrap.index";
import Text from "../../../common/text/01/Text01.index";
import MyCouponInvalid from "./MyCoupon-invalid";
import MyCouponValid from "./MyCoupon-valid";
import * as S from "./MyCoupon.styles";

export default function MyCoupon() {
  const [isValid, setIsValid] = useState(true);

  const onClickValid = () => {
    setIsValid(true);
  };

  const onClickInValid = () => {
    setIsValid(false);
  };

  return (
    <>
      <HeroWrap
        imageUrl="/images/review/review_hero01.png"
        title="마이모아"
        subject="마이페이지 마이페이지 마이페이지"
      ></HeroWrap>
      <S.ContainerWrapper>
        <S.Container>
          <S.TitleWrapper>
            <Text size="36" weight="500">
              쿠폰을 모아보세요!
            </Text>
          </S.TitleWrapper>
          <S.CouponOption>
            <S.CouponOptionWrapper onClick={onClickValid}>
              사용가능 쿠폰<S.CouponCount>4</S.CouponCount>
            </S.CouponOptionWrapper>
            <S.CouponOptionWrapper onClick={onClickInValid}>
              사용완료 쿠폰<S.CouponCount>6</S.CouponCount>
            </S.CouponOptionWrapper>
          </S.CouponOption>
          <S.CouponWrapper>
            {isValid ? <MyCouponValid /> : <MyCouponInvalid />}
          </S.CouponWrapper>
        </S.Container>
      </S.ContainerWrapper>
    </>
  );
}
