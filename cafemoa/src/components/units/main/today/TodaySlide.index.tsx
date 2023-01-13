import Link from "next/link";
import Text from "../../../commons/text/01/Text01.index";
import * as S from "./TodaySlide.styles";
import Tag from "../../../commons/text/02/Text02.index";
import Slider, { Settings } from "react-slick";
import { useEffect, useRef, useState } from "react";
import { useFetchCafes } from "../../../commons/hooks/queries/useFetchCafes";
import { getRandomDday } from "../../../commons/hooks/customs/useRandomDayTag";
import { v4 as uuidv4 } from "uuid";

const NAV_SETTINGS: Settings = {
  autoplay: true,
  infinite: true,
  slidesToShow: 2,
  arrows: false,
  speed: 500,
  variableWidth: true,
};

const VIEW_SETTINGS: Settings = {
  infinite: true,
  arrows: false,
  speed: 500,
  fade: true,
  draggable: false,
  adaptiveHeight: true,
};

export default function TodaySlide() {
  const { data, onRefetchCafes } = useFetchCafes();
  const [todayTag, setTodayTag] = useState<string[]>([]);

  const [swipeIdx, setSwipeIdx] = useState(0);
  console.log(data);
  useEffect(() => {
    void getRandomDday();
    const tag = JSON.parse(localStorage.getItem("todayTag") ?? "{}").tag;
    setTodayTag(tag);
  }, []);

  useEffect(() => {
    onRefetchCafes(todayTag);
  }, [todayTag]);

  return (
    <S.TodaySlideWrap key={uuidv4()}>
      <S.TodaySlideInfoWrap>
        {/* <Slider {...VIEW_SETTINGS} asNavFor={pagingSlick} ref={mainSlickRef}>
          {data?.fetchCafes.map((el) => ( */}
        <Link href="/" key={data?.fetchCafes[swipeIdx].id}>
          <a>
            <S.ImageWrap>
              <img
                src={
                  data?.fetchCafes[swipeIdx].thumbNail ??
                  "/images/commons/img_cafe_preparing.png"
                }
              />
            </S.ImageWrap>
            <S.InfoWrap>
              <div>
                <Text size="32" fontColor="white" weight="700">
                  {data?.fetchCafes[swipeIdx].owner.brandName}
                </Text>
              </div>
              <S.InfoContents>
                <Text size="16" fontColor="white" weight="500">
                  {data?.fetchCafes[swipeIdx].cafeinfo}
                </Text>
              </S.InfoContents>
              <div>
                <Text size="16" fontColor="white" weight="500">
                  {data?.fetchCafes[swipeIdx].cafeAddr}
                </Text>
              </div>
              <div>
                {data?.fetchCafes[swipeIdx].cafeTag?.map((cur, idx) => (
                  <Tag key={cur.id} size="sm">
                    {cur.tagName}
                  </Tag>
                ))}
              </div>
            </S.InfoWrap>
          </a>
        </Link>
        {/* ))}
        </Slider> */}
      </S.TodaySlideInfoWrap>
      <S.TodaySlideListsWrap>
        <Slider {...NAV_SETTINGS}>
          {data?.fetchCafes.map((el) => (
            <S.SlideItem key={uuidv4()}>
              <S.SlideBtn>
                <S.ImageWrap>
                  <img
                    src={
                      el.thumbNail ?? "/images/commons/img_cafe_preparing.png"
                    }
                  />
                </S.ImageWrap>
                <div>
                  <Text size="14" fontColor="white">
                    {el.owner.brandName}
                  </Text>
                </div>
              </S.SlideBtn>
            </S.SlideItem>
          ))}
        </Slider>
      </S.TodaySlideListsWrap>
    </S.TodaySlideWrap>
  );
}
