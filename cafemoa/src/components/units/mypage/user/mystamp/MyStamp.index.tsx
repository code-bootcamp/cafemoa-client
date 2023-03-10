import * as S from "./MyStamp.styles";
import { TbTrash } from "react-icons/tb";
import { CgCoffee } from "react-icons/cg";
import HeroWrap from "../../../../commons/hero/HeroWrap.index";
import Text from "../../../../commons/text/01/Text01.index";
import Select01 from "../../../../commons/select/01/Select01.index";
import Box01 from "../../../../commons/box/01/Box01.index";
import { useFetchUserStamps } from "../../../../commons/hooks/queries/useFetchUserStamps";
import { useEffect, useState } from "react";
import { useDeleteStamp } from "../../../../commons/hooks/mutations/useDeleteStamp";
import MypageSidebarLayout from "../../../../commons/layout/mypage/user/MypageSidebar.index";
import SidebarMenuLayout from "../../../../commons/layout/mypage/user/sidebarMenu/SidebarMenu.index";
import { useRouter } from "next/router";
import MessageModal from "../../../../commons/modal/message/MessageModal.index";
import { SELECT_VALUES02 } from "../../../../../commons/default/default";
import InfiniteScrollWrap from "../../../../commons/infiniteScroll/01/InfiniteScroll.index";

export default function MyStamp() {
  const router = useRouter();
  const { ModalComponent, setIsModalOpen, onClickIsModalOpen } = MessageModal();
  const [stampId, setStampId] = useState("");
  const [selectValue, setSelectValue] = useState<string | number>("");
  const { deleteStampSubmit } = useDeleteStamp();
  const { data, onSelectLocation, onHandleMore } = useFetchUserStamps();
  console.log(data);

  const onClickDeleteCoupon = (data: string) => () => {
    setStampId(data);
    setIsModalOpen(true);
  };

  const submitDeleteStamp = () => {
    setIsModalOpen(false);
    void deleteStampSubmit(stampId);
  };
  useEffect(() => {
    onSelectLocation(String(selectValue));
  }, [selectValue]);

  return (
    <>
      <ModalComponent
        title={`스탬프 삭제`}
        text={`해당 스탬프를 삭제 하시겠습니까?`}
        status="write"
        buttons={
          <>
            <S.ModalButton color="lightBeige" onClick={onClickIsModalOpen}>
              <Text size="24" fontColor="gray">
                취소
              </Text>
            </S.ModalButton>
            <S.ModalButton
              type="submit"
              color="beige"
              onClick={submitDeleteStamp}
            >
              <Text size="24">확인</Text>
            </S.ModalButton>
          </>
        }
      ></ModalComponent>
      <HeroWrap
        imageUrl="/images/review/review_hero01.png"
        title="마이모아"
        subject="내 정보를 한눈에 보기 쉽게 모아!"
      ></HeroWrap>
      <S.ContainerWrapper>
        <div>
          <MypageSidebarLayout>
            <SidebarMenuLayout asPath={router.asPath} />
          </MypageSidebarLayout>
        </div>
        <S.Container>
          <S.TitleWrapper>
            <Text size="32" weight="500">
              카페별 스탬프를 모아보세요!
            </Text>
          </S.TitleWrapper>
          <S.AreaWrapper>
            <S.MainArea>
              <Select01
                defaultText="지역"
                selectValue={SELECT_VALUES02}
                setSelectValue={setSelectValue}
              ></Select01>
            </S.MainArea>
            {/* <S.SubArea>
              <Select01
                defaultText="시/군/구"
                selectValue={SELECT_VALUES02}
                setSelectValue={setSelectValue}
              ></Select01>
            </S.SubArea>
            <S.Search color="beige">
              <Text size="14">검색</Text>
            </S.Search> */}
          </S.AreaWrapper>
          <S.StampContainer>
            <InfiniteScrollWrap onHandleMore={onHandleMore}>
              {data?.fetchUserStamps ? (
                data?.fetchUserStamps.map((el) => (
                  <S.StampWrapper key={el.id}>
                    <Box01>
                      <div>
                        <S.StampInfoWrapper>
                          <S.StampInfo>
                            <Text size="24" weight="500" fontColor="subColor01">
                              {el.cafeInform.owner.brandName}
                            </Text>
                            <Text size="16" weight="300" fontColor="gray">
                              {el.count}/10
                            </Text>
                          </S.StampInfo>
                          <S.IconWrap onClick={onClickDeleteCoupon(el.id)}>
                            <TbTrash />
                          </S.IconWrap>
                        </S.StampInfoWrapper>
                        <S.Stamp>
                          {new Array(el.count).fill(1).map((_, index) => (
                            <S.ValidStampWrap key={index}>
                              <CgCoffee />
                            </S.ValidStampWrap>
                          ))}
                          {new Array(10 - el.count).fill(1).map((_, index) => (
                            <S.IconWrap2 key={index}>
                              <CgCoffee key={index} />
                            </S.IconWrap2>
                          ))}
                        </S.Stamp>
                      </div>
                    </Box01>
                  </S.StampWrapper>
                ))
              ) : (
                <></>
              )}
            </InfiniteScrollWrap>
          </S.StampContainer>
        </S.Container>
      </S.ContainerWrapper>
    </>
  );
}
