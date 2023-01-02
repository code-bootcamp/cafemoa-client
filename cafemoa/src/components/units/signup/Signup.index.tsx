import { useForm } from "react-hook-form";
import useVerification from "../../commons/hooks/customs/verification/useVerification";
import Input02 from "../../commons/input/02/Input02.index";
import Text from "../../commons/text/01/Text01.index";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./Signup.styles";
import { SignUpSchema } from "./Signup.validation";

export default function SignUp() {
  const { onClickVerification } = useVerification();
  const { register, handleSubmit, setValue, watch, formState } = useForm({
    resolver: yupResolver(SignUpSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordCheck: "",
      resident: "",
      phone: "",
      address: "",
    },
  });
  const onSignUpSubmit = (data) => {
    console.log(data);
  };
  const onClickAddress = () => {
    setValue("address", "asdadasdasd", { shouldValidate: true });
  };
  return (
    <S.ContainerWrapper onSubmit={handleSubmit(onSignUpSubmit)}>
      <S.ContainerInner>
        <S.TitleWrap>
          <Text size="36" fontColor="brown">
            회원가입
          </Text>
        </S.TitleWrap>
        <S.InputWrap>
          <Input02 type="text" name="이름" register={register("name")} />
        </S.InputWrap>
        <S.InputWrap>
          <Input02 type="text" name="이메일" register={register("email")} />
          <S.EmailBtn type="button" color="beige">
            <Text size="16">인증 요청</Text>
          </S.EmailBtn>
        </S.InputWrap>
        <S.InputWrap>
          <Input02
            type="password"
            name="비밀번호"
            register={register("password")}
            // isValid={}
          />
        </S.InputWrap>
        <S.InputWrap>
          <Input02
            type="password"
            name="비밀번호 확인"
            register={register("passwordCheck")}
          />
        </S.InputWrap>
        <S.InputWrap>
          <Input02
            type="text"
            name="주민등록번호 앞 6자리"
            register={register("resident")}
          />
        </S.InputWrap>
        <S.InputWrap>
          <Input02
            type="text"
            name="핸드폰 번호"
            register={register("phone")}
          />
          <S.PhoneBtn type="button" color="beige" onClick={onClickVerification}>
            <Text size="16">인증 요청</Text>
          </S.PhoneBtn>
        </S.InputWrap>
        <S.InputWrap>
          <Input02
            type="text"
            name="주소"
            register={register("address")}
            isValid={watch("address").length !== 0}
            readOnly={true}
          />
          <S.AddrBtn type="button" color="beige" onClick={onClickAddress}>
            <Text size="16">주소 검색</Text>
          </S.AddrBtn>
        </S.InputWrap>
        {console.log(formState.dirtyFields.address)}
        <S.SignUpBtnWrap>
          <S.ResetBtn type="reset" color="lightBeige">
            <Text size="24">취소</Text>
          </S.ResetBtn>
          <S.SubmitBtn color="brown">
            <Text size="24" fontColor="white">
              회원가입
            </Text>
          </S.SubmitBtn>
        </S.SignUpBtnWrap>
      </S.ContainerInner>
    </S.ContainerWrapper>
  );
}
