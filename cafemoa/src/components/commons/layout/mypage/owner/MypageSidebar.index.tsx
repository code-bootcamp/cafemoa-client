import { useRecoilState } from "recoil";
import { infoUserState } from "../../../../../commons/stores";
import Text from "../../../text/01/Text01.index";
import * as S from "./MypageSidebar.styles";

interface ILayoutProps {
  children: JSX.Element;
}

export default function MypageSidebarLayout(props: ILayoutProps) {
  const [infoUser] = useRecoilState(infoUserState);
  const brandName = infoUser?.fetchOwnerLoggedIn?.brandName;
  return (
    <>
      <S.ProfileWrapper>
        <S.UserName>
          <Text size="32" weight="700">
            {brandName}
          </Text>
        </S.UserName>
        <div>{props.children}</div>
      </S.ProfileWrapper>
    </>
  );
}
