import { useRef } from "react";
import { useForm } from "react-hook-form";
import HeroWrap from "../../../../commons/hero/HeroWrap.index";
import { useDeleteUnusualStamp } from "../../../../commons/hooks/mutations/useDeleteUnusualStamp";
import { useFetchUnusualStamps } from "../../../../commons/hooks/queries/useFetchUnusalStamps";
import Input01 from "../../../../commons/input/01/Input01.index";
import MessageModal from "../../../../commons/modal/message/MessageModal.index";
import Text from "../../../../commons/text/01/Text01.index";
import * as S from "./StampCheck.styles";
import MypageSidebarLayout from "../../../../commons/layout/mypage/owner/MypageSidebar.index";
import SidebarMenuLayout from "../../../../commons/layout/mypage/owner/sidebarMenu/SidebarMenu.index";
import { useRouter } from "next/router";
import { getStampSaveDate } from "../../../../../commons/libraries/utill";

interface IFormDeleteUnusualStampData {
  ownerpassword: string;
  stamphistoryId: string;
}

export default function StampCheck() {
  const router = useRouter();
  const { data } = useFetchUnusualStamps();
  const { deleteUnusualStampSubmit } = useDeleteUnusualStamp();
  const inputRef = useRef<HTMLInputElement>(null);
  const { ModalComponent, setIsModalOpen, onClickIsModalOpen } = MessageModal();
  const { register, setValue, watch, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues: {
      cafeId: "",
      ownerpassword: "",
    },
  });
  const onStampDelete = () => {
    inputRef.current?.click();
  };
  const onDeleteStamp = (cafeId: string) => () => {
    setValue("cafeId", cafeId);
    setIsModalOpen(true);
  };
  const deleteStampSubmit = async (data: IFormDeleteUnusualStampData) => {
    console.log(data);
    void deleteUnusualStampSubmit(data);
  };

  console.log(data);
  return (
    <>
      <HeroWrap
        imageUrl="/images/owner/Owner01.jpeg"
        title="마이 모아"
        subject="마이페이지 마이페이지 마이페이지 마이페이지 마이페이지 마이페이지 마이페이지"
      ></HeroWrap>
      <S.StampCheckContainer>
        <div>
          <MypageSidebarLayout>
            <SidebarMenuLayout asPath={router.asPath} />
          </MypageSidebarLayout>
        </div>
        <S.NotificationContainer>
          <S.Title>
            <Text size="28" weight="500" fontColor="black">
              스탬프를 한번에 받은 회원님들을 모아봤어요!
            </Text>
          </S.Title>
          {data?.fetchUnusualStamps.map((el) => (
            <S.NotificationWrapper key={el.id}>
              <div>
                <Text size="20" weight="500">
                  {el.user.name}님이&nbsp;
                </Text>
                <Text size="20" weight="300">
                  {getStampSaveDate(el.createdAt)}
                </Text>
                <Text size="20" weight="500">
                  에 스탬프&nbsp;{el.count.toString()}
                </Text>
                <Text size="20" weight="500">
                  개를 적립하였습니다.
                </Text>
              </div>
              <S.ConfirmBtn color="brown" onClick={onDeleteStamp(el.id)}>
                <Text size="16" fontColor="white">
                  확인
                </Text>
              </S.ConfirmBtn>
            </S.NotificationWrapper>
          ))}
        </S.NotificationContainer>
      </S.StampCheckContainer>
      <ModalComponent
        title={`스탬프 적립`}
        text={`스탬프 적립을 위해서 \n 가맹주 비밀번호를 입력해주세요.`}
        status="write"
        buttons={
          <>
            <S.ModalButton color="lightBeige" onClick={onClickIsModalOpen}>
              <Text size="24" fontColor="gray">
                취소
              </Text>
            </S.ModalButton>
            <S.ModalButton type="submit" color="beige" onClick={onStampDelete}>
              <Text size="24">확인</Text>
            </S.ModalButton>
          </>
        }
      >
        <S.ModalFromWrap onSubmit={handleSubmit(deleteStampSubmit)}>
          <Input01
            type="text"
            textAlign="center"
            placeHolder="가맹주 비밀번호 입력"
            register={register("ownerpassword")}
          />
          <input type="submit" hidden ref={inputRef} />
        </S.ModalFromWrap>
      </ModalComponent>
    </>
  );
}
