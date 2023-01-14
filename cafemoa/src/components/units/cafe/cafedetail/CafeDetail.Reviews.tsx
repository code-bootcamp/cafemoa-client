import { Fragment, useEffect, useState } from "react";
import { useFetchCommentByCafeID } from "../../../commons/hooks/queries/useFetchCommentByCafeID";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import * as S from "./CafeDetail.styles";
import Text from "../../../commons/text/01/Text01.index";
import ReviewWrite from "./CafeDetail.ReviewWrite";
import OwnerComment from "./CafeDetail.OwnerComment";
import ReviewComment from "./CafeDetail.ReviewComment";

export default function CafeDetailReview(props) {
  const router = useRouter();
  const { data } = useFetchCommentByCafeID();
  const [isReview, setIsReview] = useState(false);
  const [commentId, setCommentId] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [updatedata, setUpdatedata] = useState("");

  const onClickOpenReivewWrite = () => {
    setIsReview((prev) => !prev);
  };
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
            setIsReview={setIsReview}
            setIsEdit={setIsEdit}
            cafeInformId={String(router.query.cafeInformID)}
            commentId={commentId}
            onClickOpenReivewWrite={onClickOpenReivewWrite}
            updatedata={updatedata}
          />
        )}
        {data?.fetchCommentBycafeID.map((el) => (
          <Fragment key={uuidv4()}>
            <ReviewComment
              setIsEdit={setIsEdit}
              setIsReview={setIsReview}
              setCommentId={setCommentId}
              setUpdatedata={setUpdatedata}
              el={el}
              cafeId={router.query.cafeInformID}
            />
            <OwnerComment el={el} cafe={router.query.cafeInformID} />
          </Fragment>
        ))}
      </S.ReviewContainer>
    </>
  );
}
