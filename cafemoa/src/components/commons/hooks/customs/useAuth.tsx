import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { getAccessToken } from "../../../../commons/libraries/getAccessToken";
import { accessTokenState, infoUserState } from "../../../../commons/stores";

const AUTH_PAGE = [
  {
    path: "/mypage/user",
    errorMsg: "회원 로그인이 필요한 페이지입니다.",
    sendPath: "/login",
    isUser: true,
  },
  {
    path: "/mypage/owner",
    errorMsg: "가맹주 로그인이 필요한 페이지입니다.",
    sendPath: "/login?type=owner",
    isUser: false,
  },
];

// eslint-disable-next-line react/display-name
export const useAuth = () => {
  const [accessToken] = useRecoilState(accessTokenState);
  const [infoUser] = useRecoilState(infoUserState);
  const router = useRouter();

  const [errorMsg, setErrorMsg] = useState<string>("");
  const [sendPath, setSendPath] = useState<string>("/login");
  const [checkAuth, setCheckAuth] = useState<boolean>(false);
  const [checkUserPage, setCheckUserPage] = useState<boolean>(true);

  const ErrorModal = (content: string) => {
    Modal.error({
      afterClose: () => {
        void router.push(sendPath);
      },
      centered: true,
      content,
    });
  };

  useEffect(() => {
    const catchAuth = AUTH_PAGE.filter((el) => {
      return router.asPath.includes(el.path);
    });
    console.log(catchAuth.length);
    if (catchAuth?.length > 0) {
      setErrorMsg(catchAuth[catchAuth?.length - 1].errorMsg);
      setCheckUserPage(catchAuth[catchAuth?.length - 1].isUser);
      setSendPath(catchAuth[catchAuth?.length - 1].sendPath);
      setCheckAuth(true);
    }
    return () => {
      setErrorMsg("");
      setCheckUserPage(true);
      setCheckAuth(false);
    };
  }, [router]);

  useEffect(() => {
    if (!checkAuth) return;
    console.log(accessToken === "" || accessToken === undefined);
    if (accessToken === "" || accessToken === undefined) {
      console.log("여기니?");
      void getAccessToken().then((newAccessToken) => {
        if (newAccessToken === undefined) {
          void ErrorModal(errorMsg);
        }
      });
    } else {
      if (checkUserPage && infoUser?.fetchUser === undefined) {
        void ErrorModal(errorMsg);
      } else if (!checkUserPage && infoUser?.fetchOwnerLoggedIn === undefined) {
        void ErrorModal(errorMsg);
      }
    }
  }, [checkAuth]);
};
