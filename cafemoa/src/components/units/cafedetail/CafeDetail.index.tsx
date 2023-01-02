import HeroWrap from "../../commons/hero/HeroWrap.index";
import Like01 from "../../commons/like/01/Like01.index";
import Text from "../../commons/text/01/Text01.index";
import Tag from "../../commons/text/02/Text02.index";
import { Image } from "antd";
import * as S from "./CafeDetail.styles";
import { useState } from "react";
import CafeDetailPhoto from "./CafeDetail.Photos";
import CafeDetailReview from "./CafeDetail.Reviews";

export default function CafeDetail() {
  const [isSelect, setIsSelect] = useState(true);
  return (
    <>
      <HeroWrap
        imageUrl="/images/temp/temp_hero01.png"
        title="카페 모아"
        subject="카페를 한눈에 보기 쉽게 모아!"
      ></HeroWrap>
      <S.DetailContainer>
        <S.Section>
          <S.CafeImageWrapper>
            <img src="/images/cafedetail/CafeDetail01.jpeg" />
          </S.CafeImageWrapper>
          <S.CafeInfoWrapper>
            <Text size="40" weight="700">
              스타벅스
            </Text>
            <S.CafeInfoFooter>
              <S.CafeAddressContainer>
                <Text size="24" weight="300">
                  구로구 구로동 222-2
                </Text>
              </S.CafeAddressContainer>
              <S.LikeContainer>
                <Like01 iconColor="red" fontColor="black" count={22} />
              </S.LikeContainer>
            </S.CafeInfoFooter>
          </S.CafeInfoWrapper>
          <S.OwnerContents>
            <Text size="20" weight="500">
              가맹점주 카페소개란
            </Text>
            <S.Contents>
              <Text size="16" weight="500">
                가맹점주 카페소개란 가맹점주 카페소개란 가맹점주 카페소개란
                가맹점주 카페소개란 가맹점주 카페소개란 가맹점주 카페소개란
                가맹점주 카페소개란 가맹점주 카페소개란 가맹점주 카페소개란
              </Text>
            </S.Contents>
            <S.TagContainer>
              <Tag size="md">좀 많이 긴 태그</Tag>
              <Tag size="md">좀 많이 긴 태그</Tag>
              <Tag size="md">좀 많이 긴 태그</Tag>
            </S.TagContainer>
          </S.OwnerContents>
        </S.Section>
        <S.Section>
          <S.SectionTitle>
            <Text size="32" weight="500">
              메뉴모아
            </Text>
          </S.SectionTitle>
          <S.MenuImageWrapper>
            <S.Menu>
              <Image src="/images/cafedetail/CafeDetail02.jpeg" />
            </S.Menu>
            <S.Menu>
              <Image src="/images/cafedetail/CafeDetail02.jpeg" />
            </S.Menu>
            <S.Menu>
              <Image src="/images/cafedetail/CafeDetail02.jpeg" />
            </S.Menu>
          </S.MenuImageWrapper>
        </S.Section>
        <S.Section>
          <S.SectionTitle>
            <Text size="32" weight="500">
              정보모아
            </Text>
          </S.SectionTitle>
          <S.SubTitleWrapper>
            <div>
              <img src="/images/cafedetail/CafeDetail03.png" />
            </div>
            <div>
              <Text size="24" weight="500">
                공지사항
              </Text>
            </div>
          </S.SubTitleWrapper>
          <div>
            <Text size="16" weight="500">
              2022년 10월 20일 이후 기본 원두 변경(콜롬비아 수프리모 {">"}{" "}
              이티오피아 예카체프)
            </Text>
          </div>
          <S.SubTitleWrapper>
            <div>
              <img src="/images/cafedetail/CafeDetail03.png" />
            </div>
            <div>
              <Text size="24" weight="500">
                운영 및 휴무
              </Text>
            </div>
          </S.SubTitleWrapper>
          <S.TimeTableWrapper>
            <Text size="16" weight="500">
              Sunday : 10:00 ~ 22:00
            </Text>
            <Text size="16" weight="500">
              Monday : 10:00 ~ 22:00
            </Text>
            <Text size="16" weight="500">
              Tuesday : 10:00 ~ 22:00
            </Text>
            <Text size="16" weight="500">
              Wednesday : 10:00 ~ 22:00
            </Text>
            <Text size="16" weight="500">
              Thursday : 10:00 ~ 22:00
            </Text>
            <Text size="16" weight="500">
              Friday : 10:00 ~ 22:00
            </Text>
            <Text size="16" weight="500">
              Saturday : 10:00 ~ 22:00
            </Text>
          </S.TimeTableWrapper>
          <div>
            <Text size="20" weight="500" fontColor="green">
              * 격주 월요일 정기 휴무
            </Text>
          </div>
          <S.SubTitleWrapper>
            <div>
              <img src="/images/cafedetail/CafeDetail03.png" />
            </div>
            <div>
              <Text size="24" weight="500">
                편의 시설
              </Text>
            </div>
          </S.SubTitleWrapper>
          <div>
            <Text size="16" weight="500">
              주차가능 / 매장 내 화장실 / 노키즈존
            </Text>
          </div>
        </S.Section>
        <S.ComponentsTabs
          defaultActiveKey="1"
          items={[
            {
              label: `사진모아`,
              key: "1",
              children: <CafeDetailPhoto />,
            },
            {
              label: `리뷰모아`,
              key: "2",
              children: <CafeDetailReview />,
            },
          ]}
        />
      </S.DetailContainer>
    </>
  );
}
