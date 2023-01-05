import { useForm } from "react-hook-form";
import Input02 from "../../commons/input/02/Input02.index";
import Text from "../../commons/text/01/Text01.index";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./SignupOwner.styles";
import { SignUpOwnerSchema } from "./SignupOwner.validation";
import { MouseEvent } from "react";

export default function SignUpOwner() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(SignUpOwnerSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      passwordCheck: "",
      adminPassword: "",
      adminPasswordCheck: "",
    },
  });
  const onSignUpSubmit = (data) => {
    console.log(data);
  };
  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   // target 분리
  //   const target = checkboxes as HTMLInputElement;
  //   onst checkboxes = document.getElementsByName("ismain");

  //   checkboxes.forEach((event.target) => {
  //     el.check = false;
  //   });

  //   event?.target?.checked = true;;
  // };

  return (
    <S.ContainerWrapper onSubmit={handleSubmit(onSignUpSubmit)}>
      <S.ContainerInner>
        <S.TitleWrap>
          <Text size="32" fontColor="subColor01">
            파트너 가입
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
            type="text"
            name="핸드폰 번호"
            register={register("phone")}
          />
          <S.PhoneBtn type="button" color="beige">
            <Text size="16">인증 요청</Text>
          </S.PhoneBtn>
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
        <S.InputWrapAdminPassword>
          <Input02
            type="password"
            name="관리자 비밀번호"
            register={register("adminPassword")}
          />
        </S.InputWrapAdminPassword>
        <div style={{ paddingBottom: "40px" }}>
          <Text size="14" fontColor="red">
            *관리자 비밀번호는 변경이 불가능하오니, 신중히 결정해주세요
          </Text>
        </div>
        <S.InputWrap>
          <Input02
            type="password"
            name="관리자 비밀번호 확인"
            register={register("adminPasswordCheck")}
          />
        </S.InputWrap>
        <S.CheckBoxContainer>
          <S.CheckBoxWrapper>
            <input type="checkbox" name="ismain" value={"Y"} />
            <Text size="16" fontColor="mainColor">
              카페모아 메인화면 보기
            </Text>
          </S.CheckBoxWrapper>
          <S.CheckBoxWrapper>
            <input type="checkbox" name="ismain" value={"N"} />
            <Text size="16" fontColor="mainColor">
              카페모아 메인화면 안보기
            </Text>
          </S.CheckBoxWrapper>
        </S.CheckBoxContainer>
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
