import { Fragment, useState } from "react";
import { useFetchCommentByCafeID } from "../../../commons/hooks/queries/useFetchCommentByCafeID";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import * as S from "./CafeDetail.styles";
import Text from "../../../commons/text/01/Text01.index";
import ReviewWrite from "./CafeDetail.ReviewWrite";
import ReviewComment from "./CafeDetail.ReviewComment";
import { IComment } from "../../../../commons/types/generated/types";
import { useFetchCafeStamps } from "../../../commons/hooks/queries/useFetchCafeStamps";
import { reviewRegisterDate } from "../../../../commons/libraries/utill";
import { Modal } from "antd";
import InfiniteScrollWrap from "../../../commons/infiniteScroll/01/InfiniteScroll.index";

export default function CafeDetailReview() {
  const router = useRouter();
  const { data, onHandleMore } = useFetchCommentByCafeID();
  const { data: cafeStamps } = useFetchCafeStamps(
    String(router.query.cafeInformID)
  );
  const [isReview, setIsReview] = useState(false);
  const [commentId, setCommentId] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [updatedata, setUpdatedata] = useState<IComment>();

  const onClickOpenReivewWrite = () => {
    setIsReview((prev) => !prev);
  };
  const onClickCloseReviewWrite = () => {
    setIsEdit(false);
    setIsReview(false);
    setUpdatedata(undefined);
  };

  // console.log(updatedata);

  return (
    <>
      <S.ReviewBtnWrapper>
        {reviewRegisterDate(cafeStamps?.fetchCafeStamps[0], 1) && (
          <S.ReviewWriteBtn color="beige">
            <S.BtnInnerWrapper onClick={onClickOpenReivewWrite}>
              <img src="/images/cafedetail/CafeDetail05.png" />
              <Text size="16" weight="300" fontColor="black">
                리뷰 작성하기
              </Text>
            </S.BtnInnerWrapper>
          </S.ReviewWriteBtn>
        )}
      </S.ReviewBtnWrapper>
      <S.ReviewContainer>
        {isReview && (
          <Modal
            open={true}
            footer={null}
            closable={true}
            onCancel={onClickCloseReviewWrite}
            centered
          >
            <ReviewWrite
              isEdit={isEdit}
              setIsReview={setIsReview}
              setIsEdit={setIsEdit}
              onClickCloseReviewWrite={onClickCloseReviewWrite}
              cafeInformId={String(router.query.cafeInformID)}
              commentId={commentId}
              onClickOpenReivewWrite={onClickOpenReivewWrite}
              updatedata={updatedata}
              setUpdatedata={setUpdatedata}
            />
          </Modal>
        )}
        <InfiniteScrollWrap onHandleMore={onHandleMore}>
          {data?.fetchCommentBycafeID ? (
            data?.fetchCommentBycafeID.map((el) => (
              <Fragment key={uuidv4()}>
                <ReviewComment
                  setIsEdit={setIsEdit}
                  setIsReview={setIsReview}
                  setCommentId={setCommentId}
                  setUpdatedata={setUpdatedata}
                  el={el}
                  cafeId={String(router.query.cafeInformID)}
                  onHandleMore={onHandleMore}
                />
              </Fragment>
            ))
          ) : (
            <></>
          )}
        </InfiniteScrollWrap>
      </S.ReviewContainer>
    </>
  );
}
