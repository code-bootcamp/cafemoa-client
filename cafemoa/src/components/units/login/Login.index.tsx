import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";
import { useUserLogin } from "../../commons/hooks/mutation/useUserLogin";
import Input02 from "../../commons/input/02/Input02.index";
import Text from "../../commons/text/01/Text01.index";
import * as S from "./Login.styles";

interface IFormLogin {
  email: string;
  password: string;
}

export default function Login() {
  const router = useRouter();
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [bounce, setBounce] = useState("right");
  const [userLogin] = useUserLogin();
  const { register, handleSubmit, formState } = useForm({
    // resolver: yupResolver(ProductSchema),
    mode: "onChange",
  });

  const onCLickPartner = (dir: string) => () => {
    setBounce(dir);
  };
  // console.log(bounce);

  // 일반회원 로그인
  const onClickUserLogin = async (data: IFormLogin) => {
    console.log(data);

    try {
      const result = await userLogin({
        variables: {
          ...data,
        },
      });

      console.log(result.data?.userLogin);
      const accessToken = result.data?.userLogin;

      if (accessToken === undefined) {
        Modal.warning({
          content: "로그인 후 이용해주세요.",
        });
        return;
      }

      setAccessToken(accessToken);
      Modal.success({
        content: "환영합니다! 카페모아입니다!",
        afterClose() {
          void router.push("/cafe");
        },
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  // 파트너사 로그인
  const onClickParterLogin = () => {};

  // 비밀번호 찾기
  const onClickFindPw = () => {};

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
              <S.FormTitle>
                <Text size="32" weight="500">
                  {bounce === "left" ? "파트너사 로그인" : "일반회원 로그인"}
                </Text>
              </S.FormTitle>
              <form
                onSubmit={
                  bounce === "left"
                    ? handleSubmit(onClickParterLogin)
                    : handleSubmit(onClickUserLogin)
                }
              >
                <div>
                  <S.FormsField>
                    <Input02
                      type="text"
                      name="email"
                      register={register("email")}
                    />
                  </S.FormsField>
                  <S.FormsField>
                    <Input02
                      type="password"
                      name="password"
                      register={register("password")}
                    />
                  </S.FormsField>
                </div>
                <S.FormsButtonsWrapper>
                  <S.FindPassword type="button" onClick={onClickFindPw}>
                    <Text size="16" weight="300" fontColor="gray">
                      비밀번호를 잊으셨나요?
                    </Text>
                  </S.FindPassword>
                  <S.LoginButton color="brown">
                    <Text size="20" weight="300" fontColor="white">
                      로그인
                    </Text>
                  </S.LoginButton>
                </S.FormsButtonsWrapper>
              </form>
            </S.RegistForms>
          </S.FormsContainer>
        </S.LoginContainer>
      </S.ContainerWrapper>
    </S.Wrapper>
  );
}
