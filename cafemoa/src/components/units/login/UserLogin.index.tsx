import { Modal } from "antd";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";
import { useUserLogin } from "../../commons/hooks/mutation/useUserLogin";
import Input02 from "../../commons/input/02/Input02.index";
import Text from "../../commons/text/01/Text01.index";
import * as S from "./Login.styles";
import { IFormLogin } from "./Login.types";

export default function UserLogin() {
  const router = useRouter();
  const [userLogin] = useUserLogin();
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const { register, handleSubmit, formState } = useForm({
    // resolver: yupResolver(ProductSchema),
    mode: "onChange",
  });

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
          void router.push("/");
        },
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return (
    <>
      <S.FormTitle>
        <Text size="32" weight="500">
          일반회원 로그인
        </Text>
      </S.FormTitle>
      <form onSubmit={handleSubmit(onClickUserLogin)}>
        <div>
          <S.FormsField>
            <Input02 type="text" name="email" register={register("email")} />
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
          <S.FindPassword type="button">
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
    </>
  );
}
