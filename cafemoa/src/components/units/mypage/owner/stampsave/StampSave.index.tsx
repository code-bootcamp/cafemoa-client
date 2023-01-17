import * as S from "./StampSave.styles";
import Text from "../../../../commons/text/01/Text01.index";
import HeroWrap from "../../../../commons/hero/HeroWrap.index";
import { useRouter } from "next/router";
import StampSaveByQr from "./StampSaveByQr";
import StampSaveByPhone from "./StampSaveByPhone";
import MypageSidebarLayout from "../../../../commons/layout/mypage/owner/MypageSidebar.index";
import SidebarMenuLayout from "../../../../commons/layout/mypage/owner/sidebarMenu/SidebarMenu.index";
import Link from "next/link";
import { useFetchMyCafes } from "../../../../commons/hooks/queries/useFetchMyCafes";

export default function StampSave() {
  const router = useRouter();
  const { data: cafeId } = useFetchMyCafes();
  return (
    <>
      <HeroWrap
        imageUrl="/images/review/review_hero01.png"
        title="마이모아"
        subject="내 정보를 한눈에 보기 쉽게 모아!"
      >
        <S.MyCafe>
          <Link href={`/cafe/${cafeId?.fetchMyCafes[0]?.id}`}>
            <a>
              <Text fontColor="white" size="16">
                내 카페 보기
              </Text>
            </a>
          </Link>
        </S.MyCafe>
      </HeroWrap>
      <S.ContainerWrapper>
        <div>
          <MypageSidebarLayout>
            <SidebarMenuLayout asPath={router.asPath} />
          </MypageSidebarLayout>
        </div>
        <S.Container>
          <S.TitleWrapper>
            <Text size="32" weight="500">
              스탬프를 적립해보세요!
            </Text>
          </S.TitleWrapper>

          <S.TapWrap
            defaultActiveKey="1"
            items={[
              {
                label: "핸드폰번호로 적립하기 ",
                key: "1",
                children: <StampSaveByPhone />,
              },
              {
                label: "QR로 적립하기",
                key: "2",
                children: <StampSaveByQr />,
              },
            ]}
          />
        </S.Container>
      </S.ContainerWrapper>
    </>
  );
}
