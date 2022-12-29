import Link from "next/link";
import * as S from "./Header.styles";

export default function HeaderLayout() {
  return (
    <S.HeaderWrap>
      <S.HeaderInner>
        <S.Logo>
          <Link href="/">
            <a>
              <img src="/images/commons/logo.png" />
            </a>
          </Link>
        </S.Logo>
      </S.HeaderInner>
    </S.HeaderWrap>
  );
}
