import Box01 from "../../../../commons/box/01/Box01.index";
import HeroWrap from "../../../../commons/hero/HeroWrap.index";
import Like01 from "../../../../commons/like/01/Like01.index";
import Select01 from "../../../../commons/select/01/Select01.index";
import Text from "../../../../commons/text/01/Text01.index";
import Tag from "../../../../commons/text/02/Text02.index";
import * as S from "./MyPick.styles";

export default function MyPick() {
  const SELECT_VALUES02 = [
    { label: "서울시", value: "서울" },
    { label: "경기도", value: "경기" },
    { label: "강원도", value: "강원" },
    { label: "충청북도", value: "충북" },
    { label: "충청남도", value: "충남" },
    { label: "전라북도", value: "전북" },
    { label: "전라남도", value: "전남" },
    { label: "경상북도", value: "경북" },
    { label: "경상남도", value: "경남" },
    { label: "제주도", value: "제주도" },
  ];

  return (
    <>
      <HeroWrap
        imageUrl="/images/review/review_hero01.png"
        title="마이모아"
        subject="마이페이지 마이페이지 마이페이지"
      ></HeroWrap>
      <S.ContainerWrapper>
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
              ></Select01>
            </S.MainArea>
            <S.SubArea>
              <Select01
                defaultText="시/군/구"
                selectValue={SELECT_VALUES02}
              ></Select01>
            </S.SubArea>
            <S.Search color="beige">
              <Text size="14">검색</Text>
            </S.Search>
          </S.AreaWrapper>
          <S.MypickContainer>
            <S.StampWrapper>
              <Box01 styles={{ padding: "24px" }}>
                <S.MypickInfoWrapper>
                  <S.MypickCafeImg>
                    <img src="/images/mypick/mypick.png" />
                  </S.MypickCafeImg>
                  <S.MypickCafe>
                    <S.MypickCafeInfo>
                      <Text size="24" weight="500" fontColor="subColor01">
                        카페한번모아
                      </Text>
                      <Like01 iconColor="red" fontColor="black" count={22} />
                    </S.MypickCafeInfo>
                    <S.MypickCafeAdd>
                      <Text size="16" weight="300">
                        서울특별시 구로구 디지털로34길 43 코오롱싸이언스밸리1차
                        1층
                      </Text>
                    </S.MypickCafeAdd>
                    <S.MypickCafeTag>
                      <Tag size="sm">가성비좋은 카페</Tag>
                      <Tag size="sm">뷰 좋은 카페</Tag>
                    </S.MypickCafeTag>
                  </S.MypickCafe>
                </S.MypickInfoWrapper>
              </Box01>
            </S.StampWrapper>

            <S.StampWrapper>
              <Box01 styles={{ padding: "24px" }}>
                <S.MypickInfoWrapper>
                  <S.MypickCafeImg>
                    <img src="/images/mypick/mypick.png" />
                  </S.MypickCafeImg>
                  <S.MypickCafe>
                    <S.MypickCafeInfo>
                      <Text size="24" weight="500" fontColor="subColor01">
                        카페두번모아
                      </Text>
                      <Like01 iconColor="red" fontColor="black" count={2} />
                    </S.MypickCafeInfo>
                    <S.MypickCafeAdd>
                      <Text size="16" weight="300">
                        서울특별시 구로구 디지털로34길 43 코오롱싸이언스밸리1차
                        1층
                      </Text>
                    </S.MypickCafeAdd>
                    <S.MypickCafeTag>
                      <Tag size="sm">가성비좋은 카페</Tag>
                      <Tag size="sm">뷰 좋은 카페</Tag>
                    </S.MypickCafeTag>
                  </S.MypickCafe>
                </S.MypickInfoWrapper>
              </Box01>
            </S.StampWrapper>
            <S.StampWrapper>
              <Box01 styles={{ padding: "24px" }}>
                <S.MypickInfoWrapper>
                  <S.MypickCafeImg>
                    <img src="/images/mypick/mypick.png" />
                  </S.MypickCafeImg>
                  <S.MypickCafe>
                    <S.MypickCafeInfo>
                      <Text size="24" weight="500" fontColor="subColor01">
                        카페세번모아
                      </Text>
                      <Like01 iconColor="red" fontColor="black" count={30} />
                    </S.MypickCafeInfo>
                    <S.MypickCafeAdd>
                      <Text size="16" weight="300">
                        서울특별시 구로구 디지털로34길 43 코오롱싸이언스밸리1차
                        1층
                      </Text>
                    </S.MypickCafeAdd>
                    <S.MypickCafeTag>
                      <Tag size="sm">가성비좋은 카페</Tag>
                      <Tag size="sm">뷰 좋은 카페</Tag>
                    </S.MypickCafeTag>
                  </S.MypickCafe>
                </S.MypickInfoWrapper>
              </Box01>
            </S.StampWrapper>
          </S.MypickContainer>
        </S.Container>
      </S.ContainerWrapper>
    </>
  );
}
