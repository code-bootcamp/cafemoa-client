import * as S from "./MyCoupon.styles";
import { BiCoffeeTogo } from "react-icons/bi";
import Text from "../../../../commons/text/01/Text01.index";
import Input01 from "../../../../commons/input/01/Input01.index";
import { useForm } from "react-hook-form";
import MessageModal from "../../../../commons/modal/message/MessageModal.index";
import { useFetchUserCoupons } from "../../../../commons/hooks/queries/useFetchUserCoupons";
import { getExpiredDate } from "../../../../../commons/libraries/utill";
import { useRef } from "react";
import { useUseCoupon } from "../../../../commons/hooks/mutations/useUseCoupon";
import InfiniteScrollWrap from "../../../../commons/infiniteScroll/01/InfiniteScroll.index";

interface IFormUseCouponData {
  password: string;
  couponId: string;
}

export default function MyCouponValid() {
  const inputRef = useRef<HTMLInputElement>(null);

  const { data, onHandleMore } = useFetchUserCoupons();
  console.log(data);
  const { useCouponSubmit } = useUseCoupon();
  const { ModalComponent, setIsModalOpen, onClickIsModalOpen } = MessageModal();
  const { register, handleSubmit, setValue } = useForm({
    mode: "onChange",
    defaultValues: {
      password: "",
      couponId: "",
    },
  });

  const onClickCoupon = (couponId: string) => () => {
    setValue("couponId", couponId);
    setIsModalOpen(true);
  };

  const onUseCoupon = () => {
    inputRef.current?.click();
    setIsModalOpen(false);
  };
  const submitUseCoupon = async (data: IFormUseCouponData) => {
    console.log(data);
    void useCouponSubmit(data);
  };

  return (
    <>
      <ModalComponent
        title={`쿠폰 사용`}
        text={`해당 쿠폰을 사용 하시겠습니까? \n 
        쿠폰 사용 처리를 위해서 \n 가맹주 비밀번호를 입력해주세요.`}
        status="write"
        buttons={
          <>
            <S.ModalButton color="lightBeige" onClick={onClickIsModalOpen}>
              <Text size="24" fontColor="gray">
                취소
              </Text>
            </S.ModalButton>
            <S.ModalButton type="submit" color="beige" onClick={onUseCoupon}>
              <Text size="24">확인</Text>
            </S.ModalButton>
          </>
        }
      >
        <S.ModalFromWrap onSubmit={handleSubmit(submitUseCoupon)}>
          <Input01
            type="password"
            textAlign="center"
            placeHolder="가맹주 비밀번호 입력"
            register={register("password")}
          />
          <input type="submit" hidden ref={inputRef} />
        </S.ModalFromWrap>
      </ModalComponent>

      <S.ValidWrapper>
        <InfiniteScrollWrap onHandleMore={onHandleMore}>
          {data?.fetchUserCoupons ? (
            data?.fetchUserCoupons.map((el) => (
              <S.ValidBox key={el.id}>
                <S.BoxWrapper>
                  <S.CouponDetail>
                    <S.Div>
                      <Text size="28" weight="500" fontColor="mainColor">
                        {el.cafeInform.owner.brandName}
                      </Text>
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
                    <S.BtnWrapper>
                      <S.CouponUseBtn
                        color="beige"
                        type="button"
                        onClick={onClickCoupon(el.id)}
                      >
                        <Text size="16" fontColor="mainColor">
                          쿠폰 사용
                        </Text>
                      </S.CouponUseBtn>
                    </S.BtnWrapper>
                  </S.CouponDetail>
                  <S.CoffeeImgWrap>
                    <BiCoffeeTogo />
                    <S.CouponImg src="/images/mycoupon/mycoupon.png" />
                  </S.CoffeeImgWrap>
                </S.BoxWrapper>
              </S.ValidBox>
            ))
          ) : (
            <></>
          )}
        </InfiniteScrollWrap>
      </S.ValidWrapper>
    </>
  );
}
