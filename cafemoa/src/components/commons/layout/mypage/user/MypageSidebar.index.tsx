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

  return (
    <>
      <S.ProfileWrapper>
        <button>
          {infoUser?.fetchUser?.profileImage !== undefined ? (
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
