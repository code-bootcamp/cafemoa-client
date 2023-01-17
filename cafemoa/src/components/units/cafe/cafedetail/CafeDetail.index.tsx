import HeroWrap from "../../../commons/hero/HeroWrap.index";
import Like01 from "../../../commons/like/01/Like01.index";
import Text from "../../../commons/text/01/Text01.index";
import Tag from "../../../commons/text/02/Text02.index";
import { Image } from "antd";
import * as S from "./CafeDetail.styles";
import CafeDetailPhoto from "./CafeDetail.Photos";
import CafeDetailReview from "./CafeDetail.Reviews";
import { useFetchCafeInform } from "../../../commons/hooks/queries/useFetchCafeInform";
import { usePickCafe } from "../../../commons/hooks/mutations/usePickCafe";
import { useRecoilState } from "recoil";
import { infoUserState } from "../../../../commons/stores";

export default function CafeDetail() {
  const { data } = useFetchCafeInform();
  const [infoUser] = useRecoilState(infoUserState);
  console.log(infoUser);
  const { PickCafeSubmit } = usePickCafe();
  /* eslint-disable */
  const sanitizeHtml = require("sanitize-html");
  return (
    <>
      <HeroWrap
        imageUrl="/images/temp/temp_hero01.png"
        title="카페모아"
        subject="카페를 한눈에 보기 쉽게 모아!"
      ></HeroWrap>
      <S.DetailContainer>
        <S.Section>
          <S.CafeImageWrapper>
            <img
              src={`https://storage.googleapis.com/${data?.fetchCafeInform.cafeImage[0]?.cafe_image}`}
            />
            {/* <img src="/images/cafedetail/CafeDetail01.jpeg" /> */}
          </S.CafeImageWrapper>
          <S.CafeInfoWrapper>
            <S.CafeInfoHeader>
              <Text size="32" weight="700">
                {data?.fetchCafeInform.owner.brandName}
              </Text>
              {infoUser?.fetchOwnerLoggedIn === undefined && (
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
              )}
              {infoUser?.fetchOwnerLoggedIn !== undefined && (
                <S.LikeContainerOwner id={data?.fetchCafeInform.id}>
                  <Like01
                    iconColor="red"
                    fontColor="black"
                    count={data?.fetchCafeInform.like}
                  />
                </S.LikeContainerOwner>
              )}
            </S.CafeInfoHeader>
            <S.CafeInfoFooter>
              <S.CafeAddressContainer>
                <Text size="20" weight="300">
                  {data?.fetchCafeInform.cafeAddr}
                </Text>
              </S.CafeAddressContainer>
            </S.CafeInfoFooter>
          </S.CafeInfoWrapper>
          <S.OwnerContents>
            <S.Contents
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(
                  data?.fetchCafeInform?.cafeinfo?.replace(
                    /(?:\r\n|\r|\n)/g,
                    "<br />"
                  ),
                  { allowedTags: ["p", "br", "n"] }
                ),
              }}
            ></S.Contents>
            <S.TagContainer>
              {data?.fetchCafeInform.cafeTag.map((el, idx) => (
                <Tag size="md" key={el.id}>
                  {el.tagName}
                </Tag>
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
            {data?.fetchCafeInform.cafeMenuImage.map((el) => (
              <S.Menu key={el.id}>
                <Image
                  src={`https://storage.googleapis.com/${el.menu_imageUrl}`}
                />
              </S.Menu>
            ))}
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
          <S.NoticeWrapper
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(
                data?.fetchCafeInform?.notice?.replace(
                  /(?:\r\n|\r|\n)/g,
                  "<br/>"
                ),
                { allowedTags: ["p", "br", "n"] }
              ),
            }}
          ></S.NoticeWrapper>
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
                  /(?:\r\n|\r|\n)/g,
                  "<br />"
                ),
                { allowedTags: ["p", "br", "n", "nbsp"] }
              ),
            }}
          ></S.TimeTableWrapper>
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
          <S.facilityWrapper>
            {data?.fetchCafeInform?.is_Parking && (
              <Text size="16" weight="500">
                주차가능
              </Text>
            )}
            {data?.fetchCafeInform.is_WC && (
              <Text size="16" weight="500">
                매장 내 화장실
              </Text>
            )}
            {data?.fetchCafeInform.is_Wifi && (
              <Text size="16" weight="500">
                와이파이
              </Text>
            )}
          </S.facilityWrapper>
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
