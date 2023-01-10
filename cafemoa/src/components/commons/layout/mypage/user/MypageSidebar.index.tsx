import { AiOutlineSetting } from "react-icons/ai";
import Text from "../../../text/01/Text01.index";
import Users01 from "../../../user/01/Users01.index";
import * as S from "./MypageSidebar.styles";

interface ILayoutProps {
  children: JSX.Element;
}

export default function MypageSidebarLayout(props: ILayoutProps) {
  return (
    <>
      <S.ProfileWrapper>
        <button>
          <Users01 size="lg">
            <>
              <S.SettingIcon>
                <AiOutlineSetting />
              </S.SettingIcon>
            </>
          </Users01>
        </button>
        <S.UserName>
          <Text size="32" weight="700">
            예니
          </Text>
        </S.UserName>
        <div>{props.children}</div>
      </S.ProfileWrapper>
    </>
  );
}
