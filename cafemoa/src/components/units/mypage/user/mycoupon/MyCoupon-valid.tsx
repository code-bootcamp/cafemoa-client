import * as S from "./MyCoupon.styles";
import { BiCoffeeTogo } from "react-icons/bi";
import Text from "../../../../commons/text/01/Text01.index";
import Input01 from "../../../../commons/input/01/Input01.index";
import { useForm } from "react-hook-form";
import MessageModal from "../../../../commons/modal/message/MessageModal.index";
import { useFetchUserCoupons } from "../../../../commons/hooks/queries/useFetchUserStamps";
import { getExpiredDate } from "../../../../../commons/libraries/utill";

interface IFormOwnerPassword {
  password: string;
}

export default function MyCouponValid(props) {
  const { ModalComponent, onClickIsModalOpen } = MessageModal();

  const { register, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues: {
      password: "",
    },
  });

  const onModalSubmit = (data: IFormOwnerPassword) => {
    console.log(data);
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
            <S.ModalButton color="beige">
              <Text size="24">확인</Text>
            </S.ModalButton>
          </>
        }
      >
        <S.ModalFromWrap onSubmit={handleSubmit(onModalSubmit)}>
          <Input01
            type="text"
            textAlign="center"
            placeHolder="가맹주 비밀번호 입력"
            register={register("password")}
          />
        </S.ModalFromWrap>
      </ModalComponent>

      <S.ValidWrapper>
        {props.data?.fetchUserCoupons.map((el) => (
          <>aaa</>
          // {(el.stamp / 10).map((acc)=>(

          // <S.ValidBox key={el.id}>
          //   <S.BoxWrapper>
          //     <S.CouponDetail>
          //       <S.Div>
          //         <Text size="28" weight="500" fontColor="mainColor">
          //           {el.cafeInform.brandName}
          //         </Text>
          //         <S.CoffeeImgWrap>
          //           <BiCoffeeTogo />
          //         </S.CoffeeImgWrap>
          //       </S.Div>
          //       <S.Div>
          //         <Text size="24" weight="300" fontColor="mainColor">
          //           아메리카노 1잔 무료 쿠폰
          //         </Text>
          //       </S.Div>
          //       <S.Div>
          //         <Text size="20" weight="500" fontColor="mainColor">
          //           유효기간 : ~ {getExpiredDate(el.expiredDate)}
          //         </Text>
          //       </S.Div>
          //       <S.BtnWrapper>
          //         <S.CouponUseBtn color="beige" onClick={onClickIsModalOpen}>
          //           <Text size="16" fontColor="mainColor">
          //             쿠폰 사용
          //           </Text>
          //         </S.CouponUseBtn>
          //       </S.BtnWrapper>
          //     </S.CouponDetail>
          //     <S.CouponImg src="/images/mycoupon/mycoupon.png" />
          //   </S.BoxWrapper>
          // </S.ValidBox>
          //  ))}
        ))}

        {/* <S.ValidBox>
          <S.BoxWrapper>
            <S.CouponDetail>
              <S.Div>
                <Text size="28" weight="500" fontColor="mainColor">
                  카페모아 구로디지털점
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
                  유효기간 : ~ 2022.01.31
                </Text>
              </S.Div>
              <S.BtnWrapper>
                <S.CouponUseBtn color="beige">
                  <Text size="16" fontColor="mainColor">
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
                <Text size="28" weight="500" fontColor="mainColor">
                  카페모아 구로디지털점
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
                  유효기간 : ~ 2022.01.31
                </Text>
              </S.Div>
              <S.BtnWrapper>
                <S.CouponUseBtn color="beige" onClick={onClickIsModalOpen}>
                  <Text size="16" fontColor="mainColor">
                    쿠폰 사용
                  </Text>
                </S.CouponUseBtn>
              </S.BtnWrapper>
            </S.CouponDetail>
            <S.CouponImg src="/images/mycoupon/mycoupon.png" />
          </S.BoxWrapper>
        </S.ValidBox> */}
      </S.ValidWrapper>
    </>
  );
}
