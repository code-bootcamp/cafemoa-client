import HeroWrap from "../../../commons/hero/HeroWrap.index";
import Like01 from "../../../commons/like/01/Like01.index";
import Text from "../../../commons/text/01/Text01.index";
import Tag from "../../../commons/text/02/Text02.index";
import { Image } from "antd";
import * as S from "./CafeDetail.styles";
import CafeDetailPhoto from "./CafeDetail.Photos";
import CafeDetailReview from "./CafeDetail.Reviews";
import { useFetchCafeInform } from "../../../commons/hooks/queries/useFetchCafeInform";
import { useFetchCafeMenuImage } from "../../../commons/hooks/queries/useFetchCafeMenuImage";
import { usePickCafe } from "../../../commons/hooks/mutations/usePickCafe";

export default function CafeDetail() {
  const { data } = useFetchCafeInform();
  const { PickCafeSubmit } = usePickCafe();
  /* eslint-disable */
  const sanitizeHtml = require("sanitize-html");
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
            {/* <img src={`https://storage.googleapis.com/${data?.fetchCafeInform.thumbNail}`} /> */}
            <img src="/images/cafedetail/CafeDetail01.jpeg" />
          </S.CafeImageWrapper>
          <S.CafeInfoWrapper>
            <Text size="32" weight="700">
              {data?.fetchCafeInform.owner.brandName}
            </Text>
            <S.CafeInfoFooter>
              <S.CafeAddressContainer>
                <Text size="20" weight="300">
                  {data?.fetchCafeInform.cafeAddr}
                </Text>
              </S.CafeAddressContainer>
              <S.LikeContainer
                id={data?.fetchCafeInform.id}
                onClick={PickCafeSubmit}
              >
                <Like01
                  iconColor="red"
                  fontColor="black"
                  count={data?.fetchCafeInform.like}
                />
              </S.LikeContainer>
            </S.CafeInfoFooter>
          </S.CafeInfoWrapper>
          <S.OwnerContents>
            {/* <Text size="18" weight="500">
              가맹점주 카페소개란
            </Text> */}
            <S.Contents>
              <Text size="16" weight="500">
                {data?.fetchCafeInform.cafeinfo}
              </Text>
            </S.Contents>
            <S.TagContainer>
              {data?.fetchCafeInform.cafeTag.map((el, idx) => (
                <Tag size="md">{el.tagName}</Tag>
              ))}
            </S.TagContainer>
          </S.OwnerContents>
        </S.Section>
        <S.Section>
          <S.SectionTitle>
            <Text size="28" weight="500">
              메뉴모아
            </Text>
          </S.SectionTitle>
          <S.MenuImageWrapper>
            {/* {data?.fetchCafeInform.cafeMenuImage.map((el) => (
              <S.Menu key={el.id}>
                <Image src={`https://storage.googleapis.com/${el.menu_imageUrl}`} />
              </S.Menu>
            ))} */}
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
            <Text size="28" weight="500">
              정보모아
            </Text>
          </S.SectionTitle>
          <S.SubTitleWrapper>
            <div>
              <img src="/images/cafedetail/CafeDetail03.png" />
            </div>
            <div>
              <Text size="20" weight="500">
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
              <Text size="20" weight="500">
                운영 및 휴무
              </Text>
            </div>
          </S.SubTitleWrapper>
          <S.TimeTableWrapper
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(
                data?.fetchCafeInform.operatingInfo.replace(
                  /(?:\r\n|\r|\n|p)/g,
                  "<br />"
                ),
                { allowedTags: ["p", "br", "n"] }
              ),
            }}
          >
            {/* <Text size="16" weight="500">
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
            </Text> */}
            {/* {data?.fetchCafeInform.operatingInfo} */}
          </S.TimeTableWrapper>
          <div>
            <Text size="20" weight="500" fontColor="red">
              * 격주 월요일 정기 휴무
            </Text>
          </div>
          <S.SubTitleWrapper>
            <div>
              <img src="/images/cafedetail/CafeDetail03.png" />
            </div>
            <div>
              <Text size="20" weight="500">
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
