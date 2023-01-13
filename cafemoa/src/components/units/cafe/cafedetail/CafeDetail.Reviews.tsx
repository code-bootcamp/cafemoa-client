import { yupResolver } from "@hookform/resolvers/yup";
import { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useFetchCommentByCafeID } from "../../../commons/hooks/queries/useFetchCommentByCafeID";
import { infoUserState } from "../../../../commons/stores";
import { useRecoilState } from "recoil";
import { useDeleteComment } from "../../../commons/hooks/mutations/useDeleteComment";
import { useRouter } from "next/router";
import { useLikeComment } from "../../../commons/hooks/mutations/useLikeComment";
import { v4 as uuidv4 } from "uuid";
import * as S from "./CafeDetail.styles";
import Like01 from "../../../commons/like/01/Like01.index";
import Text from "../../../commons/text/01/Text01.index";
import Users01 from "../../../commons/user/01/Users01.index";
import ReplyReview from "./CafeDetial.Reply";
import ReviewWrite from "./CafeDetail.ReviewWrite";
import OwnerComment from "./CafeDetail.OwnerComment";
import ReviewComment from "./CafeDetail.ReviewComment";

export default function CafeDetailReview(props) {
  const router = useRouter();
  const { data } = useFetchCommentByCafeID();
  const [isReview, setIsReview] = useState(false);
  const [commentId, setCommentId] = useState("");
  const [deleteComment] = useDeleteComment();
  const [infoUser] = useRecoilState(infoUserState);
  const ownerbrandName = infoUser?.fetchOwnerLoggedIn?.brandName;
  const [isEdit, setIsEdit] = useState(false);

  const onClickOpenReivewWrite = () => {
    setIsReview((prev) => !prev);
  };
  // useEffect로 commentId 리팩토링
  return (
    <>
      <S.ReviewBtnWrapper>
        <S.ReviewWriteBtn color="beige">
          <S.BtnInnerWrapper onClick={onClickOpenReivewWrite}>
            <img src="/images/cafedetail/CafeDetail05.png" />
            <Text size="16" weight="300" fontColor="black">
              리뷰 작성하기
            </Text>
          </S.BtnInnerWrapper>
        </S.ReviewWriteBtn>
      </S.ReviewBtnWrapper>
      <S.ReviewContainer>
        {isReview && (
          <ReviewWrite
            isEdit={isEdit}
            cafeInformId={String(router.query.cafeInformID)}
            commentId={commentId}
            onClickOpenReivewWrite={onClickOpenReivewWrite}
          />
        )}
        {data?.fetchCommentBycafeID.map((el) => (
          <Fragment key={uuidv4()}>
            <ReviewComment
              isEdit={isEdit}
              setIsEdit={setIsEdit}
              setIsReview={setIsReview}
              el={el}
              cafeId={router.query.cafeInformID}
            />
            <OwnerComment el={el} cafe={router.query.cafeInformID} />
          </Fragment>
          // <S.ReviewWrapper key={el.id}>
          //   <S.ReviewHeader>
          //     <Users01
          //       image={`https://storage.googleapis.com/${el.user.profileImage}`}
          //       name={el.user.nickname}
          //       size="md"
          //     />
          //     <S.BtnWrapper>
          //       <S.EditBtn onClick={onClickCommentEdit(el.id)}>
          //         <AiFillEdit />
          //       </S.EditBtn>
          //       <S.DeleteBtn onClick={onClickCommentDelete(el.id)}>
          //         <RiDeleteBin5Line />
          //       </S.DeleteBtn>
          //     </S.BtnWrapper>
          //   </S.ReviewHeader>
          //   <S.ReviewContents>
          //     <S.LikeWrapper onClick={onClickCommentLike(el.id)}>
          //       <Like01
          //         iconColor="red"
          //         count={el.like}
          //         fontColor="black"
          //       ></Like01>
          //     </S.LikeWrapper>
          //     <div style={{ marginLeft: "32px" }}>
          //       <Text size="18" weight="300">
          //         {el.reply}
          //       </Text>
          //     </div>
          //   </S.ReviewContents>
          //   <S.ReviewImageContainer>
          //     {el.commentImage.map((el, idx) => (
          //       // <S.ReviewImageWrapper key={idx}>
          //       //   <img
          //       //     src={`https://storage.googleapis.com/${el.image_url}`}
          //       //   />
          //       // </S.ReviewImageWrapper>
          //       <S.ReviewImageWrapper key={idx}>
          //         {el.image_url}
          //       </S.ReviewImageWrapper>
          //     ))}
          //   </S.ReviewImageContainer>
          //   {ownerbrandName ? (
          //     <S.ReplyBtn onClick={onClickReply(el.id)}>답글달기</S.ReplyBtn>
          //   ) : (
          //     <div></div>
          //   )}
          //   {isReply && <ReplyReview commentId={commentId} />}
          //   <OwnerComment commentId={commentId} />
          // </S.ReviewWrapper>
        ))}
      </S.ReviewContainer>
    </>
  );
}
