import { Image } from "antd";
import { useFetchCafeInform } from "../../../commons/hooks/queries/useFetchCafeInform";
import Masonry from "react-masonry-component";
import * as S from "./CafeDetail.styles";

export default function CafeDetailPhoto() {
  const { data } = useFetchCafeInform();
  return (
    <>
      <S.OwnerImageContainer>
        <Masonry>
          {data?.fetchCafeInform.cafeImage.map((el) => (
            <S.OwnerImageWrapper key={el.id}>
              <Image src={`https://storage.googleapis.com/${el.cafe_image}`} />
            </S.OwnerImageWrapper>
          ))}
        </Masonry>
      </S.OwnerImageContainer>
    </>
  );
}
