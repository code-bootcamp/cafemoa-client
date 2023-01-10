import * as S from "./MyStamp.styles";
import { TbTrash } from "react-icons/tb";
import { CgCoffee } from "react-icons/cg";
import HeroWrap from "../../../../commons/hero/HeroWrap.index";
import Text from "../../../../commons/text/01/Text01.index";
import Select01 from "../../../../commons/select/01/Select01.index";
import Box01 from "../../../../commons/box/01/Box01.index";
import { useFetchUserStamps } from "../../../../commons/hooks/queries/useFetchUserStamps";
import { useEffect, useState } from "react";
import { useDeleteStamp } from "../../../../commons/hooks/mutations/useDeleteStamp";

const SELECT_VALUES02 = [
  { label: "전체", value: "전체" },
  { label: "서울특별시", value: "서울" },
  { label: "경기도", value: "경기" },
  { label: "강원도", value: "강원" },
  { label: "충청북도", value: "충청북도" },
  { label: "충청남도", value: "충청남도" },
  { label: "전라북도", value: "전라북도" },
  { label: "전라남도", value: "전라남도" },
  { label: "경상북도", value: "경상북도" },
  { label: "경상남도", value: "경상남도" },
  { label: "광주광역시", value: "광주" },
  { label: "대구광역시", value: "대구" },
  { label: "대전광역시", value: "대전" },
  { label: "부산광역시", value: "부산" },
  { label: "세종특별자치시", value: "세종" },
  { label: "울산광역시", value: "울산" },
  { label: "인천광역시", value: "인천" },
  { label: "제주도", value: "제주도" },
];

export default function MyStamp() {
  const [selectValue, setSelectValue] = useState<string | number>("");
  const { deleteStampSubmit } = useDeleteStamp();
  const { data, onSelectLocation } = useFetchUserStamps();
  console.log(data);

  const onClickDeleteCoupon = (data: string) => () => {
    console.log(data);
    void deleteStampSubmit(data);
  };

  useEffect(() => {
    onSelectLocation(selectValue);
  }, [selectValue]);

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
              카페별 스탬프를 모아보세요!
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
            </S.SubArea>
            <S.Search color="beige">
              <Text size="14">검색</Text>
            </S.Search> */}
          </S.AreaWrapper>
          <S.StampContainer>
            {data?.fetchUserStamps.map((el) => (
              <S.StampWrapper key={el.id}>
                <Box01>
                  <div>
                    <S.StampInfoWrapper>
                      <S.StampInfo>
                        <Text size="24" weight="500" fontColor="subColor01">
                          {el.cafeInform.brandName}
                        </Text>
                        <Text size="16" weight="300" fontColor="gray">
                          {el.count}/10
                        </Text>
                      </S.StampInfo>
                      <S.IconWrap onClick={onClickDeleteCoupon(el.id)}>
                        <TbTrash />
                      </S.IconWrap>
                    </S.StampInfoWrapper>
                    <S.Stamp>
                      {new Array(el.count).fill(1).map((_, index) => (
                        <S.ValidStampWrap key={index}>
                          <CgCoffee />
                        </S.ValidStampWrap>
                      ))}
                      {new Array(10 - el.count).fill(1).map((_, index) => (
                        <S.IconWrap2 key={index}>
                          <CgCoffee key={index} />
                        </S.IconWrap2>
                      ))}
                    </S.Stamp>
                  </div>
                </Box01>
              </S.StampWrapper>
            ))}
          </S.StampContainer>
        </S.Container>
      </S.ContainerWrapper>
    </>
  );
}
