import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { infoUserState } from "../../../../../../commons/stores";
import Link01 from "../../../../link/01/Link01.index";
import Text from "../../../../text/01/Text01.index";
import * as S from "./SidebarMenu.styles";
import { v4 as uuidv4 } from "uuid";

const MYPAGE_MENU = [
  { label: "카페 정보 수정", path: "cafeInform" },
  { label: "내 개인정보 수정", path: "edit" },
  { label: "적립 회원 점검", path: "ownercheck" },
  { label: "스탬프 적립", path: "stampsave" },
];

interface ISidebarData {
  asPath: string;
}

export default function SidebarMenuLayout(props: ISidebarData) {
  const [activeLink, setActivedLink] = useState<string>();
  const [infoUser] = useRecoilState(infoUserState);
  const ownerId = infoUser?.fetchOwnerLoggedIn?.id;
  useEffect(() => {
    if (props === undefined) return;
    setActivedLink(props.asPath);
  }, [props]);

  return (
    <>
      <S.UserMainArea>
        {MYPAGE_MENU.map((el, idx) => (
          <Link01
            href={`/mypage/owner/${String(ownerId)}/${el.path}`}
            key={uuidv4()}
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
