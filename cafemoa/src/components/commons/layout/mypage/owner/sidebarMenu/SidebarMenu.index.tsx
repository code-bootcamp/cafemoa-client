import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { infoUserState } from "../../../../../../commons/stores";
import Link01 from "../../../../link/01/Link01.index";
import Text from "../../../../text/01/Text01.index";
import * as S from "./SidebarMenu.styles";

const MYPAGE_MENU = [
  { label: "카페 정보 수정", path: "" },
  { label: "내 개인정보 수정", path: "" },
  { label: "적립 회원 점검", path: "ownercheck" },
  { label: "적립 페이지", path: "stampsave" },
];

export default function SidebarMenuLayout(props) {
  const [activeLink, setActivedLink] = useState<string>();
  const [infoUser] = useRecoilState(infoUserState); // owner로 바꿔야함
  const userId = infoUser?.fetchUser?.id; // owner로 바꿔야함

  useEffect(() => {
    if (props === undefined) return;
    setActivedLink(props.asPath);
  }, [props]);

  return (
    <>
      <S.UserMainArea>
        {MYPAGE_MENU.map((el, idx) => (
          <Link01
            href={`/mypage/owner/${String(userId)}/${el.path}`} //owner로 바꿔야함
            key={idx}
            active={activeLink?.includes(el.path)}
          >
            <Text size="18" weight="500">
              {el.label}
            </Text>
          </Link01>
        ))}
      </S.UserMainArea>
    </>
  );
}
