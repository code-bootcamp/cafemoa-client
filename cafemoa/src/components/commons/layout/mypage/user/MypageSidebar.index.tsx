import Link from "next/link";
import { AiOutlineSetting } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { infoUserState } from "../../../../../commons/stores";
import Text from "../../../text/01/Text01.index";
import Users01 from "../../../user/01/Users01.index";
import * as S from "./MypageSidebar.styles";

interface ILayoutProps {
  children: JSX.Element;
}

export default function MypageSidebarLayout(props: ILayoutProps) {
  const [infoUser] = useRecoilState(infoUserState);
  const userId = infoUser?.fetchUser?.id;

  return (
    <>
      <S.ProfileWrapper>
        <button>
          {infoUser?.fetchUser?.profileImage !== undefined ? (
            <Link href={`/mypage/user/${String(userId)}/edit`}>
              <a>
                <Users01
                  size="lg"
                  image={`https://storage.googleapis.com/${infoUser?.fetchUser?.profileImage}`}
                >
                  <>
                    <S.SettingIcon>
                      <AiOutlineSetting />
                    </S.SettingIcon>
                  </>
                </Users01>
              </a>
            </Link>
          ) : (
            <Users01 size="lg"></Users01>
          )}
        </button>
        <S.UserName>
          <Text size="32" weight="700">
            {infoUser?.fetchUser?.nickname}
          </Text>
        </S.UserName>
        <div>{props.children}</div>
      </S.ProfileWrapper>
    </>
  );
}
