import Link from "next/link";
import Text from "../../../commons/text/01/Text01.index";
import * as S from "./TodaySlide.styles";
import Tag from "../../../commons/text/02/Text02.index";
// import Slider, { Settings } from "react-slick";
import { useEffect, useState } from "react";
import { useFetchCafes } from "../../../commons/hooks/queries/useFetchCafes";
import { getRandomDday } from "../../../commons/hooks/customs/useRandomDayTag";
import { v4 as uuidv4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade, Thumbs } from "swiper";
import { regText } from "../../../../commons/libraries/utill";

export default function TodaySlide() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
  const { data, onRefetchCafes } = useFetchCafes();

  useEffect(() => {
    void getRandomDday();
    const tag = JSON.parse(localStorage.getItem("todayTag") ?? "{}").tag;
    onRefetchCafes(tag);
  }, []);

  return (
    <S.TodaySlideWrap>
      <S.TodaySlideInfoWrap>
        <Swiper
          modules={[EffectFade, Thumbs]}
          effect={"fade"}
          loop={true}
          slidesPerView={1}
          touchRatio={1}
          draggable={true}
          allowTouchMove={true}
          onSwiper={(swiper: SwiperCore) => setThumbsSwiper(swiper)}
          breakpoints={{
            768: {
              touchRatio: 1,
              allowTouchMove: false,
            },
          }}
        >
          {data?.fetchCafes.map((el) => (
            <SwiperSlide key={el?.id}>
              <Link href={`/cafe/${el?.id}`}>
                <a>
                  <S.ImageWrap>
                    <img
                      src={
                        el?.thumbNail ??
                        "/images/commons/img_cafe_preparing.png"
                      }
                    />
                  </S.ImageWrap>
                  <S.InfoWrap>
                    <div>
                      <Text size="32" fontColor="white" weight="700">
                        {el?.owner.brandName}
                      </Text>
                    </div>
                    <S.InfoContents>
                      <Text size="16" fontColor="white" weight="500">
                        {regText(el?.cafeinfo)}
                      </Text>
                    </S.InfoContents>
                    <div>
                      <Text size="16" fontColor="white" weight="500">
                        {el?.cafeAddr}
                      </Text>
                    </div>
                    <S.TagWrap>
                      {el?.cafeTag?.map((cur, idx) => (
                        <Tag key={cur.id} size="sm">
                          {cur.tagName}
                        </Tag>
                      ))}
                    </S.TagWrap>
                  </S.InfoWrap>
                </a>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.TodaySlideInfoWrap>
      <S.TodaySlideListsWrap>
        <Swiper
          modules={[Thumbs, Autoplay]}
          slidesPerView={"auto"}
          spaceBetween={40}
          loop={true}
          loopedSlides={3}
          thumbs={{ swiper: thumbsSwiper }}
          autoplay={{ delay: 2000 }}
        >
          {data?.fetchCafes.map((el) => (
            <SwiperSlide key={uuidv4()}>
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
            </SwiperSlide>
          ))}
        </Swiper>
      </S.TodaySlideListsWrap>
    </S.TodaySlideWrap>
  );
}
