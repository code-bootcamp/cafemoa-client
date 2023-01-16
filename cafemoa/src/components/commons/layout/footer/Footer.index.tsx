import * as S from "./Footer.styles";

export default function FooterLayout() {
  return (
    <S.FooterWrap>
      <S.FooterMenu>
        <li>사업자등록번호 : 137-60-5083</li>
        <li>카페모아 대표이사 : 김동은</li>
        <li>TEL : 010-9208-7621</li>
        <li>개인정보 책임자 : 김예은</li>
      </S.FooterMenu>
      <S.FooterCopy>ⓒ 2023 CafeMoa Company. All Rights Reserved.</S.FooterCopy>
    </S.FooterWrap>
  );
}
