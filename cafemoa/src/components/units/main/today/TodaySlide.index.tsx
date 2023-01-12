import Link from "next/link";
import Text from "../../../commons/text/01/Text01.index";
import * as S from "./TodaySlide.styles";
import Tag from "../../../commons/text/02/Text02.index";
import Slider, { Settings } from "react-slick";
import { useEffect, useRef, useState } from "react";
import { useFetchCafes } from "../../../commons/hooks/queries/useFetchCafes";
import axios from "axios";
import { getRandomDday } from "../../../commons/hooks/customs/useRandomDayTag";

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
  const { data, refetch } = useFetchCafes();
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current ?? undefined);
    setNav2(slider2.current ?? undefined);
  }, []);

  useEffect(() => {
    void getRandomDday();
  }, []);

  useEffect(() => {
    const todayTag = JSON.parse(localStorage.getItem("todayTag") ?? "{}").tag;
    void refetch({ tags: todayTag });
    console.log(todayTag);
  }, []);
  console.log(data);

  return (
    <S.TodaySlideWrap>
      <S.TodaySlideInfoWrap>
        <Slider {...VIEW_SETTINGS} asNavFor={nav2} ref={slider1}>
          {data?.fetchCafes.map((el) => (
            <Link href="/" key={el.id}>
              <a>
                <S.ImageWrap>
                  <img src={el.thumbNail} />
                </S.ImageWrap>
                <S.InfoWrap>
                  <div>
                    <Text size="32" fontColor="white" weight="700">
                      {el.owner.brandName}
                    </Text>
                  </div>
                  <S.InfoContents>
                    <Text size="16" fontColor="white" weight="500">
                      {el.cafeinfo}
                    </Text>
                  </S.InfoContents>
                  <div>
                    <Text size="16" fontColor="white" weight="500">
                      {el.cafeAddr}
                    </Text>
                  </div>
                  <div>
                    {el.cafeTag?.map((cur, idx) => (
                      <Tag key={cur.id} size="sm">
                        {cur.tagName}
                      </Tag>
                    ))}
                  </div>
                </S.InfoWrap>
              </a>
            </Link>
          ))}
        </Slider>
      </S.TodaySlideInfoWrap>
      <S.TodaySlideListsWrap>
        <Slider {...NAV_SETTINGS} asNavFor={nav1} ref={slider2}>
          {data?.fetchCafes.map((el, idx) => (
            <S.SlideItem key={idx}>
              <S.SlideBtn>
                <S.ImageWrap>
                  <img src={el.thumbNail} />
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
