import { SearchOutlined } from "@ant-design/icons";
import Link from "next/link";
import * as S from "./Header.styles";
import { RiMenu3Fill } from "react-icons/ri";
import { Drawer, Modal } from "antd";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CafeSearchModal from "../../../units/cafesearch/CafeSearchModal.index";
import Text from "../../text/01/Text01.index";
import { AiOutlineUser } from "react-icons/ai";
import { infoUserState } from "../../../../commons/stores";
import { useRecoilState } from "recoil";
import { useUserLogout } from "../../hooks/mutations/useUserLogout";
import { IoMdExit } from "react-icons/io";
import Input01 from "../../input/01/Input01.index";
import MessageModal from "../../modal/message/MessageModal.index";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
import { MediumBtn } from "../../../../commons/styles/commonStyles";

const GNB_MENUS = [
  {
    path: "/cafe",
    label: "카페모아",
  },
  {
    path: "/review",
    label: "리뷰모아",
  },
];

export default function HeaderLayout() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isDrawerOpen, setiIsDrawerOpen] = useState<boolean>(false);
  const [infoUser] = useRecoilState(infoUserState);
  const { userLogoutSubmit } = useUserLogout();
  // const { ModalComponent, setIsModalOpen, onClickIsModalOpen } = MessageModal();
  // const { ModalComponent } = CafeSearchModal();
  // const { register, setValue, watch, handleSubmit } = useForm({
  //   mode: "onChange",
  // });
  const onClickIsModalOpen = () => {
    // console.log(userPhone);
    setIsModalOpen((prev) => !prev);
  };

  // const onClickIsModalOpen = () => {
  //   setIsModalOpen((prev) => !prev);
  // };
  const onClickDrawer = () => {
    setiIsDrawerOpen((prev) => !prev);
  };

  const onClose = () => {
    setiIsDrawerOpen((prev) => !prev);
  };
  return (
    <>
      {/* <ModalComponent
        title={`가까운 매장을 찾아보세요`}
        text={`스탬프 적립을 위해서 \n 가맹주 비밀번호를 입력해주세요.`}
        hasInput={true}
        status="write"
      ></ModalComponent> */}
      {/* <ModalComponent
        title={`매장을 검색해보세요!`}
        text={`스탬프 적립을 위해서 \n 가맹주 비밀번호를 입력해주세요.`}
        status="write"
        buttons={
          <>
            <ModalButton color="lightBeige" onClick={onClickIsModalOpen}>
              <Text size="24" fontColor="gray">
                취소
              </Text>
            </ModalButton>
            <ModalButton type="submit" color="beige">
              <Text size="24">확인</Text>
            </ModalButton>
          </>
        }
      >
        <ModalFromWrap>
          <CafeSearchModal />
        </ModalFromWrap>
      </ModalComponent> */}
      <S.ModalWrap open={isModalOpen} footer={null} centered={true}>
        <CafeSearchModal />
      </S.ModalWrap>
      <S.HeaderWrap>
        <S.HeaderInner>
          <S.Logo>
            <Link href="/">
              <a>
                <img src="/images/commons/logo.png" />
              </a>
            </Link>
          </S.Logo>
          <S.MenuWrap>
            {GNB_MENUS.map((el) => (
              <Link href={el.path} key={uuidv4()}>
                <a>
                  <Text size="20" weight="700">
                    {el.label}
                  </Text>
                </a>
              </Link>
            ))}
          </S.MenuWrap>
          <S.Utiles>
            <S.SearchBtn onClick={onClickIsModalOpen}>
              <SearchOutlined />
            </S.SearchBtn>
            <S.MenuBtn onClick={onClickDrawer}>
              <RiMenu3Fill />
            </S.MenuBtn>
            <Link
              href={
                infoUser === undefined
                  ? "/login"
                  : `/mypage/user/${String(infoUser?.fetchUser?.id)}`
              }
            >
              <S.MyPageBtn>
                <AiOutlineUser />
                <Text size="14">
                  {infoUser === undefined
                    ? "로그인"
                    : infoUser?.fetchUser !== undefined
                    ? `${infoUser?.fetchUser?.name ?? ""}님`
                    : `${infoUser?.fetchOwnerLoggedIn?.name ?? ""}님`}
                </Text>
              </S.MyPageBtn>
            </Link>
            {infoUser !== undefined && (
              <S.LogoutBtn title="로그아웃" onClick={userLogoutSubmit}>
                <IoMdExit />
              </S.LogoutBtn>
            )}
          </S.Utiles>
        </S.HeaderInner>
      </S.HeaderWrap>
      <Drawer
        title="Drawer with extra actions"
        placement="right"
        open={isDrawerOpen}
        onClose={onClose}
        width={320}
        key="right"
      >
        {GNB_MENUS.map((el) => (
          <div key={uuidv4()}>
            <Link href={el.path}>
              <a>
                <Text size="20" weight="700">
                  {el.label}
                </Text>
              </a>
            </Link>
          </div>
        ))}
      </Drawer>
    </>
  );
}
