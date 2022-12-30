import HeroWrap from "../../commons/hero/HeroWrap.index";
import Like01 from "../../commons/like/01/Like01.index";
import Text from "../../commons/text/01/Text01.index";
import Tag from "../../commons/text/02/Text02.index";
import { Image } from "antd";
import * as S from "./CafeDetail.styles";
import { useState } from "react";
import CafeDetailPhoto from "./CafeDetail.isSelectFalse";
import CafeDetailReview from "./CafeDetail.isSelectTrue";

export default function CafeDetail() {
  return (
    <>
      <HeroWrap
        imageUrl="/images/temp/temp_hero01.png"
        title="카페 모아"
        subject="카페를 한눈에 보기 쉽게 모아!"
      ></HeroWrap>
      <S.DetailContainer>
        <S.CafeImageWrapper>
          <img src="/images/cafedetail/CafeDetail01.jpeg" />
        </S.CafeImageWrapper>
        <S.CafeInfoWrapper>
          <Text size="54" weight="700">
            스타벅스
          </Text>
          <S.CafeInfoFooter>
            <S.CafeAddressContainer>
              <Text size="32" weight="300">
                구로구 구로동 222-2
              </Text>
            </S.CafeAddressContainer>
            <S.LikeContainer>
              <Like01 iconColor="red" fontColor="black" count={22} />
            </S.LikeContainer>
          </S.CafeInfoFooter>
        </S.CafeInfoWrapper>
        <S.OwnerContents>
          <Text size="24" weight="500">
            가맹점주 카페소개란
          </Text>
          <br />
          <br />
          <S.Contents>
            <Text size="24" weight="500">
              가맹점주 카페소개란 가맹점주 카페소개란 가맹점주 카페소개란
              가맹점주 카페소개란 가맹점주 카페소개란 가맹점주 카페소개란
              가맹점주 카페소개란 가맹점주 카페소개란 가맹점주 카페소개란
            </Text>
          </S.Contents>
          <S.TagContainer>
            <S.TagsWrapper>
              <Tag size="md">좀 많이 긴 태그</Tag>
            </S.TagsWrapper>
            <S.TagsWrapper>
              <Tag size="md">좀 많이 긴 태그</Tag>
            </S.TagsWrapper>
            <S.TagsWrapper>
              <Tag size="md">좀 많이 긴 태그</Tag>
            </S.TagsWrapper>
          </S.TagContainer>
        </S.OwnerContents>
        <S.ColorLine></S.ColorLine>
        <S.MenuTitle>
          <Text size="48" weight="500">
            메뉴모아
          </Text>
        </S.MenuTitle>
        <S.MenuImageWrapper>
          <S.Menu>
            <Image width={420} src="/images/cafedetail/CafeDetail02.jpeg" />
          </S.Menu>
          <S.Menu>
            <Image width={420} src="/images/cafedetail/CafeDetail02.jpeg" />
          </S.Menu>
          <S.Menu>
            <Image width={420} src="/images/cafedetail/CafeDetail02.jpeg" />
          </S.Menu>
        </S.MenuImageWrapper>
        <S.ColorLine></S.ColorLine>
        <S.OwnerTitle>
          <Text size="48" weight="500">
            정보모아
          </Text>
        </S.OwnerTitle>
        <S.SubTitleWrapper>
          <div>
            <img src="/images/cafedetail/CafeDetail03.png" />
          </div>
          <div style={{ margin: "24px 0px 0px 16px" }}>
            <Text size="32" weight="500">
              공지사항
            </Text>
          </div>
        </S.SubTitleWrapper>
        <div style={{ marginTop: "32px" }}>
          <Text size="24" weight="500">
            2022년 10월 20일 이후 기본 원두 변경(콜롬비아 수프리모 {">"}{" "}
            이티오피아 예카체프)
          </Text>
        </div>
        <S.SubTitleWrapper>
          <div>
            <img src="/images/cafedetail/CafeDetail03.png" />
          </div>
          <div style={{ margin: "20px 0px 0px 16px" }}>
            <Text size="32" weight="500">
              운영 및 휴무
            </Text>
          </div>
        </S.SubTitleWrapper>
        <S.TimeTableWrapper>
          <div style={{ marginTop: "32px" }}>
            <Text size="24" weight="500">
              Sunday
            </Text>
            <br />
            <Text size="24" weight="500">
              Monday
            </Text>
            <br />
            <Text size="24" weight="500">
              Tuesday
            </Text>
            <br />
            <Text size="24" weight="500">
              Wednesday
            </Text>
            <br />
            <Text size="24" weight="500">
              Thursday
            </Text>
            <br />
            <Text size="24" weight="500">
              Friday
            </Text>
            <br />
            <Text size="24" weight="500">
              Saturday
            </Text>
          </div>
          <div style={{ margin: "32px 0px 0px 40px" }}>
            <div>
              <Text size="24" weight="500">
                10:00 ~ 22:00
              </Text>
            </div>
            <div>
              <Text size="24" weight="500">
                10:00 ~ 22:00
              </Text>
            </div>
            <div>
              <Text size="24" weight="500">
                10:00 ~ 22:00
              </Text>
            </div>
            <div>
              <Text size="24" weight="500">
                10:00 ~ 22:00
              </Text>
            </div>
            <div>
              <Text size="24" weight="500">
                10:00 ~ 22:00
              </Text>
            </div>
            <div>
              <Text size="24" weight="500">
                10:00 ~ 22:00
              </Text>
            </div>
            <div>
              <Text size="24" weight="500">
                10:00 ~ 22:00
              </Text>
            </div>
          </div>
        </S.TimeTableWrapper>
        <div style={{ marginTop: "32px" }}>
          <Text size="36" weight="500" fontColor="green">
            * 격주 월요일 정기 휴무
          </Text>
        </div>
        <S.SubTitleWrapper>
          <div>
            <img src="/images/cafedetail/CafeDetail03.png" />
          </div>
          <div style={{ margin: "20px 0px 0px 16px" }}>
            <Text size="32" weight="500">
              편의 시설
            </Text>
          </div>
        </S.SubTitleWrapper>
        <div style={{ margin: "32px 0px 100px 0px" }}>
          <Text size="24" weight="500">
            주차가능 / 매장 내 화장실 / 노키즈존
          </Text>
        </div>
        <S.ColorLine></S.ColorLine>
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
