import { useState } from "react";
import Text from "../../commons/text/01/Text01.index";
import * as S from "./Login.styles";
import UserLogin from "./UserLogin.index";
import OwnerLogin from "./OwnerLogin.index";

export default function Login() {
  const [bounce, setBounce] = useState("right");

  const onCLickPartner = (dir: string) => () => {
    setBounce(dir);
  };

  return (
    <S.Wrapper>
      <S.ContainerWrapper>
        <S.LoginContainer>
          <S.OptionsContainer>
            <S.OptionsRegister>
              <div>
                <Text size="32" weight="500" fontColor="mainColor">
                  카페모아 <br />
                  파트너이신가요?
                </Text>
              </div>
              <S.OptionsDetail>
                <Text size="16" weight="300">
                  카페모아와 함께하는 파트너사라면 아래의 버튼을 눌러 로그인
                  하세요.
                </Text>
              </S.OptionsDetail>
              <S.OptionsButtonWrap>
                <S.LoginButton
                  color="brownLine"
                  onClick={onCLickPartner("left")}
                >
                  <Text size="20" fontColor="mainColor" weight="300">
                    파트너사 로그인
                  </Text>
                </S.LoginButton>
              </S.OptionsButtonWrap>
            </S.OptionsRegister>

            <S.OptionsRegister>
              <div>
                <Text size="32" weight="500" fontColor="mainColor">
                  카페모아 <br />
                  고객이신가요?
                </Text>
              </div>
              <S.OptionsDetail>
                <Text size="16" weight="300">
                  카페모아를 이용하는 고객이라면 아래의 버튼을 눌러 로그인
                  하세요.
                </Text>
              </S.OptionsDetail>

              <S.OptionsButtonWrap>
                <S.LoginButton
                  color="brownLine"
                  onClick={onCLickPartner("right")}
                >
                  <Text size="20" fontColor="mainColor" weight="300">
                    일반회원 로그인
                  </Text>
                </S.LoginButton>
              </S.OptionsButtonWrap>
            </S.OptionsRegister>
          </S.OptionsContainer>
          <S.FormsContainer dir={bounce}>
            <S.RegistForms>
              {bounce === "left" ? <OwnerLogin /> : <UserLogin />}
            </S.RegistForms>
          </S.FormsContainer>
        </S.LoginContainer>

        <S.MobileLWrapper>
          <S.MqFormsContainer>
            <S.RegistForms>
              <S.TapWrap
                defaultActiveKey="1"
                items={[
                  {
                    label: "일반회원",
                    key: "1",
                    children: <UserLogin />,
                  },
                  {
                    label: "파트너사",
                    key: "2",
                    children: <OwnerLogin />,
                  },
                ]}
              />
            </S.RegistForms>
          </S.MqFormsContainer>
        </S.MobileLWrapper>
      </S.ContainerWrapper>
    </S.Wrapper>
  );
}
