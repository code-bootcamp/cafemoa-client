import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Like01 from "../../../commons/like/01/Like01.index";
import Text from "../../../commons/text/01/Text01.index";
import Users01 from "../../../commons/user/01/Users01.index";
import * as S from "./CafeDetail.styles";
import ReplyReview from "./CafeDetial.Reply";
import { useFetchCommentByCafeID } from "../../../commons/hooks/queries/useFetchCommentByCafeID";
import { useFetchOwnerComment } from "../../../commons/hooks/queries/useFetchOwnerComment";
import { infoUserState } from "../../../../commons/stores";
import { useRecoilState } from "recoil";
import ReviewWrite from "./CafeDetail.ReviewWrite";
import { Collapse } from "antd";
const { Panel } = Collapse;

export default function CafeDetailReview() {
  const { data } = useFetchCommentByCafeID();
  const { OwnerData } = useFetchOwnerComment();
  const [isReply, setIsReply] = useState(false);
  const [isReview, setIsReview] = useState(false);
  const [commentId, setCommentId] = useState("");
  // const ownerbrandName = infoUser?.fetchOwnerLoggedIn?.brandName;
  const [isEdit, setIsEdit] = useState(false);
  const onClickReply = () => {
    setIsReply((prev) => !prev);
  };
  const onClickqqq = () => {
    setIsReview((prev) => !prev);
  };
  const onClickCommentEdit = (CommentId: string) => () => {
    setCommentId(CommentId);
  };

  return (
    <>
      <S.ReviewBtnWrapper>
        <S.ReviewWriteBtn color="beige">
          <S.BtnInnerWrapper onClick={onClickqqq}>
            <img src="/images/cafedetail/CafeDetail05.png" />
            <Text size="16" weight="300" fontColor="black">
              리뷰 작성하기
            </Text>
          </S.BtnInnerWrapper>
        </S.ReviewWriteBtn>
      </S.ReviewBtnWrapper>
      <S.ReviewContainer>
        {/* <div style={{ width: "100%" }}>
          <Collapse ghost>
            <Panel header="리뷰작성하기" key="1" style={{ fontSize: "16px" }}>
              <ReviewWrite isEdit={isEdit} />
            </Panel>
          </Collapse>
        </div> */}
        {isReview && <ReviewWrite isEdit={isEdit} commentId={commentId} />}
        {/* <ReviewWrite isEdit={isEdit} commentId={commentId} /> */}
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
              <div style={{ paddingLeft: "8px" }}>
                <Like01
                  iconColor="red"
                  count={el.like}
                  fontColor="black"
                ></Like01>
              </div>
              <div style={{ marginLeft: "24px" }}>
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
            <S.ReplyBtn onClick={onClickReply}>답글달기</S.ReplyBtn>
            {/* {OwnerData?.fetchOwnerComment.content && isReply && <ReplyReview/>} */}
            {isReply && <ReplyReview />}
            {/* <ViewReply></ViewReply> */}
          </S.ReviewWrapper>
        ))}
      </S.ReviewContainer>
    </>
  );
}
