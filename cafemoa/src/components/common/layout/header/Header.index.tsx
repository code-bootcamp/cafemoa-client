import { SearchOutlined } from "@ant-design/icons";
import Link from "next/link";
import * as S from "./Header.styles";
import { RiMenu3Fill } from "react-icons/ri";
import { Drawer } from "antd";
import { useState } from "react";

export default function HeaderLayout() {
  const [isDrawerOpen, setiIsDrawerOpen] = useState<boolean>(false);
  const onClickDrawer = () => {
    setiIsDrawerOpen((prev) => !prev);
  };

  const onClose = () => {
    setiIsDrawerOpen((prev) => !prev);
  };
  return (
    <>
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
            <S.SearchBtn>
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
