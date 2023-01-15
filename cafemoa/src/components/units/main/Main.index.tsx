import Link from "next/link";
import Text from "../../commons/text/01/Text01.index";
import { MAIN_CATEGORY } from "./Main.category";
import { v4 as uuidv4 } from "uuid";
import * as S from "./Main.styles";
import TodaySlide from "./today/TodaySlide.index";
import ReviewsSlide from "./reviews/ReviewsSlide.index";
import Member from "./authbanners/member/Member.index";
import { useEffect, useState } from "react";
import _ from "lodash";
import { infoUserState } from "../../../commons/stores";
import { useRecoilState } from "recoil";
import NonMember from "./authbanners/nonmember/NonMember.index";

export default function Main() {
  const [isScroll, setIsScroll] = useState(false);
  const [infoUser] = useRecoilState(infoUserState);

  const handleScroll = _.debounce((event) => {
    if (Math.floor(window.scrollY) > Math.floor(window.innerHeight)) return;
    if (Math.floor(window.pageYOffset) === 0) setIsScroll(false);
    const direction = event.deltaY > 0 ? "down" : "up";
    if (direction === "down") {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
      setIsScroll(true);
    }
  }, 50);

  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
    if (window.innerWidth < 1025) {
      setIsScroll(true);
      return;
    } else {
      setIsScroll(false);
    }
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
      setIsScroll(true);
    };
  }, []);

  useEffect(() => {
    if (Math.floor(window.scrollY) > Math.floor(window.innerHeight)) return;
    if (!isScroll) {
      document.body.style.cssText = `overflow : hidden`;
    } else {
      document.body.style.cssText = `overflow : auto`;
    }
    return () => {
      document.body.style.cssText = `overflow : auto`;
    };
  }, [isScroll]);

  return (
    <S.MainWrap>
      <S.MainVisual isHidden={infoUser?.fetchUser !== undefined}>
        <S.VideoWrap>
          <S.VisualVideo
            src="/images/main/img_main_visual.mp4"
            autoPlay
            muted
            loop
          />
        </S.VideoWrap>
        <S.VisualText>
          <Text size="54" weight="700" fontColor="white">
            쿠폰을 모두 모아
            <br />
            카페 모아
          </Text>
        </S.VisualText>
        <S.ScrollAnimation />
      </S.MainVisual>
      <S.MainSection>
        <S.MainSectionInner>
          {infoUser?.fetchUser === undefined ? <NonMember /> : <Member />}
        </S.MainSectionInner>
      </S.MainSection>

      {/* 태그를 모아 */}
      <S.MainSection>
        <S.MainSectionInner>
          <S.SectionTitle>
            <Text size="32" weight="700">
              태그로 카페를 모아
            </Text>
          </S.SectionTitle>
          <S.CategoryWrap>
            {MAIN_CATEGORY.map((el) => (
              <S.Category imageUrl={el.imageUrl} key={uuidv4()}>
                <Link
                  href={{ pathname: "/cafe", query: { tag: el.label } }}
                  as="/cafe"
                >
                  <a>
                    <Text size="24" fontColor="white" weight="700">
                      {el.label}
                    </Text>
                  </a>
                </Link>
              </S.Category>
            ))}
          </S.CategoryWrap>
        </S.MainSectionInner>
      </S.MainSection>

      {/* 오늘의 카페 모아 */}
      <S.MainSection>
        <S.TodayCafeWrap>
          <S.MainSectionInner>
            <S.SectionTitle>
              <Text size="32" weight="700" fontColor="white">
                오늘의 카페를 모아
              </Text>
            </S.SectionTitle>
            <div>
              <TodaySlide />
            </div>
          </S.MainSectionInner>
        </S.TodayCafeWrap>
      </S.MainSection>

      {/* 리뷰를 모아 */}
      <S.MainSection>
        <S.MainSectionInner>
          <S.SectionTitle>
            <Text size="32" weight="700">
              카페의 리뷰 모아
            </Text>
          </S.SectionTitle>
          <S.ReviewListsWrap>
            <ReviewsSlide />
          </S.ReviewListsWrap>
        </S.MainSectionInner>
      </S.MainSection>
    </S.MainWrap>
  );
}
