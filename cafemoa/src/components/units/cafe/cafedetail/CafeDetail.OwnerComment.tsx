import { useFetchOwnerCommentByCommentID } from "../../../commons/hooks/queries/useFetchOwnerCommentByCommentID";
import Text from "../../../commons/text/01/Text01.index";
import * as S from "./CafeDetail.styles";
import { FaUserAlt } from "react-icons/fa";

export default function OwnerComment(props) {
  const { data } = useFetchOwnerCommentByCommentID(props.commentId);
  console.log(props.commentId);
  console.log(data);
  return (
    <>
      {data?.fetchOwnerCommentByCommentID && (
        <S.CommentWrap>
          <S.CommentImageWrapper>
            <img src="/images/cafedetail/CafeDetail08.png" />
          </S.CommentImageWrapper>
          <S.CommentImageWrapper2>
            <FaUserAlt />
          </S.CommentImageWrapper2>
          <S.CommentContentWrapper>
            <Text size="18" weight="300">
              {data?.fetchOwnerCommentByCommentID}
            </Text>
          </S.CommentContentWrapper>
        </S.CommentWrap>
      )}
    </>
  );
}
