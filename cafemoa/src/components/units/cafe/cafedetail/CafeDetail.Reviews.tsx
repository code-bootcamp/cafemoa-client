import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Like01 from "../../../commons/like/01/Like01.index";
import Text from "../../../commons/text/01/Text01.index";
import Textarea01 from "../../../commons/textareas/01/textarea01.index";
import Users01 from "../../../commons/user/01/Users01.index";
import ReviewModal from "./CafeDetail.Modal";
import ReviewImageUpload from "./imageupload/CafeDetail.ReviewImages";
import * as S from "./CafeDetail.styles";
import ReplyReview from "./CafeDetial.Reply";
import { useCreateComment } from "../../../commons/hooks/mutations/useCreateComment";
import { IFormCreateComment } from "./CafeDetail.Review.types";
import { useFetchCommentByCafeID } from "../../../commons/hooks/queries/useFetchCommentByCafeID";
import { useFetchOwnerComment } from "../../../commons/hooks/queries/useFetchOwnerComment";
import Uploads01 from "../../../commons/uploads/01/Upload01.index";
import { infoUserState } from "../../../../commons/stores";
import { useRecoilState } from "recoil";

export default function CafeDetailReview() {
  const { data } = useFetchCommentByCafeID();
  const { OwnerData } = useFetchOwnerComment();
  const { createCommentSubmit } = useCreateComment();
  const [isReply, setIsReply] = useState(false);
  const [filesList, setFilesList] = useState(["", "", ""]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [infoUser] = useRecoilState(infoUserState);
  const userName = infoUser?.fetchUser?.name;
  const ownerbrandName = infoUser?.fetchOwnerLoggedIn?.brandName;
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
      commentImage: ["", "", ""],
    },
  });

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...filesList];
    newFileUrls[index] = fileUrl;
    setFilesList(newFileUrls);
  };

  const onModalSubmit = (data: IFormCreateComment) => {
    setValue("images", fileUrls);
    void createCommentSubmit(data);
  };

  const onReplysubmit = () => {
    inputRef.current?.click();
  };

  const onReplyUpdate = () => {
    // inputRef.current?.click();
  };

  const onClickReply = () => {
    setIsReply((prev) => !prev);
  };

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
                <S.ReviewSubmitBtn
                  onClick={isEdit ? onReplyUpdate : onReplysubmit}
                  color="brown"
                >
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
          <S.ModalReviewFromWrap onSubmit={handleSubmit(onModalSubmit)}>
            <Uploads01 onChangeFileUrls={onChangeFileUrls} maxLength={3} />
            <S.ModalUserWrapper>
              <Users01
                image="/images/cafedetail/CafeDetail04.jpeg"
                name={userName}
                size="sm"
              />
            </S.ModalUserWrapper>
            <S.ModalInputWrapper>
              <Textarea01
                placeHolder="고객님의 의견을 자유롭게 적어주세요"
                register={register("reply")}
              />
            </S.ModalInputWrapper>
            <Text size="16" weight="300" fontColor="gray">
              * 작성하신 리뷰는 작성 후 3일이내 수정 가능합니다.
            </Text>
            <input type="submit" hidden ref={inputRef} />
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
            {/* {OwnerData?.fetchOwnerComment.content && isReply && <ReplyReview/>} */}
            {/* {isReply && <ReplyReview />} */}
            {/* <ViewReply></ViewReply> */}
          </S.ReviewWrapper>
        ))}
      </S.ReviewContainer>
    </>
  );
}
