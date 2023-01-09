import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Like01 from "../../../commons/like/01/Like01.index";
import Text from "../../../commons/text/01/Text01.index";
import Textarea01 from "../../../commons/textareas/01/textarea01.index";
import Users01 from "../../../commons/user/01/Users01.index";
import ReviewModal from "./CafeDetail.Modal";
import ReviewImageUpload from "./imageupload/CafeDetail.ReviewImages";
import * as S from "./CafeDetail.styles";
import ReplyReview from "./CafeDetial.Reply";
import { v4 as uuidv4 } from "uuid";
import { useCreateComment } from "../../../commons/hooks/mutations/useCreateComment";
import { IFormCreateComment } from "./CafeDetail.Review.types";
import { useFetchCommentByCafeID } from "../../../commons/hooks/queries/useFetchCommentByCafeID";
import TempCafeDetailReviewImages from "./imageupload/TempCafeDetail.ReviewImages";

export default function CafeDetailReview() {
  const { data } = useFetchCommentByCafeID();
  const { createCommentSubmit } = useCreateComment();
  const {
    ReviewModalComponent,
    onClickIsModalOpen,
    onClickEditModalOpen,
    onCLickCancel,
    isEdit,
  } = ReviewModal();
  const { register, handleSubmit, setValue } = useForm({
    // resolver: yupResolver(CreateCommentSchema),
    mode: "onChange",
    defaultValues: {
      reply: "",
      images: ["", "", ""],
    },
  });
  const [isReply, setIsReply] = useState(false);
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newimageUrls = [...fileUrls];
    newimageUrls[index] = fileUrl;
    setFileUrls(newimageUrls);
    setValue("images", fileUrls);
  };

  const onModalSubmit = (data: IFormCreateComment) => {
    void createCommentSubmit(data);
  };

  const onClickReply = () => {
    setIsReply((prev) => !prev);
  };

  // useEffect(() => {
  //   if (data?.fetchCommentBycafeID.commentImage.image_url.length) {
  //     setFileUrls([...data?.fetchCommentBycafeID?.commentImage?.image_url]);
  //   }
  // }, [data]);
  console.log(data);
  return (
    <>
      <S.ReviewBtnWrapper>
        <S.ReviewWriteBtn onClick={onClickIsModalOpen} color="beige">
          <S.BtnInnerWrapper>
            <img src="/images/cafedetail/CafeDetail05.png" />
            <Text size="16" weight="300" fontColor="black">
              리뷰 작성하기
            </Text>
          </S.BtnInnerWrapper>
        </S.ReviewWriteBtn>
      </S.ReviewBtnWrapper>
      <S.ReviewContainer>
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
          {/* <S.ModalReviewFromWrap> */}
          <S.ModalReviewFromWrap onSubmit={handleSubmit(onModalSubmit)}>
            {fileUrls.map((el, index) => (
              <ReviewImageUpload
                key={uuidv4()}
                index={index}
                fileUrl={el}
                onChangeFileUrls={onChangeFileUrls}
              />
            ))}
            {/* <TempCafeDetailReviewImages /> */}
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
                register={register("reply")}
              />
              {/* <Input01 type="text" textAlign="center" /> */}
            </S.ModalInputWrapper>
            <Text size="16" weight="300" fontColor="gray">
              * 작성하신 리뷰는 작성 후 3일이내 수정 가능합니다.
            </Text>
          </S.ModalReviewFromWrap>
        </ReviewModalComponent>
        {data?.fetchCommentBycafeID.map((el) => (
          <S.ReviewWrapper key={el.id}>
            <S.ReviewHeader>
              <Users01
                image={`https://storage.googleapis.com/${el.user.profileImage}`}
                name={el.user.nickname}
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
              <Text size="18" weight="300">
                {el.reply}
              </Text>
            </S.ReviewContents>
            <Like01 iconColor="red" count={el.like} fontColor="black"></Like01>
            <S.ReviewImageContainer>
              {el.commentImage.map((el, idx) => (
                // <S.ReviewImageWrapper key={idx}>
                //   <img
                //     src={`https://storage.googleapis.com/${el.image_url}`}
                //   />
                // </S.ReviewImageWrapper>
                <S.ReviewImageWrapper key={idx}>
                  {el.image_url}
                </S.ReviewImageWrapper>
              ))}
            </S.ReviewImageContainer>
            <S.ReplyBtn onClick={onClickReply}>답글달기</S.ReplyBtn>
            {isReply && <ReplyReview />}
          </S.ReviewWrapper>
        ))}
        {/* 아래는 목업용으로 날릴 예정 */}
        {/* 아래는 목업용으로 날릴 예정 */}
        {/* 아래는 목업용으로 날릴 예정 */}
        {/* 아래는 목업용으로 날릴 예정 */}
        {/* 아래는 목업용으로 날릴 예정 */}
        {/* 아래는 목업용으로 날릴 예정 */}
        {/* <S.ReviewWrapper>
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
            <Text size="18" weight="300">
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
            <Text size="18" weight="300">
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
          <S.ReplyBtn onClick={onClickReply}>답글달기</S.ReplyBtn>
          <S.OwnerComment>
            <S.CommentIcon>
              <img src="/images/cafedetail/CafeDetail08.png" />
            </S.CommentIcon>
            <S.CommentContents>
              <Text>감사합니다 또 방문해주세요</Text>
            </S.CommentContents>
          </S.OwnerComment>
        </S.ReviewWrapper>
        <S.ReviewWrapper>
          <Users01
            image="/images/cafedetail/CafeDetail04.jpeg"
            name="원두학살자"
            size="md"
          />
          <S.ReviewContents>
            <Text size="18" weight="300">
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
        </S.ReviewWrapper>
        <S.ReviewWrapper>
          <Users01
            image="/images/cafedetail/CafeDetail04.jpeg"
            name="원두학살자"
            size="md"
          />
          <S.ReviewContents>
            <Text size="18" weight="300">
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
        </S.ReviewWrapper> */}
      </S.ReviewContainer>
    </>
  );
}
