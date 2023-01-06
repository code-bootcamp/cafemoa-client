import { useForm } from "react-hook-form";
import Input02 from "../../commons/input/02/Input02.index";
import Text from "../../commons/text/01/Text01.index";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./Signup.styles";
import { SignUpSchema } from "./Signup.validation";
// import { useCreateUser } from "../../commons/hooks/mutation/useCreateUser";
// import { useRouter } from "next/router";
import Input01 from "../../commons/input/01/Input01.index";
import { IFormCreateUserData } from "./Signup.types";
import { useState } from "react";
import { useAuthTimer } from "../../commons/hooks/customs/useInterval";

const CHECK_AUTH = {
  email: {
    checking: false,
    checkAccect: false,
  },
  phone: {
    checking: false,
    checkAccect: false,
  },
};

export default function SignUp() {
  // const router = useRouter();
  // const { createUserSubmit } = useCreateUser();
  const [isSignAuth, setIsSignAuth] = useState({ ...CHECK_AUTH });
  const { register, handleSubmit, setValue, watch } = useForm({
    resolver: yupResolver(SignUpSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      nickname: "",
      email: "",
      address: "",
      phoneNumber: "",
      password: "",
      passwordCheck: "",
      profileImage: "",
    },
  });
  const onSignUpSubmit = (data: IFormCreateUserData) => {
    const { passwordCheck, ...value } = data;
    console.log(value);
    // void createUserSubmit(value);
    // void router.push("/");
  };
  const onClickAddress = () => {
    setValue("address", "asdadasdasd", { shouldValidate: true });

    setIsSignAuth((prev) => prev);
  };
  console.log(isSignAuth);

  const onClick = () => {};

  return (
    <S.ContainerWrapper onSubmit={handleSubmit(onSignUpSubmit)}>
      <S.ContainerInner>
        <S.TitleWrap>
          <Text size="32" fontColor="subColor01">
            회원가입
          </Text>
        </S.TitleWrap>
        <S.InputWrap>
          <Input02 type="text" name="이메일" register={register("email")} />
          <S.EmailBtn type="button" color="beige">
            <Text size="16">인증 요청</Text>
          </S.EmailBtn>
        </S.InputWrap>
        {!isSignAuth.email.checking && (
          <S.InputWrap size="sm">
            <Input01
              type="text"
              placeHolder="인증번호"
              register={register("phoneNumber")}
            >
              <S.Timer>
                <Text size="14" fontColor="red">
                  {useAuthTimer(onClick, 5).countText}
                </Text>
              </S.Timer>
            </Input01>
            <S.PhoneBtn type="button" color="beige">
              <Text size="16">인증 확인</Text>
            </S.PhoneBtn>
          </S.InputWrap>
        )}

        <S.InputWrap>
          <Input02 type="text" name="이름" register={register("name")} />
        </S.InputWrap>

        <S.InputWrap>
          <Input02 type="text" name="닉네임" register={register("nickname")} />
        </S.InputWrap>

        <S.InputWrap>
          <Input02
            type="text"
            name="핸드폰 번호"
            register={register("phoneNumber")}
          />
          <S.PhoneBtn type="button" color="beige">
            <Text size="16">인증 요청</Text>
          </S.PhoneBtn>
        </S.InputWrap>
        {isSignAuth.phone.checking && (
          <S.InputWrap size="sm">
            <Input01
              type="text"
              // name="핸드폰 인증번호"
              placeHolder="인증번호"
              register={register("phoneNumber")}
            />
            <S.PhoneBtn type="button" color="beige">
              <Text size="16">인증 확인</Text>
            </S.PhoneBtn>
          </S.InputWrap>
        )}

        <S.InputWrap>
          <Input02
            type="password"
            name="비밀번호"
            register={register("password")}
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
            name="주소"
            register={register("address")}
            isValid={watch("address").length !== 0}
            readOnly={true}
          />
          <S.AddrBtn type="button" color="beige" onClick={onClickAddress}>
            <Text size="16">주소 검색</Text>
          </S.AddrBtn>
        </S.InputWrap>
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
