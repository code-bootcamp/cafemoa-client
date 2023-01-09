import Input01 from "../../../commons/input/01/Input01.index";
import Text from "../../../commons/text/01/Text01.index";
import * as S from "./CafeDetail.styles";

export default function ReplyReview() {
  return (
    <S.ReplyWrap>
      <S.ReplyWrapper>
        <Input01 placeHolder="20글자 이내로 작성해주세요." type="text" />
      </S.ReplyWrapper>
      <S.ReplySubmitBtn>
        <Text size="16" >답글등록</Text>
      </S.ReplySubmitBtn>
    </S.ReplyWrap>
  );
}
