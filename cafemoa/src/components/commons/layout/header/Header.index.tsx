import { SearchOutlined } from "@ant-design/icons";
import Link from "next/link";
import * as S from "./Header.styles";
import { RiMenu3Fill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CafeSearchModal from "../../../units/cafesearch/CafeSearchModal.index";
import Text from "../../text/01/Text01.index";
import { AiOutlineUser } from "react-icons/ai";
import { infoUserState } from "../../../../commons/stores";
import { useRecoilState } from "recoil";
import { useUserLogout } from "../../hooks/mutations/useUserLogout";
import { IoMdExit } from "react-icons/io";
import Users01 from "../../user/01/Users01.index";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [infoUser] = useRecoilState(infoUserState);

  const { userLogoutSubmit } = useUserLogout();

  const onClickIsModalOpen = () => {
    // console.log(userPhone);
    setIsModalOpen((prev) => !prev);
  };
  const onClickDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const onClose = () => {
    setIsDrawerOpen((prev) => !prev);
  };
  useEffect(() => {
    setIsDrawerOpen(false);
    setIsModalOpen(false);
  }, [router]);

  return (
    <>
      {isModalOpen && (
        <S.ModalWrap
          open={true}
          footer={null}
          centered={true}
          onCancel={() => {
            setIsModalOpen(false);
          }}
        >
          <CafeSearchModal />
        </S.ModalWrap>
      )}
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
                // infoUser === undefined
                //   ? "/login"
                //   : `/mypage/user/${String(infoUser?.fetchUser?.id)}`

                infoUser === undefined
                  ? "/login"
                  : infoUser?.fetchUser === undefined
                  ? `/mypage/owner/${String(infoUser?.fetchOwnerLoggedIn?.id)}`
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
      <S.DrawerWrap
        title="카페모아"
        placement="right"
        open={isDrawerOpen}
        onClose={onClose}
        width={320}
        key="right"
      >
        {infoUser === undefined ? (
          <S.DrawerLogin>
            <Link href={"/login"}>
              <a>
                <Text size="20" weight="700">
                  로그인
                </Text>
              </a>
            </Link>
          </S.DrawerLogin>
        ) : infoUser?.fetchUser !== undefined ? (
          <>
            <S.DrawerProfile>
              <Users01
                size="lg"
                image={`${infoUser?.fetchUser?.profileImage}`}
              ></Users01>
              <S.DrawerName>
                <Text size="20" weight="500">
                  {infoUser.fetchUser.nickname}님
                </Text>
              </S.DrawerName>
            </S.DrawerProfile>
            <S.DrawerButtonWrap>
              <S.DrawerMypage>
                <S.MypageButton title="마이페이지" color="beige">
                  <Link
                    href={`/mypage/user/${String(infoUser?.fetchUser?.id)}`}
                  >
                    <a>
                      <Text size="20" weight="500">
                        마이페이지
                      </Text>
                    </a>
                  </Link>
                </S.MypageButton>
              </S.DrawerMypage>
              <S.DrawerLogout>
                <S.MypageButton
                  title="로그아웃"
                  color="beige"
                  onClick={userLogoutSubmit}
                >
                  <Text size="20" weight="500">
                    로그아웃
                  </Text>
                </S.MypageButton>
              </S.DrawerLogout>
            </S.DrawerButtonWrap>
          </>
        ) : (
          <>
            <S.DrawerProfile>
              <S.DrawerOwner>
                <Text size="20" weight="500">
                  {infoUser.fetchOwnerLoggedIn?.name}님
                </Text>
                <Text size="20" weight="300">
                  운영 카페 : {infoUser.fetchOwnerLoggedIn?.brandName}
                </Text>
              </S.DrawerOwner>
            </S.DrawerProfile>
            <S.DrawerButtonWrap>
              <S.DrawerMypage>
                <S.MypageButton title="마이페이지" color="beige">
                  <Link
                    href={`/mypage/owner/${String(
                      infoUser?.fetchOwnerLoggedIn?.id
                    )}`}
                  >
                    <a>
                      <Text size="20" weight="500">
                        마이페이지
                      </Text>
                    </a>
                  </Link>
                </S.MypageButton>
              </S.DrawerMypage>
              <S.DrawerLogout>
                <S.MypageButton
                  title="로그아웃"
                  color="beige"
                  onClick={userLogoutSubmit}
                >
                  <Text size="20" weight="500">
                    로그아웃
                  </Text>
                </S.MypageButton>
              </S.DrawerLogout>
            </S.DrawerButtonWrap>
          </>
        )}
        <S.DrawerMenuWrap>
          {GNB_MENUS.map((el) => (
            <S.DrawerWMenu key={uuidv4()}>
              <Link href={el.path}>
                <a>
                  <Text size="20" weight="700">
                    {el.label}
                  </Text>
                </a>
              </Link>
            </S.DrawerWMenu>
          ))}
        </S.DrawerMenuWrap>
      </S.DrawerWrap>
    </>
  );
}
