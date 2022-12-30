import Box01 from "../../../common/box/01/Box01.index";
import Text from "../../../common/text/01/Text01.index";
import * as S from "./MyCoupon.styles";

export default function MyCouponValid() {
  return (
    <S.UL>
      <S.LI>
        <Box01>
          <S.CouponDetail>
            <Text size="24" weight="500" fontColor="deepBrown">
              카페모아 구로디지털점
            </Text>
            <Text size="24" weight="300" fontColor="deepBrown">
              아메리카노 1잔 무료 쿠폰
            </Text>
            <Text size="20" weight="500" fontColor="deepBrown">
              유효기간 : ~ 2022.01.31
            </Text>
          </S.CouponDetail>
        </Box01>
      </S.LI>
      <S.LI>
        <Box01>
          <div>sssasdasd</div>
        </Box01>
      </S.LI>
      <S.LI>
        <Box01>
          <div>sssasdasd</div>
        </Box01>
      </S.LI>
    </S.UL>
  );
}
