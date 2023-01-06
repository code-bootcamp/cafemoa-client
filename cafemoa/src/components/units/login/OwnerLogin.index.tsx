import { Modal } from "antd";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";
import { useOwnerLogin } from "../../commons/hooks/mutations/useOwnerLogin";
import Input02 from "../../commons/input/02/Input02.index";
import Text from "../../commons/text/01/Text01.index";
import * as S from "./Login.styles";
import { IFormLogin } from "./Login.types";

export default function OwnerLogin() {
  const router = useRouter();
  const [userLogin] = useOwnerLogin();
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const { register, handleSubmit } = useForm({
    // resolver: yupResolver(ProductSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onClickOwnerLogin = async (data: IFormLogin) => {
    console.log(data);

    try {
      const result = await userLogin({
        variables: {
          ...data,
        },
      });

      console.log(result.data?.ownerLogin);
      const accessToken = result.data?.ownerLogin;

      if (accessToken === undefined) {
        Modal.warning({
          content: "로그인 후 이용해주세요.",
        });
        return;
      }

      setAccessToken(accessToken);
      Modal.success({
        content: "환영합니다 가맹주님! 카페모아입니다!",
        afterClose() {
          void router.push("/mypage/owner");
        },
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickFindPW = () => {
    void router.push("/login/findpw");
  };

  return (
    <>
      <S.FormTitle>
        <Text size="32" weight="500">
          파트너사 로그인
        </Text>
      </S.FormTitle>
      <form onSubmit={handleSubmit(onClickOwnerLogin)}>
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
          <S.FindPassword type="button" onClick={onClickFindPW}>
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
