import { Fragment, useEffect, useState } from "react";
import Box01 from "../../../../commons/box/01/Box01.index";
import HeroWrap from "../../../../commons/hero/HeroWrap.index";
import { useFetchMyPickLists } from "../../../../commons/hooks/queries/useFetchMyPickLists";
import Like01 from "../../../../commons/like/01/Like01.index";
import Select01 from "../../../../commons/select/01/Select01.index";
import Text from "../../../../commons/text/01/Text01.index";
import Tag from "../../../../commons/text/02/Text02.index";
import MypageSidebarLayout from "../../../../commons/layout/mypage/user/MypageSidebar.index";
import { useRouter } from "next/router";
import * as S from "./MyPick.styles";
import SidebarMenuLayout from "../../../../commons/layout/mypage/user/sidebarMenu/SidebarMenu.index";
import Link from "next/link";
import { SELECT_VALUES02 } from "../../../../../commons/default/default";

export default function MyPick() {
  const router = useRouter();
  const [selectValue, setSelectValue] = useState<string | number>("");
  console.log(selectValue);
  const { data, onSelectLocation } = useFetchMyPickLists();
  console.log(data);

  useEffect(() => {
    onSelectLocation(String(selectValue));
  }, [selectValue]);

  return (
    <>
      <HeroWrap
        imageUrl="/images/review/review_hero01.png"
        title="마이모아"
        subject="내 정보를 한눈에 보기 쉽게 모아!"
      ></HeroWrap>
      <S.ContainerWrapper>
        <div>
          <MypageSidebarLayout>
            <SidebarMenuLayout asPath={router.asPath} />
          </MypageSidebarLayout>
        </div>
        <S.Container>
          <S.TitleWrapper>
            <Text size="32" weight="500">
              내가 찜한 카페를 모아보세요!
            </Text>
          </S.TitleWrapper>

          <S.AreaWrapper>
            <S.MainArea>
              <Select01
                defaultText="지역"
                selectValue={SELECT_VALUES02}
                setSelectValue={setSelectValue}
              ></Select01>
            </S.MainArea>
            {/* <S.SubArea>
              <Select01
                defaultText="시/군/구"
                selectValue={SELECT_VALUES02}
                setSelectValue={setSelectValue}
              ></Select01>
            </S.SubArea> */}
            {/* <S.Search color="beige">
              <Text size="14">검색</Text>
            </S.Search> */}
          </S.AreaWrapper>
          <S.MypickContainer>
            {data?.fetchMyPickLists.map((el) => (
              <S.PickWrapper key={el.id}>
                <Link href={`/cafe/${el.cafeInform.id}`}>
                  <a>
                    <Box01 styles={{ padding: "24px" }}>
                      <S.MypickInfoWrapper>
                        <S.MypickCafeImg>
                          <img
                            src={`https://storage.googleapis.com/${el.cafeInform.cafeImage[0]?.cafe_image}`}
                          />
                        </S.MypickCafeImg>
                        <S.MypickCafe>
                          <S.MypickCafeInfo>
                            <Text size="24" weight="500" fontColor="subColor01">
                              {el.cafeInform.owner.brandName}
                            </Text>
                            <Like01
                              iconColor="red"
                              fontColor="black"
                              count={el.cafeInform.like}
                            />
                          </S.MypickCafeInfo>
                          <S.MypickCafeAdd>
                            <Text size="16" weight="300">
                              {el.cafeInform.cafeAddr}
                            </Text>
                          </S.MypickCafeAdd>
                          <S.MypickCafeTag>
                            {el.cafeInform.cafeTag.map((el) => (
                              <Fragment key={el.id}>
                                <Tag size="sm">{el.tagName}</Tag>
                              </Fragment>
                            ))}
                          </S.MypickCafeTag>
                        </S.MypickCafe>
                      </S.MypickInfoWrapper>
                    </Box01>
                  </a>
                </Link>
              </S.PickWrapper>
            ))}
          </S.MypickContainer>
        </S.Container>
      </S.ContainerWrapper>
    </>
  );
}
