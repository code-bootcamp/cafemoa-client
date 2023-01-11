import { useFetchCafeInform } from "../../../commons/hooks/queries/useFetchCafeInform";
import * as S from "./CafeDetail.styles";

export default function CafeDetailPhoto() {
  const { data } = useFetchCafeInform();
  return (
    <>
      <S.OwnerImageContainer>
        {/* {data?.fetchCafeInform.cafeImage.map((el) => (
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
