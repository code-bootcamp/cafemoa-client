import { useFetchCafeImage } from "../../../commons/hooks/queries/useFetchCafeImage";
import * as S from "./CafeDetail.styles";

export default function CafeDetailPhoto() {
  //   const { data } = useFetchCafeImage();
  return (
    <>
      <S.OwnerImageContainer>
        {/* {data?.fetchCafeImage.map((el) => (
          <S.OwnerImageWrapper key={el.id}>
            <img src={`https://storage.googleapis.com/${el.cafe_image}`} />
          </S.OwnerImageWrapper>
        ))} */}
        <S.OwnerImageWrapper>
          <img src="/images/cafedetail/CafeDetail01.jpeg" />
        </S.OwnerImageWrapper>
        <S.OwnerImageWrapper>
          <img src="/images/cafedetail/CafeDetail01.jpeg" />
        </S.OwnerImageWrapper>
        <S.OwnerImageWrapper>
          <img src="/images/cafedetail/CafeDetail01.jpeg" />
        </S.OwnerImageWrapper>
        <S.OwnerImageWrapper>
          <img src="/images/cafedetail/CafeDetail01.jpeg" />
        </S.OwnerImageWrapper>
      </S.OwnerImageContainer>
    </>
  );
}
