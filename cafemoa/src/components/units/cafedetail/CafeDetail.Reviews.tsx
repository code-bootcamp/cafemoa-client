import { useState } from "react";
import { useForm } from "react-hook-form";
import Input01 from "../../commons/input/01/Input01.index";
import Like01 from "../../commons/like/01/Like01.index";
import Text from "../../commons/text/01/Text01.index";
import Textarea01 from "../../commons/textareas/01/textarea01.index";
import Users01 from "../../commons/user/01/Users01.index";
import ReviewModal from "./CafeDetail.Modal";
import * as S from "./CafeDetail.styles";
import ReplyReview from "./CafeDetial.Reply";
import TempCafeDetailReviewImages from "./imageupload/TempCafeDetail.ReviewImages";

export default function CafeDetailReview() {
  const {
    ReviewModalComponent,
    onClickIsModalOpen,
    onClickEditModalOpen,
    onCLickCancel,
    isEdit,
  } = ReviewModal();
  const { register, handleSubmit } = useForm();
  const [isReply, setIsReply] = useState(false);

  const onClickReply = () => {
    setIsReply((prev) => !prev);
  };

  return (
    <S.ReviewContainer>
      <S.ReviewBtnWrapper>
        <S.ReviewWriteBtn onClick={onClickIsModalOpen} color="beige">
          <S.BtnInnerWrapper>
            <img src="/images/cafedetail/CafeDetail05.png" />
            <Text size="20" weight="300" fontColor="deepBrown">
              리뷰 작성하기
            </Text>
          </S.BtnInnerWrapper>
        </S.ReviewWriteBtn>
      </S.ReviewBtnWrapper>
      <ReviewModalComponent
        title={`소중한 리뷰를 작성해주세요`}
        buttons={
          <>
            <S.ReviewCancelBtn onClick={onCLickCancel} color="lightBeige">
              <Text size="16" fontColor="black">
                취소
              </Text>
            </S.ReviewCancelBtn>
            <S.ModalBtnWrapper>
              <S.ReviewSubmitBtn color="brown">
                {isEdit ? (
                  <Text size="16" fontColor="white">
                    수정하기
                  </Text>
                ) : (
                  <Text size="16" fontColor="white">
                    작성하기
                  </Text>
                )}
              </S.ReviewSubmitBtn>
            </S.ModalBtnWrapper>
          </>
        }
      >
        {/* <S.ModalReviewFromWrap onSubmit={handleSubmit(onModalSubmit)}> */}
        <S.ModalReviewFromWrap>
          {/* {props.fileUrls.map((el, index) => (
              <Uploads02
                key={uuidv4()}
                index={index}
                fileUrl={el}
                onChangeFileUrls={props.onChangeFileUrls}
              />
            ))} */}
          <TempCafeDetailReviewImages />
          <S.ModalUserWrapper>
            <Users01
              image="/images/cafedetail/CafeDetail04.jpeg"
              name="원두학살자"
              size="sm"
            />
          </S.ModalUserWrapper>
          <S.ModalInputWrapper>
            <Textarea01
              placeHolder="고객님의 의견을 자유롭게 적어주세요"
              register={register("contents")}
            />
            {/* <Input01 type="text" textAlign="center" /> */}
          </S.ModalInputWrapper>
          <Text size="16" weight="300" fontColor="gray">
            * 작성하신 리뷰는 작성 후 3일이내 수정 가능합니다.
          </Text>
        </S.ModalReviewFromWrap>
      </ReviewModalComponent>
      <S.ReviewWrapper>
        <S.ReviewHeader>
          <Users01
            image="/images/cafedetail/CafeDetail04.jpeg"
            name="원두학살자"
            size="md"
          />
          <S.BtnWrapper>
            <S.EditBtn onClick={onClickEditModalOpen}>
              <Text size="16" weight="300" fontColor="black">
                수정
              </Text>
            </S.EditBtn>
            <S.DeleteBtn>
              <Text size="16" weight="300" fontColor="black">
                삭제
              </Text>
            </S.DeleteBtn>
          </S.BtnWrapper>
        </S.ReviewHeader>
        <S.ReviewContents>
          <Text size="24" weight="300">
            커피맛이 너무좋아요
          </Text>
        </S.ReviewContents>
        <Like01 iconColor="red" count={142} fontColor="black"></Like01>
        <S.ReviewImageContainer>
          <S.ReviewImageWrapper>
            <img src="/images/cafedetail/CafeDetail01.jpeg" />
          </S.ReviewImageWrapper>
          <S.ReviewImageWrapper>
            <img src="/images/cafedetail/CafeDetail01.jpeg" />
          </S.ReviewImageWrapper>
          <S.ReviewImageWrapper>
            <img src="/images/cafedetail/CafeDetail01.jpeg" />
          </S.ReviewImageWrapper>
        </S.ReviewImageContainer>
        <S.ReviewColorLine></S.ReviewColorLine>
        <S.ReplyBtn onClick={onClickReply}>답글달기</S.ReplyBtn>
        {isReply && <ReplyReview />}
      </S.ReviewWrapper>
      <S.ReviewWrapper>
        <Users01
          image="/images/cafedetail/CafeDetail04.jpeg"
          name="원두학살자"
          size="md"
        />
        <S.ReviewContents>
          <Text size="24" weight="300">
            커피맛이 너무좋아요
          </Text>
        </S.ReviewContents>
        <Like01 iconColor="red" count={142} fontColor="black"></Like01>
        <S.ReviewImageContainer>
          <S.ReviewImageWrapper>
            <img src="/images/cafedetail/CafeDetail01.jpeg" />
          </S.ReviewImageWrapper>
          <S.ReviewImageWrapper>
            <img src="/images/cafedetail/CafeDetail01.jpeg" />
          </S.ReviewImageWrapper>
          <S.ReviewImageWrapper>
            <img src="/images/cafedetail/CafeDetail01.jpeg" />
          </S.ReviewImageWrapper>
        </S.ReviewImageContainer>
        <S.ReviewColorLine></S.ReviewColorLine>
        <S.ReplyBtn onClick={onClickReply}>답글달기</S.ReplyBtn>
      </S.ReviewWrapper>
      <S.ReviewWrapper>
        <Users01
          image="/images/cafedetail/CafeDetail04.jpeg"
          name="원두학살자"
          size="md"
        />
        <S.ReviewContents>
          <Text size="24" weight="300">
            커피맛이 너무좋아요
          </Text>
        </S.ReviewContents>
        <Like01 iconColor="red" count={142} fontColor="black"></Like01>
        <S.ReviewImageContainer>
          <S.ReviewImageWrapper>
            <img src="/images/cafedetail/CafeDetail01.jpeg" />
          </S.ReviewImageWrapper>
          <S.ReviewImageWrapper>
            <img src="/images/cafedetail/CafeDetail01.jpeg" />
          </S.ReviewImageWrapper>
          <S.ReviewImageWrapper>
            <img src="/images/cafedetail/CafeDetail01.jpeg" />
          </S.ReviewImageWrapper>
        </S.ReviewImageContainer>
        <S.ReviewColorLine></S.ReviewColorLine>
      </S.ReviewWrapper>
      <S.ReviewWrapper>
        <Users01
          image="/images/cafedetail/CafeDetail04.jpeg"
          name="원두학살자"
          size="md"
        />
        <S.ReviewContents>
          <Text size="24" weight="300">
            커피맛이 너무좋아요
          </Text>
        </S.ReviewContents>
        <Like01 iconColor="red" count={142} fontColor="black"></Like01>
        <S.ReviewImageContainer>
          <S.ReviewImageWrapper>
            <img src="/images/cafedetail/CafeDetail01.jpeg" />
          </S.ReviewImageWrapper>
          <S.ReviewImageWrapper>
            <img src="/images/cafedetail/CafeDetail01.jpeg" />
          </S.ReviewImageWrapper>
          <S.ReviewImageWrapper>
            <img src="/images/cafedetail/CafeDetail01.jpeg" />
          </S.ReviewImageWrapper>
        </S.ReviewImageContainer>
        <S.ReviewColorLine></S.ReviewColorLine>
      </S.ReviewWrapper>
    </S.ReviewContainer>
  );
}
