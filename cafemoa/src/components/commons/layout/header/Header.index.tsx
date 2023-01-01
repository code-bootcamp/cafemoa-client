import { SearchOutlined } from "@ant-design/icons";
import Link from "next/link";
import * as S from "./Header.styles";
import { RiMenu3Fill } from "react-icons/ri";
import { Drawer } from "antd";
import { useState } from "react";
import CafeSearchModal from "../../../units/cafesearch/CafeSearchModal.index";
import Text from "../../text/01/Text01.index";

export default function HeaderLayout() {
  const [isDrawerOpen, setiIsDrawerOpen] = useState<boolean>(false);
  const onClickDrawer = () => {
    setiIsDrawerOpen((prev) => !prev);
  };

  const { ModalComponent, onClickIsModalOpen } = CafeSearchModal();

  const onClose = () => {
    setiIsDrawerOpen((prev) => !prev);
  };
  return (
    <>
      <ModalComponent
        title={`가까운 매장을 찾아보세요`}
        text={`스탬프 적립을 위해서 \n 가맹주 비밀번호를 입력해주세요.`}
        hasInput={true}
        status="write"
        // buttons={
        //   <>
        //     <button color="lightBeige" onClick={onClickIsModalOpen}>
        //       <Text size="24" fontColor="gray">
        //         취소
        //       </Text>
        //     </button>
        //     <button color="beige">
        //       <Text size="24">확인</Text>
        //     </button>
        //   </>
        // }
      ></ModalComponent>
      <S.HeaderWrap>
        <S.HeaderInner>
          <S.Logo>
            <Link href="/">
              <a>
                <img src="/images/commons/logo.png" />
              </a>
            </Link>
          </S.Logo>
          <S.Utiles>
            <S.SearchBtn onClick={onClickIsModalOpen}>
              <SearchOutlined />
            </S.SearchBtn>
            <S.MenuBtn onClick={onClickDrawer}>
              <RiMenu3Fill />
            </S.MenuBtn>
          </S.Utiles>
        </S.HeaderInner>
      </S.HeaderWrap>
      <Drawer
        title="Drawer with extra actions"
        placement="right"
        open={isDrawerOpen}
        onClose={onClose}
        width={500}
        key="right"
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
}
