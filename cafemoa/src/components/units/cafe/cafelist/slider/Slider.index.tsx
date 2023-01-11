import { useState } from "react";
import { useFetchBestCafe } from "../../../../commons/hooks/queries/useFetchBestCafes";
import Text from "../../../../commons/text/01/Text01.index";
import Tag from "../../../../commons/text/02/Text02.index";
import * as S from "./Slider.Styles";

export default function SlickSlider() {
  const { data } = useFetchBestCafe();
  const [activeIdx, setActiveIdx] = useState(0);
  const settings = {
    infinite: true,
    autoplay: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  console.log(data?.fetchBestCafe);
  return (
    <div>
      <S.StyledSlider {...settings} afterChange={(idx) => setActiveIdx(idx)}>
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
      </S.StyledSlider>
    </div>
  );
}
