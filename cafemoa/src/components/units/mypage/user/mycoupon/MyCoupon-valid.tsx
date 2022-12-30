import * as S from "./MyCoupon.styles";
import { BiCoffeeTogo } from "react-icons/bi";
import Text from "../../../../commons/text/01/Text01.index";

export default function MyCouponValid() {
  return (
    <S.ValidWrapper>
      <S.ValidBox>
        <S.BoxWrapper>
          <S.CouponDetail>
            <S.Div>
              <Text size="28" weight="500" fontColor="deepBrown">
                카페모아 구로디지털점
              </Text>
              <S.CoffeeImgWrap>
                <BiCoffeeTogo />
              </S.CoffeeImgWrap>
            </S.Div>
            <S.Div>
              <Text size="24" weight="300" fontColor="deepBrown">
                아메리카노 1잔 무료 쿠폰
              </Text>
            </S.Div>
            <S.Div>
              <Text size="20" weight="500" fontColor="deepBrown">
                유효기간 : ~ 2022.01.31
              </Text>
            </S.Div>
            <S.BtnWrapper>
              <S.CouponUseBtn color="beige">
                <Text size="16" fontColor="deepBrown">
                  쿠폰 사용
                </Text>
              </S.CouponUseBtn>
            </S.BtnWrapper>
          </S.CouponDetail>
          <S.CouponImg src="/images/mycoupon/mycoupon.png" />
        </S.BoxWrapper>
      </S.ValidBox>
      <S.ValidBox>
        <S.BoxWrapper>
          <S.CouponDetail>
            <S.Div>
              <Text size="28" weight="500" fontColor="deepBrown">
                카페모아 구로디지털점
              </Text>
              <S.CoffeeImgWrap>
                <BiCoffeeTogo />
              </S.CoffeeImgWrap>
            </S.Div>
            <S.Div>
              <Text size="24" weight="300" fontColor="deepBrown">
                아메리카노 1잔 무료 쿠폰
              </Text>
            </S.Div>
            <S.Div>
              <Text size="20" weight="500" fontColor="deepBrown">
                유효기간 : ~ 2022.01.31
              </Text>
            </S.Div>
            <S.BtnWrapper>
              <S.CouponUseBtn color="beige">
                <Text size="16" fontColor="deepBrown">
                  쿠폰 사용
                </Text>
              </S.CouponUseBtn>
            </S.BtnWrapper>
          </S.CouponDetail>
          <S.CouponImg src="/images/mycoupon/mycoupon.png" />
        </S.BoxWrapper>
      </S.ValidBox>
      <S.ValidBox>
        <S.BoxWrapper>
          <S.CouponDetail>
            <S.Div>
              <Text size="28" weight="500" fontColor="deepBrown">
                카페모아 구로디지털점
              </Text>
              <S.CoffeeImgWrap>
                <BiCoffeeTogo />
              </S.CoffeeImgWrap>
            </S.Div>
            <S.Div>
              <Text size="24" weight="300" fontColor="deepBrown">
                아메리카노 1잔 무료 쿠폰
              </Text>
            </S.Div>
            <S.Div>
              <Text size="20" weight="500" fontColor="deepBrown">
                유효기간 : ~ 2022.01.31
              </Text>
            </S.Div>
            <S.BtnWrapper>
              <S.CouponUseBtn color="beige">
                <Text size="16" fontColor="deepBrown">
                  쿠폰 사용
                </Text>
              </S.CouponUseBtn>
            </S.BtnWrapper>
          </S.CouponDetail>
          <S.CouponImg src="/images/mycoupon/mycoupon.png" />
        </S.BoxWrapper>
      </S.ValidBox>
    </S.ValidWrapper>
  );
}
