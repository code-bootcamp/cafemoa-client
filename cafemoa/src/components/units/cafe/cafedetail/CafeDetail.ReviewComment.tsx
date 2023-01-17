import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useLikeComment } from "../../../commons/hooks/mutations/useLikeComment";
import { useDeleteComment } from "../../../commons/hooks/mutations/useDeleteComment";
import { useState } from "react";
import { FETCH_COMMENT_BY_CAFE_ID } from "../../../commons/hooks/queries/useFetchCommentByCafeID";
import { Modal, Image } from "antd";
import { infoUserState } from "../../../../commons/stores";
import { useRecoilState } from "recoil";
import { useFetchOwnerCommentByCommentID } from "../../../commons/hooks/queries/useFetchOwnerCommentByCommentID";
import Like01 from "../../../commons/like/01/Like01.index";
import Text from "../../../commons/text/01/Text01.index";
import Users01 from "../../../commons/user/01/Users01.index";
import * as S from "./CafeDetail.styles";
import ReplyReview from "./CafeDetial.Reply";
import OwnerComment from "./CafeDetail.OwnerComment";
import { IComment } from "../../../../commons/types/generated/types";
import { reviewRegisterDate } from "../../../../commons/libraries/utill";
import InfiniteScrollWrap from "../../../commons/infiniteScroll/01/InfiniteScroll.index";

interface IReviewCommentProps {
  el: IComment;
  cafeId: string;
  setIsEdit: (bool: boolean) => void;
  setIsReview: (bool: boolean) => void;
  setCommentId: (CommentId: string) => void;
  setUpdatedata: (el: IComment) => void;
  onHandleMore: () => void;
}

export default function ReviewComment(props: IReviewCommentProps) {
  const [likeComment] = useLikeComment();
  const [deleteComment] = useDeleteComment();
  const { data } = useFetchOwnerCommentByCommentID(props.el.id);
  const [isReply, setIsReply] = useState(false);
  const [infoUser] = useRecoilState(infoUserState);
  const ownerbrandName = infoUser?.fetchOwnerLoggedIn?.brandName;

  const onClickReply = (CommentId: string) => () => {
    setIsReply((prev) => !prev);
  };

  const onClickCommentLike = (CommentId: string) => async () => {
    try {
      const result = await likeComment({
        variables: {
          commentID: CommentId,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENT_BY_CAFE_ID,
            variables: { cafeID: props.cafeId },
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

  const onClickCommentDelete = (CommentId: string) => async () => {
    try {
      const result = await deleteComment({
        variables: {
          commentId: CommentId,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENT_BY_CAFE_ID,
            variables: { cafeID: props.cafeId },
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

  const onClickCommentEdit = (CommentId: string) => () => {
    props.setIsEdit(true);
    props.setIsReview(true);
    props.setCommentId(CommentId);
    props.setUpdatedata(props.el);
  };
  return (
    <>
      <S.ReviewWrapper key={props.el.id}>
        <S.ReviewHeader>
          <Users01
            image={props.el.user.profileImage}
            name={props.el.user.nickname}
            size="md"
          />
          {infoUser?.fetchUser?.id === props.el.user.id &&
            reviewRegisterDate(props.el.time, 3) && (
              <S.BtnWrapper>
                <S.EditBtn onClick={onClickCommentEdit(props.el.id)}>
                  <AiFillEdit />
                </S.EditBtn>
                <S.DeleteBtn onClick={onClickCommentDelete(props.el.id)}>
                  <RiDeleteBin5Line />
                </S.DeleteBtn>
              </S.BtnWrapper>
            )}
        </S.ReviewHeader>
        <S.ReviewContents>
          <S.LikeWrapper onClick={onClickCommentLike(props.el.id)}>
            <Like01
              iconColor="red"
              count={props.el.like}
              fontColor="black"
            ></Like01>
          </S.LikeWrapper>
          <S.ContentsText>
            <Text size="18" weight="300">
              {props.el.reply}
            </Text>
          </S.ContentsText>
        </S.ReviewContents>
        <S.ReviewImageContainer>
          {props.el.commentImage.map((el, idx) => (
            <S.ReviewImageWrapper key={idx}>
              <S.ReviewImage>
                <Image src={`https://storage.googleapis.com/${el.image_url}`} />
              </S.ReviewImage>
            </S.ReviewImageWrapper>
            // <S.ReviewImageWrapper key={idx}>
            //   {props.el.image_url}
            // </S.ReviewImageWrapper>
          ))}
        </S.ReviewImageContainer>
        {ownerbrandName != null &&
        data?.fetchOwnerCommentByCommentID == null ? (
          <S.ReplyBtn onClick={onClickReply(props.el.id)}>답글달기</S.ReplyBtn>
        ) : (
          <div></div>
        )}
        {isReply && <ReplyReview commentId={props.el.id} />}
        <OwnerComment commentId={props.el.id} />
      </S.ReviewWrapper>
    </>
  );
}
