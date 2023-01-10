import * as S from "./MyCoupon.styles";
import Text from "../../../../commons/text/01/Text01.index";
import { BiCoffeeTogo } from "react-icons/bi";
import { useFetchDeletedCoupon } from "../../../../commons/hooks/queries/useFetchDeletedCoupon";
import { getExpiredDate } from "../../../../../commons/libraries/utill";

export default function MyCouponInvalid() {
  const { data } = useFetchDeletedCoupon();
  console.log(data);

  return (
    <S.ValidWrapper>
      {data?.fetchDeletedCoupon.map((el) => (
        <S.ValidBox key={el.id}>
          <S.UsedCouponBoxWrapper expired={el.expired}>
            <S.UsedCoupon>
              <S.Div>
                <Text size="28" weight="500" fontColor="mainColor">
                  {el.cafeInform.brandName}
                </Text>
                <S.CoffeeImgWrap>
                  <BiCoffeeTogo />
                </S.CoffeeImgWrap>
              </S.Div>
              <S.Div>
                <Text size="24" weight="300" fontColor="mainColor">
                  아메리카노 1잔 무료 쿠폰
                </Text>
              </S.Div>
              <S.Div>
                <Text size="20" weight="500" fontColor="mainColor">
                  유효기간 : ~ {getExpiredDate(el.expiredDate)}
                </Text>
              </S.Div>

              <S.InvalidCouponImg src="/images/mycoupon/mycoupon.png" />
            </S.UsedCoupon>
          </S.UsedCouponBoxWrapper>
        </S.ValidBox>
      ))}
    </S.ValidWrapper>
  );
}
