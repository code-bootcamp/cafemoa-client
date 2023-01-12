import Link from "next/link";
import { useRecoilState } from "recoil";
import { infoUserState } from "../../../../../commons/stores";
import Box01 from "../../../../commons/box/01/Box01.index";
import HeroWrap from "../../../../commons/hero/HeroWrap.index";
import Text from "../../../../commons/text/01/Text01.index";
import * as S from "./Owner.styles";

export default function OwnerMyPage() {
  const [infoUser] = useRecoilState(infoUserState);
  console.log(infoUser?.fetchUser);
  const ownerId = infoUser?.fetchUser?.id;
  // ownerId의 useRecoilState로 변경필요함

  return (
    <>
      <HeroWrap
        imageUrl="/images/owner/Owner01.jpeg"
        title="마이 모아"
        subject="마이페이지 마이페이지 마이페이지 마이페이지 마이페이지 마이페이지 마이페이지"
      ></HeroWrap>
      <S.MyPageContainer>
        <S.OwnerMenuContainer>
          <div>
            <Box01 styles={{ height: "100%" }}>
              <div>
                <S.TitleWrap>
                  <Text size="32" weight="700">
                    카페 정보 수정
                  </Text>
                </S.TitleWrap>
                <S.ImageWrap>
                  <img src="/images/owner/Owner02.png" />
                </S.ImageWrap>
              </div>
            </Box01>
          </div>
          <div>
            <Box01 styles={{ height: "100%" }}>
              <div>
                <S.TitleWrap>
                  <Text size="32" weight="700">
                    내 개인정보 수정
                  </Text>
                </S.TitleWrap>
                <S.ImageWrap>
                  <img src="/images/owner/Owner03.png" />
                </S.ImageWrap>
              </div>
            </Box01>
          </div>
          <div>
            <Box01 styles={{ height: "100%" }}>
              <Link href={`/mypage/owner/${String(ownerId)}/ownercheck`}>
                <a>
                  <S.TitleWrap>
                    <Text size="32" weight="700">
                      적립 회원 점검
                    </Text>
                  </S.TitleWrap>
                  <S.ImageWrap>
                    <img src="/images/owner/Owner04.png" />
                  </S.ImageWrap>
                </a>
              </Link>
            </Box01>
          </div>
          <div>
            <Box01 styles={{ height: "100%" }}>
              <Link href={`/mypage/owner/${String(ownerId)}/stampsave`}>
                <a>
                  <S.TitleWrap>
                    <Text size="32" weight="700">
                      적립 페이지
                    </Text>
                  </S.TitleWrap>
                  <S.ImageWrap>
                    <img src="/images/owner/Owner05.png" />
                  </S.ImageWrap>
                </a>
              </Link>
            </Box01>
          </div>
        </S.OwnerMenuContainer>
      </S.MyPageContainer>
    </>
  );
}
