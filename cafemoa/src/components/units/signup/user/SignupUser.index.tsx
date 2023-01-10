import { useForm } from "react-hook-form";
import Input02 from "../../../commons/input/02/Input02.index";
import Text from "../../../commons/text/01/Text01.index";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./SignupUser.styles";
import { SignUpSchema } from "./SignupUser.validation";
import { useCreateUser } from "../../../commons/hooks/mutations/useCreateUser";
import { useRouter } from "next/router";
// import Input01 from "../../../commons/input/01/Input01.index";
import { IFormCreateUserData } from "./SignupUser.types";
import { MouseEvent, useEffect, useState } from "react";
import Timer from "../../../commons/timer/01/Timer.index";
import { useEmailVerify } from "../../../commons/hooks/mutations/useEmailVerify";
import { Modal } from "antd";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";
import { usePhoneVerify } from "../../../commons/hooks/mutations/usePhoneVerify";
import Input01 from "../../../commons/input/01/Input01.index";

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

export default function SignUpUser() {
  const router = useRouter();
  const { createUserSubmit } = useCreateUser();
  const [authOpt, setAuthOpt] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { emailVerifySubmit, accessNum: emailAccessNum } = useEmailVerify();
  const { phoneVerifySubmit, accessNum: phoneAccessNum } = usePhoneVerify();
  const [isSignAuth, setIsSignAuth] = useState({ ...CHECK_AUTH });
  const { register, handleSubmit, setValue, getValues, watch, formState } =
    useForm<IFormCreateUserData>({
      resolver: yupResolver(SignUpSchema),
      mode: "onChange",
      defaultValues: {
        email: "",
        name: "",
        nickname: "",
        address: "",
        detailAddress: "",
        phone: "",
        password: "",
        profileImage: "",
        passwordCheck: "",
        emailAccess: "",
        phoneAccess: "",
      },
    });
  const addressString = watch("address");

  const submitSignUp = (data: IFormCreateUserData) => {
    const { passwordCheck, emailAccess, phoneAccess, ...value } = data;
    if (!isSignAuth.email.checkAccect) {
      console.log("sss");
      Modal.warning({
        content: "이메일 인증을 완료해주세요.",
      });
      return;
    }
    if (!isSignAuth.phone.checkAccect) {
      Modal.warning({
        content: "휴대폰 인증을 완료해주세요.",
      });
      return;
    }
    void createUserSubmit(value);
    void router.push("/");
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
    setIsSignAuth(temp);
    return () => {
      setIsSignAuth(CHECK_AUTH);
    };
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
        if (getValues("phoneAccess") === phoneAccessNum) {
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

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleComplete = (data: Address) => {
    setValue("address", data.address);
    toggleModal();
  };

  return (
    <>
      <S.ContainerWrapper onSubmit={handleSubmit(submitSignUp)}>
        <S.ContainerInner>
          <S.TitleWrap>
            <Text size="32" fontColor="subColor01">
              회원가입
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
            <Input02
              type="text"
              name="이름"
              errorMsg={formState.errors.name?.message}
              register={register("name")}
            />
          </S.InputWrap>

          <S.InputWrap>
            <Input02
              type="text"
              name="닉네임"
              errorMsg={formState.errors.nickname?.message}
              register={register("nickname")}
            />
          </S.InputWrap>

          <S.InputWrap>
            <Input02
              type="text"
              name="핸드폰 번호"
              errorMsg={formState.errors.phone?.message}
              readOnly={isSignAuth.phone.checkAccect}
              register={register("phone")}
            />
            <S.PhoneBtn
              type="button"
              color="beige"
              onClick={onClickVerify("phone")}
              disabled={isSignAuth.phone.checkAccect}
            >
              <Text size="16">
                {isSignAuth.phone.checkAccect ? "인증 완료" : "인증 요청"}
              </Text>
            </S.PhoneBtn>
          </S.InputWrap>
          {isSignAuth.phone.checking && !isSignAuth.phone.checkAccect && (
            <S.InputWrap size="sm">
              <Input01
                type="text"
                // name="핸드폰 인증번호"
                placeHolder="인증번호"
                register={register("phoneAccess")}
              >
                <S.Timer>
                  <Text size="14" fontColor="red">
                    <Timer
                      active={true}
                      onCheckTime={onTimeOverVerify}
                      authOption="phone"
                    />
                  </Text>
                </S.Timer>
              </Input01>
              <S.PhoneBtn
                type="button"
                color="beige"
                onClick={onClickVerifyCheck("phone")}
              >
                <Text size="16">인증 확인</Text>
              </S.PhoneBtn>
            </S.InputWrap>
          )}

          <S.InputWrap>
            <Input02
              type="password"
              name="비밀번호"
              errorMsg={formState.errors.password?.message}
              register={register("password")}
            />
          </S.InputWrap>

          <S.InputWrap>
            <Input02
              type="password"
              name="비밀번호 확인"
              errorMsg={formState.errors.passwordCheck?.message}
              register={register("passwordCheck")}
            />
          </S.InputWrap>

          <S.InputWrap>
            <Input02
              type="text"
              name="주소"
              register={register("address")}
              isValid={addressString.length !== 0}
              readOnly={true}
            />
            <S.AddrBtn type="button" color="beige" onClick={toggleModal}>
              <Text size="16">주소 검색</Text>
            </S.AddrBtn>
          </S.InputWrap>

          <S.InputWrap>
            <Input02
              type="text"
              name="상세 주소"
              errorMsg={formState.errors.detailAddress?.message}
              register={register("detailAddress")}
            />
          </S.InputWrap>

          <S.SignUpBtnWrap>
            <S.ResetBtn type="reset" color="lightBeige">
              <Text size="24">취소</Text>
            </S.ResetBtn>
            <S.SubmitBtn type="submit" color="brown">
              <Text size="24" fontColor="white">
                회원가입
              </Text>
            </S.SubmitBtn>
          </S.SignUpBtnWrap>
        </S.ContainerInner>
      </S.ContainerWrapper>
      {isModalOpen && (
        <Modal
          title="주소 검색"
          open={true}
          onOk={toggleModal}
          onCancel={toggleModal}
        >
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
