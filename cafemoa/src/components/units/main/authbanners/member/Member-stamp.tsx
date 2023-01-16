import Box01 from "../../../../commons/box/01/Box01.index";
import Text from "../../../../commons/text/01/Text01.index";
import { TfiStamp } from "react-icons/tfi";
import * as S from "./Member.styles";
import { GetStamp } from "../../../../../commons/libraries/utill";
import { useFetchUserStamps } from "../../../../commons/hooks/queries/useFetchUserStamps";
import Link01 from "../../../../commons/link/01/Link01.index";
import { Swiper, SwiperSlide } from "swiper/react";

interface IMemberStampProps {
  infoUserId?: string;
}

export default function MemberStamp(props: IMemberStampProps) {
  const { data } = useFetchUserStamps();
  return (
    <S.SlideWrap>
      <div style={{ textAlign: "right", marginBottom: "8px" }}>
        <Link01
          href={`mypage/user/${String(props.infoUserId)}/mystamp`}
          size="sm"
        >
          <Text size="14">자세히 보기</Text>
        </Link01>
      </div>

      <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{ delay: 2000 }}
        breakpoints={{
          540: {
            slidesPerView: 2,
          },
        }}
      >
        {data?.fetchUserStamps?.map((el, idx) => (
          <SwiperSlide key={el.id}>
            <Box01 styles={{ padding: "16px", display: "flex" }}>
              <S.BoxIconWrap>
                <TfiStamp />
              </S.BoxIconWrap>
              <S.BoxTextWrap>
                <S.CafeName>{el.cafeInform.owner.brandName}</S.CafeName>
                <div>{GetStamp(el.count)} / 10</div>
              </S.BoxTextWrap>
            </Box01>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.SlideWrap>
  );
}
