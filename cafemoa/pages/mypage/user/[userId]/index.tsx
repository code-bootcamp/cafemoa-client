import { useFetchDeletedCoupon } from "../../../../src/components/commons/hooks/queries/useFetchDeletedCoupon";
import { useFetchMyPickLists } from "../../../../src/components/commons/hooks/queries/useFetchMyPickLists";
import { useFetchStamps } from "../../../../src/components/commons/hooks/queries/useFetchStamps";
import { useFetchUserCoupons } from "../../../../src/components/commons/hooks/queries/useFetchUserCoupons";
import UserMain from "../../../../src/components/units/mypage/user/usermain/User.index";

export default function UserMainPage() {
  const { data: allStamps } = useFetchStamps();
  const { data: myValidCouponData } = useFetchUserCoupons();
  const { data: myInvalidCouponData } = useFetchDeletedCoupon();
  const { data: myPickData } = useFetchMyPickLists();

  return (
    <UserMain
      allStamps={allStamps}
      myValidCouponData={myValidCouponData}
      myInvalidCouponData={myInvalidCouponData}
      myPickData={myPickData}
    />
  );
}
