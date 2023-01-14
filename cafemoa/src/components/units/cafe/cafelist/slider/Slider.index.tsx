import Link from "next/link";
import { useState } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useFetchBestCafe } from "../../../../commons/hooks/queries/useFetchBestCafes";
import Text from "../../../../commons/text/01/Text01.index";
import Tag from "../../../../commons/text/02/Text02.index";
import * as S from "./Slider.Styles";

export default function SlickSlider() {
  const { data } = useFetchBestCafe();
  return (
    <S.SwiperWrap>
      <Swiper
        loop={true}
        slidesPerView={1}
        loopedSlides={2}
        spaceBetween={40}
        centeredSlides={true}
        modules={[Autoplay]}
        autoplay={{ delay: 2000 }}
        touchRatio={1}
        draggable={true}
        allowTouchMove={true}
        breakpoints={{
          768: {
            slidesPerView: "auto",
          },
        }}
      >
        {data?.fetchBestCafe.map((el, idx) => (
          <SwiperSlide key={el.id}>
            <Link href={`/cafe/${el.id}`}>
              <a>
                <S.SlideWrapper>
                  <S.CafeImage>
                    <img src="/images/cafelist/Cafe2.jpeg" />
                  </S.CafeImage>
                  <S.CafeContent>
                    <div style={{ marginTop: 8, textAlign: "center" }}>
                      <div>
                        {el.cafeTag?.map((el, idx) => (
                          <Tag key={idx} size="md">
                            {el.tagName}
                          </Tag>
                        ))}
                      </div>
                      <div style={{ marginTop: 8 }}>
                        <Text size="24" weight="500">
                          {el.owner.brandName}
                        </Text>
                      </div>
                    </div>
                  </S.CafeContent>
                </S.SlideWrapper>
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <S.StyledSlider {...settings} afterChange={(idx) => setActiveIdx(idx)}>
        {data?.fetchBestCafe.map((el, idx) => (
          <S.SlideWrapper key={idx} isActive={activeIdx === idx - 1}>
            <S.CafeImage>
              <img src="/images/cafelist/Cafe2.jpeg" />
            </S.CafeImage>
            <S.CafeContent>
              {el.cafeTag?.map((el, idx) => (
                <Tag key={idx} size="md">
                  {el.tagName}
                </Tag>
              ))}
            </S.CafeContent>
            <S.CafeContent>
              <div style={{ marginTop: 30, marginLeft: 0 }}>
                <Text size="24" weight="500">
                  {el.owner.brandName}
                </Text>
              </div>
            </S.CafeContent>
          </S.SlideWrapper>
        ))}
      </S.StyledSlider> */}
    </S.SwiperWrap>
  );
}
