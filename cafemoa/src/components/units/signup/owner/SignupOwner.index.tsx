import { useForm } from "react-hook-form";
import Input02 from "../../../commons/input/02/Input02.index";
import Text from "../../../commons/text/01/Text01.index";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./SignupOwner.styles";
import { SignUpOwnerSchema } from "./SignupOwner.validation";
import { MouseEvent, useEffect, useState } from "react";
import { useEmailVerify } from "../../../commons/hooks/mutations/useEmailVerify";
import { usePhoneVerify } from "../../../commons/hooks/mutations/usePhoneVerify";
import Input01 from "../../../commons/input/01/Input01.index";
import Timer from "../../../commons/timer/01/Timer.index";

interface ICheckAuth {
  [key: string]: {
    [key: string]: boolean;
  };
  email: {
    checking: boolean;
    checkAccect: boolean;
  };
  phone: {
    checking: boolean;
    checkAccect: boolean;
  };
}

const CHECK_AUTH: ICheckAuth = {
  email: {
    checking: false,
    checkAccect: false,
  },
  phone: {
    checking: false,
    checkAccect: false,
  },
};

export default function SignUpOwner() {
  const [authOpt, setAuthOpt] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { emailVerifySubmit, accessNum: emailAccessNum } = useEmailVerify();
  const { phoneVerifySubmit, accessNum: phoneAccessNum } = usePhoneVerify();
  const [isSignAuth, setIsSignAuth] = useState({ ...CHECK_AUTH });
  const { register, handleSubmit, getValues, formState } = useForm({
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
      emailAccess: "",
      phoneAccess: "",
    },
  });
  const onSignUpSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    const temp = { ...isSignAuth };
    if (authOpt === "email") {
      if (emailAccessNum === undefined) return;
      temp[authOpt].checking = true;
    }
    if (authOpt === "phone") {
      if (phoneAccessNum === undefined) return;
      temp[authOpt].checking = true;
    }
    // if (authOpt === "phone"){
    //   if (emailErrorMsg === undefined) return;
    //   temp[authOpt].checking = true;
    // }
    setIsSignAuth(temp);
  }, [authOpt, emailAccessNum, phoneAccessNum]);

  const onClickVerify =
    (authOption: string) => async (event: MouseEvent<HTMLButtonElement>) => {
      setAuthOpt(authOption);
      if (authOption === "email") {
        const emailData = {
          email: getValues("email"),
        };
        await emailVerifySubmit(emailData);
        // if (emailErrorMsg === '') return;
      }
      if (authOption === "phone") {
        const phoneData = {
          phone: getValues("phone"),
        };
        void phoneVerifySubmit(phoneData);
      }
    };

  const onClickVerifyCheck =
    (authOption: string) => (event: MouseEvent<HTMLButtonElement>) => {
      const temp = { ...isSignAuth };
      if (authOption === "email") {
        if (getValues("emailAccess") === emailAccessNum) {
          temp[authOption].checkAccect = true;
        }
      }
      console.log(authOption, phoneAccessNum);
      if (authOption === "phone") {
        if (Number(getValues("phoneAccess")) === phoneAccessNum) {
          temp[authOption].checkAccect = true;
        }
      }
      setIsSignAuth(temp);
    };

  const onTimeOverVerify = (authOption: string) => {
    const temp = { ...isSignAuth };
    temp[authOption].checking = false;
    setIsSignAuth(temp);
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
          <Input02
            type="text"
            name="이메일"
            register={register("email")}
            errorMsg={formState.errors.email?.message}
            readOnly={isSignAuth.email.checkAccect}
          />
          <S.EmailBtn
            type="button"
            color="beige"
            onClick={onClickVerify("email")}
            disabled={isSignAuth.email.checkAccect}
          >
            <Text size="16">
              {isSignAuth.email.checkAccect ? "인증 완료" : "인증 요청"}
            </Text>
          </S.EmailBtn>
        </S.InputWrap>
        {isSignAuth.email.checking && !isSignAuth.email.checkAccect && (
          <S.InputWrap size="sm">
            <Input01
              type="text"
              placeHolder="인증번호"
              register={register("emailAccess")}
            >
              <S.Timer>
                <Text size="14" fontColor="red">
                  <Timer
                    active={true}
                    onCheckTime={onTimeOverVerify}
                    authOption="email"
                  />
                </Text>
              </S.Timer>
            </Input01>
            <S.EmailBtn
              type="button"
              color="beige"
              onClick={onClickVerifyCheck("email")}
            >
              <Text size="16">인증 확인</Text>
            </S.EmailBtn>
          </S.InputWrap>
        )}

        <S.InputWrap>
          <Input02 type="text" name="이름" register={register("name")} />
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
