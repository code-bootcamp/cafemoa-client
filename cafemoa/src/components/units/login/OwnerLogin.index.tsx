import { Modal } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";
import { useOwnerLogin } from "../../commons/hooks/mutations/useOwnerLogin";
import Input02 from "../../commons/input/02/Input02.index";
import Link01 from "../../commons/link/01/Link01.index";
import Text from "../../commons/text/01/Text01.index";
import * as S from "./Login.styles";
import { IFormLogin } from "./Login.types";

export default function OwnerLogin() {
  const router = useRouter();
  const [ownerLogin] = useOwnerLogin();
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
      const result = await ownerLogin({
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
          <Link01 href="/login/findpw">
            <Text size="16" weight="300" fontColor="gray">
              비밀번호를 잊으셨나요?
            </Text>
          </Link01>
          <Link01 href={{ pathname: "/signup", query: { type: "owner" } }}>
            <Text size="16" weight="300" fontColor="gray">
              파트너 회원가입
            </Text>
          </Link01>
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
