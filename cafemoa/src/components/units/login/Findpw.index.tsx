import { useForm } from "react-hook-form";
import { useFindUserPwd } from "../../commons/hooks/mutations/useFindUserPwd";
import Input02 from "../../commons/input/02/Input02.index";
import Text from "../../commons/text/01/Text01.index";
import * as S from "./Findpw.styles";
import { IFormFindPassword } from "./Login.types";

export default function Findpw() {
  const [findUserPwd] = useFindUserPwd();
  const { register, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  const onClickFindpw = async (data: IFormFindPassword) => {
    console.log(data);

    const result = await findUserPwd({
      variables: {
        ...data,
      },
    });

    console.log(result);
  };

  return (
    <S.ContainerWrapper>
      <S.FindpwWrapper>
        <S.TitleWrapper>
          <Text size="24" weight="500">
            비밀번호 찾기
          </Text>
        </S.TitleWrapper>
        <form onSubmit={handleSubmit(onClickFindpw)}>
          <S.FindpwForms>
            <S.FindpwText>
              <Text size="16" weight="500">
                비밀번호를 찾으려는 이메일 주소를 입력해주세요.
              </Text>
            </S.FindpwText>

            <S.FindpwEmail>
              <Input02 type="text" name="email" register={register("email")} />
            </S.FindpwEmail>
          </S.FindpwForms>
          <S.BtnWrapper>
            <S.FindpwButton color="beige">
              <Text size="20" fontColor="gray">
                이메일로 비밀번호 전송하기
              </Text>
            </S.FindpwButton>
          </S.BtnWrapper>
        </form>
      </S.FindpwWrapper>
    </S.ContainerWrapper>
  );
}
