import * as S from "./MyStamp.styles";
import { TbTrash } from "react-icons/tb";
import { CgCoffee } from "react-icons/cg";
import HeroWrap from "../../../../commons/hero/HeroWrap.index";
import Text from "../../../../commons/text/01/Text01.index";
import Select01 from "../../../../commons/select/01/Select01.index";
import Box01 from "../../../../commons/box/01/Box01.index";

export default function MyStamp() {
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
            <Text size="36" weight="500">
              카페별 스탬프를 모아보세요!
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
            <S.Search>검색</S.Search>
          </S.AreaWrapper>
          <S.StampContainer>
            <S.StampWrapper>
              <Box01>
                <div>
                  <S.StampInfoWrapper>
                    <S.StampInfo>
                      <Text size="24" weight="500" fontColor="brown">
                        카페한번모아
                      </Text>
                      <Text size="16" weight="300" fontColor="gray">
                        1/10
                      </Text>
                    </S.StampInfo>
                    <S.IconWrap>
                      <TbTrash />
                    </S.IconWrap>
                  </S.StampInfoWrapper>
                  <S.Stamp>
                    {new Array(10).fill(1).map((el, index) => (
                      <S.IconWrap2 key={index}>
                        <CgCoffee />
                      </S.IconWrap2>
                    ))}
                  </S.Stamp>
                </div>
              </Box01>
            </S.StampWrapper>
            <S.StampWrapper>
              <Box01>
                <div>
                  <S.StampInfoWrapper>
                    <S.StampInfo>
                      <Text size="24" weight="500" fontColor="brown">
                        카페한번모아
                      </Text>
                      <Text size="16" weight="300" fontColor="gray">
                        1/10
                      </Text>
                    </S.StampInfo>
                    <S.IconWrap>
                      <TbTrash />
                    </S.IconWrap>
                  </S.StampInfoWrapper>
                  <S.Stamp>
                    {new Array(10).fill(1).map((el, index) => (
                      <S.IconWrap2 key={index}>
                        <CgCoffee />
                      </S.IconWrap2>
                    ))}
                  </S.Stamp>
                </div>
              </Box01>
            </S.StampWrapper>
            <S.StampWrapper>
              <Box01>
                <div>
                  <S.StampInfoWrapper>
                    <S.StampInfo>
                      <Text size="24" weight="500" fontColor="brown">
                        카페한번모아
                      </Text>
                      <Text size="16" weight="300" fontColor="gray">
                        1/10
                      </Text>
                    </S.StampInfo>
                    <S.IconWrap>
                      <TbTrash />
                    </S.IconWrap>
                  </S.StampInfoWrapper>
                  <S.Stamp>
                    {new Array(10).fill(1).map((el, index) => (
                      <S.IconWrap2 key={index}>
                        <CgCoffee />
                      </S.IconWrap2>
                    ))}
                  </S.Stamp>
                </div>
              </Box01>
            </S.StampWrapper>
            <S.StampWrapper>
              <Box01>
                <div>
                  <S.StampInfoWrapper>
                    <S.StampInfo>
                      <Text size="24" weight="500" fontColor="brown">
                        카페한번모아
                      </Text>
                      <Text size="16" weight="300" fontColor="gray">
                        1/10
                      </Text>
                    </S.StampInfo>
                    <S.IconWrap>
                      <TbTrash />
                    </S.IconWrap>
                  </S.StampInfoWrapper>
                  <S.Stamp>
                    {new Array(10).fill(1).map((el, index) => (
                      <S.IconWrap2 key={index}>
                        <CgCoffee />
                      </S.IconWrap2>
                    ))}
                  </S.Stamp>
                </div>
              </Box01>
            </S.StampWrapper>
          </S.StampContainer>
        </S.Container>
      </S.ContainerWrapper>
    </>
  );
}
