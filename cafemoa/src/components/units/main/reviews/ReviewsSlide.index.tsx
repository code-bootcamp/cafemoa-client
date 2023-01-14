import Link from "next/link";
import Text from "../../../commons/text/01/Text01.index";
import { v4 as uuidv4 } from "uuid";
import * as S from "./ReviewsSlide.styles";
import Tag from "../../../commons/text/02/Text02.index";
import Slider, { Settings } from "react-slick";
import Card01 from "../../../commons/card/01/Card01.index";
import Users01 from "../../../commons/user/01/Users01.index";
import { GetDate } from "../../../../commons/libraries/utill";
import { useFetchCommentsAll } from "../../../commons/hooks/queries/useFetchCommentsAll";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ReviewsSlide() {
  const { data } = useFetchCommentsAll();
  // console.log(data);
  return (
    <S.TodaySlideListsWrap>
      <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={40}
        modules={[Autoplay]}
        autoplay={{ delay: 2000 }}
        touchRatio={1}
        draggable={true}
        allowTouchMove={true}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
        }}
      >
        {data?.fetchCommentsAll.map((el) => (
          <SwiperSlide key={uuidv4()}>
            <Link href={`/cafe/${el.id}`}>
              <a>
                <Card01
                  imageUrl={`https://storage.googleapis.com/${el.cafeinfo.thumbNail}`}
                >
                  <div>
                    <Users01
                      image={el.user.profileImage}
                      name={el.user.nickname}
                      size="sm"
                    />
                    <S.CafeName>
                      <Text size="24" weight="500">
                        {el.cafeinfo.owner.brandName}
                      </Text>
                    </S.CafeName>
                    <S.ReviewContent>
                      <Text size="16" weight="300">
                        {el.reply}
                      </Text>
                    </S.ReviewContent>
                    <S.ReviewTag>
                      {el.cafeinfo.cafeTag.map((el, idx) => (
                        <Tag key={idx} size="sm">
                          {el.tagName}
                        </Tag>
                      ))}
                    </S.ReviewTag>
                    <S.ReviewDate>
                      <Text size="14" weight="300" fontColor="gray">
                        {GetDate(el.time)}
                      </Text>
                    </S.ReviewDate>
                  </div>
                </Card01>
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.TodaySlideListsWrap>
  );
}
