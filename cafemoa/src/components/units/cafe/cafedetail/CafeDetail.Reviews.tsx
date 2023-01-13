import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Like01 from "../../../commons/like/01/Like01.index";
import Text from "../../../commons/text/01/Text01.index";
import Users01 from "../../../commons/user/01/Users01.index";
import * as S from "./CafeDetail.styles";
import ReplyReview from "./CafeDetial.Reply";
import {
  FETCH_COMMENT_BY_CAFE_ID,
  useFetchCommentByCafeID,
} from "../../../commons/hooks/queries/useFetchCommentByCafeID";
import { useFetchOwnerCommentByCommentID } from "../../../commons/hooks/queries/useFetchOwnerCommentByCommentID";
import { infoUserState } from "../../../../commons/stores";
import { useRecoilState } from "recoil";
import ReviewWrite from "./CafeDetail.ReviewWrite";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDeleteComment } from "../../../commons/hooks/mutations/useDeleteComment";
import { Modal } from "antd";
import OwnerComment from "./CafeDetail.OwnerComment";
import { useRouter } from "next/router";
import { useLikeComment } from "../../../commons/hooks/mutations/useLikeComment";

export default function CafeDetailReview(props) {
  const router = useRouter();
  const { data } = useFetchCommentByCafeID();
  const [likeComment] = useLikeComment();
  const [isReply, setIsReply] = useState(false);
  const [isReview, setIsReview] = useState(false);
  const [commentId, setCommentId] = useState("");
  const [deleteComment] = useDeleteComment();
  const [infoUser] = useRecoilState(infoUserState);
  const ownerbrandName = infoUser?.fetchOwnerLoggedIn?.brandName;
  const [isEdit, setIsEdit] = useState(false);

  const onClickReply = (CommentId: string) => () => {
    setCommentId(CommentId);
    setIsReply((prev) => !prev);
  };
  const onClickOpenReivewWrite = () => {
    setIsReview((prev) => !prev);
  };
  const onClickCommentDelete = (CommentId: string) => async () => {
    setCommentId(CommentId);
    try {
      const result = await deleteComment({
        variables: {
          commentId: CommentId,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENT_BY_CAFE_ID,
            variables: { cafeID: router.query.cafeInformID },
          },
        ],
      });
      Modal.success({
        content: "삭제되었습니다",
      });
      console.log(result);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  const onClickCommentLike = (CommentId: string) => async () => {
    setCommentId(CommentId);
    try {
      const result = await likeComment({
        variables: {
          commentID: CommentId,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENT_BY_CAFE_ID,
            variables: { cafeID: router.query.cafeInformID },
          },
        ],
      });
      Modal.success({
        content: "해당댓글에 좋아요 처리되었습니다",
      });
      console.log(result);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickCommentEdit = (CommentId: string) => () => {
    setCommentId(CommentId);
    setIsEdit(true);
    setIsReview((prev) => !prev);
  };

  //useEffect로 commentId 리팩토링
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
            cafeInformId={props.cafeInformId}
            commentId={commentId}
            onClickOpenReivewWrite={onClickOpenReivewWrite}
          />
        )}
        {data?.fetchCommentBycafeID.map((el) => (
          <S.ReviewWrapper key={el.id}>
            <S.ReviewHeader>
              <Users01
                image={`https://storage.googleapis.com/${el.user.profileImage}`}
                name={el.user.nickname}
                size="md"
              />
              <S.BtnWrapper>
                <S.EditBtn onClick={onClickCommentEdit(el.id)}>
                  <AiFillEdit />
                </S.EditBtn>
                <S.DeleteBtn onClick={onClickCommentDelete(el.id)}>
                  <RiDeleteBin5Line />
                </S.DeleteBtn>
              </S.BtnWrapper>
            </S.ReviewHeader>
            <S.ReviewContents>
              <S.LikeWrapper onClick={onClickCommentLike(el.id)}>
                <Like01
                  iconColor="red"
                  count={el.like}
                  fontColor="black"
                ></Like01>
              </S.LikeWrapper>
              <div style={{ marginLeft: "32px" }}>
                <Text size="18" weight="300">
                  {el.reply}
                </Text>
              </div>
            </S.ReviewContents>
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
            {ownerbrandName ? (
              <S.ReplyBtn onClick={onClickReply(el.id)}>답글달기</S.ReplyBtn>
            ) : (
              <div></div>
            )}
            {isReply && <ReplyReview commentId={commentId} />}
            <OwnerComment commentId={commentId} />
          </S.ReviewWrapper>
        ))}
      </S.ReviewContainer>
    </>
  );
}
