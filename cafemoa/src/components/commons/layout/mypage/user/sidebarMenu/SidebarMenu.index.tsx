import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { infoUserState } from "../../../../../../commons/stores";
import Link01 from "../../../../link/01/Link01.index";
import Text from "../../../../text/01/Text01.index";
import * as S from "./SidebarMenu.styles";

const MYPAGE_MENU = [
  { label: "내 스탬프 모아", path: "mystamp" },
  { label: "내 쿠폰 모아", path: "mycoupon" },
  { label: "내 찜카페 모아", path: "mypick" },
  { label: "내 리뷰 모아", path: "myreview" },
];

export default function SidebarMenuLayout(props) {
  const [activeLink, setActivedLink] = useState<string>();
  const [infoUser] = useRecoilState(infoUserState);
  const userId = infoUser?.fetchUser?.id;

  useEffect(() => {
    if (props === undefined) return;
    setActivedLink(props.asPath);
  }, [props]);

  return (
    <>
      <S.UserMainArea>
        {MYPAGE_MENU.map((el, idx) => (
          <Link01
            href={`/mypage/user/${String(userId)}/${el.path}`}
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
