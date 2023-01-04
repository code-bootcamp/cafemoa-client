import Link from "next/link";
import Text from "../../../commons/text/01/Text01.index";
// import { v4 as uuidv4 } from "uuid";
import * as S from "./TodaySlide.styles";
import Tag from "../../../commons/text/02/Text02.index";
import Slider, { Settings } from "react-slick";
import Like01 from "../../../commons/like/01/Like01.index";

const settings: Settings = {
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 2,
  arrows: false,
  speed: 500,
  draggable: true,
};

export default function TodaySlide() {
  return (
    <S.TodaySlideWrap>
      <S.TodaySlideInfoWrap>
        <Link href="/">
          <a>
            <S.ImageWrap>
              <img src="/images/temp/temp04.png" />
            </S.ImageWrap>
            <S.InfoWrap>
              <div>
                <Like01 count={43} iconColor="white" fontColor="white" />
              </div>
              <div>
                <Text size="32" fontColor="white" weight="700">
                  카페명 입니다.
                </Text>
              </div>
              <div>
                <Text size="16" fontColor="white" weight="500">
                  카페 설명 입니다.카페 설명 입니다.카페 설명 입니다.카페 설명
                  입니다.카페 설명 입니다.카페 설명 입니다.카페 설명 입니다.카페
                  설명 입니다.카페 설명 입니다.카페 설명 입니다.
                </Text>
              </div>
              <div>
                <Tag size="sm">태그</Tag>
                <Tag size="sm">태그</Tag>
                <Tag size="sm">태그</Tag>
              </div>
            </S.InfoWrap>
          </a>
        </Link>
      </S.TodaySlideInfoWrap>
      <S.TodaySlideListsWrap>
        <Slider {...settings}>
          <S.SlideItem>
            <div>asd</div>
          </S.SlideItem>
          <S.SlideItem>
            <div>asd</div>
          </S.SlideItem>
          <S.SlideItem>
            <div>ads</div>
          </S.SlideItem>
        </Slider>
      </S.TodaySlideListsWrap>
    </S.TodaySlideWrap>
  );
}
