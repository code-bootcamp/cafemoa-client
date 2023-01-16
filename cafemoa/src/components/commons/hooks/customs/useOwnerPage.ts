import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { infoUserState } from "../../../../commons/stores";

export const useOwnerPage = () => {
  const router = useRouter();
  const [infoUser] = useRecoilState(infoUserState);
  useEffect(() => {
    if (infoUser?.fetchOwnerLoggedIn === undefined) return;
    if (router.asPath === "/") {
      if (!infoUser?.fetchOwnerLoggedIn.is_main) {
        void router.push(`/mypage/owner/${infoUser?.fetchOwnerLoggedIn?.id}`);
      }
    }
  }, [infoUser, router]);

  useEffect(() => {
    if (infoUser?.fetchOwnerLoggedIn === undefined) return;
    console.log(router.pathname);
    if (
      !infoUser.fetchOwnerLoggedIn.is_cafeInform &&
      router.pathname !== "/mypage/owner/[ownerId]/cafeInform"
    ) {
      void router.push(
        `/mypage/owner/${infoUser.fetchOwnerLoggedIn.id}/cafeInform`
      );
    }
  }, [infoUser, router.pathname]);
};
