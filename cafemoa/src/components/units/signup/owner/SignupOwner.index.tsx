import { useForm } from "react-hook-form";
import Input02 from "../../../commons/input/02/Input02.index";
import Text from "../../../commons/text/01/Text01.index";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./SignupOwner.styles";
import { SignUpOwnerSchema } from "./SignupOwner.validation";
import { MouseEvent, useEffect, useState } from "react";
import { usePhoneVerify } from "../../../commons/hooks/mutations/usePhoneVerify";
import Input01 from "../../../commons/input/01/Input01.index";
import Timer from "../../../commons/timer/01/Timer.index";
import { useOwnerEmailVerify } from "../../../commons/hooks/mutations/useOwnerEmailVerify";
import { IFormCreateOwnerData } from "./SignupOwner.types";
import Switch01 from "../../../commons/switch/01/Switch01.index";
import { Modal } from "antd";
import { useBusinessCheck } from "../../../commons/hooks/customs/useBusinessCheck";

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
  business: {
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
  business: {
    checking: false,
    checkAccect: false,
  },
};

export default function SignUpOwner() {
  const [authOpt, setAuthOpt] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { ownerEmailVerifySubmit, accessNum: emailAccessNum } =
    useOwnerEmailVerify();
  const { phoneVerifySubmit, accessNum: phoneAccessNum } = usePhoneVerify();
  const { checkBusinessSubmit, businessCheck } = useBusinessCheck();
  const [isSignAuth, setIsSignAuth] = useState({ ...CHECK_AUTH });
  const { register, handleSubmit, setValue, getValues, setFocus, formState } =
    useForm<IFormCreateOwnerData>({
      resolver: yupResolver(SignUpOwnerSchema),
      mode: "onChange",
      defaultValues: {
        name: "",
        email: "",
        phone: "",
        password: "",
        passwordCheck: "",
        ownerNum: "",
        adminPassword: "",
        adminPasswordCheck: "",
        is_main: false,
        brand: "",
        opening: "",
        emailAccess: "",
        phoneAccess: "",
      },
    });
  // const ownerNumText = getValues("ownerNum");
  // const brandText = getValues("brand");
  // const openingText = getValues("opening");

  const onSignUpSubmit = (data) => {
    console.log(data);
    const {
      passwordCheck,
      emailAccess,
      phoneAccess,
      adminPasswordCheck,
      ...value
    } = data;
    if (!isSignAuth.email.checkAccect) {
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
    if (!businessCheck) {
      Modal.warning({
        content: "사업자 등록을 완료해주세요.",
      });
      return;
    }
    console.log(value);
  };

  const onClickBusiness = () => {
    const getName = getValues("name");
    const getBrand = getValues("brand");
    const getOpening = getValues("opening");
    const getOwnerNum = getValues("ownerNum");

    if (getName === "") {
      setFocus("name");
      Modal.warning({
        content: "이름을 작성해주세요.",
      });
      return;
    }
    if (getBrand === "") {
      setFocus("brand");
      Modal.warning({
        content: "상호를 작성해주세요.",
      });
      return;
    }
    if (getOpening === "") {
      setFocus("opening");
      Modal.warning({
        content: "개업 년 월 일을 작성해주세요.",
      });
      return;
    }
    if (getOwnerNum === "") {
      setFocus("ownerNum");
      Modal.warning({
        content: "사업자등록 번호를 작성해주세요.",
      });
      return;
    }
    const data = {
      businesses: [
        {
          b_no: getOwnerNum,
          start_dt: getOpening,
          p_nm: getName,
          b_nm: getBrand,
        },
      ],
    };

    void checkBusinessSubmit(JSON.stringify(data));
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
        await ownerEmailVerifySubmit(emailData);
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
        if (String(getValues("phoneAccess")) === phoneAccessNum) {
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

  const onSetValue = (value: boolean) => {
    console.log(value);
    setValue("is_main", value);
  };

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
            <Text size="16">인증 요청</Text>
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
            // isValid={}
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
          <Input02 type="text" name="상호" register={register("brand")} />
          <Input02
            type="text"
            name="개업 년 월 일"
            register={register("opening")}
          />
        </S.InputWrap>

        <S.InputWrap>
          <Input02
            type="text"
            name="사업자등록번호"
            register={register("ownerNum")}
          />
          <S.PhoneBtn
            type="button"
            color="beige"
            onClick={onClickBusiness}
            // disabled={isSignAuth.phone.checkAccect}
          >
            <Text size="16">
              {isSignAuth.phone.checkAccect ? "인증 완료" : "인증 요청"}
            </Text>
          </S.PhoneBtn>
        </S.InputWrap>

        <S.InputWrap>
          <Input02
            type="password"
            name="관리자 비밀번호"
            errorMsg={formState.errors.adminPassword?.message}
            register={register("adminPassword")}
          >
            <Text size="14" fontColor="red">
              *관리자 비밀번호는 변경이 불가능하오니, 신중히 결정해주세요
            </Text>
          </Input02>
        </S.InputWrap>
        <S.InputWrap>
          <Input02
            type="password"
            name="관리자 비밀번호 확인"
            errorMsg={formState.errors.adminPasswordCheck?.message}
            register={register("adminPasswordCheck")}
          />
        </S.InputWrap>
        <S.CheckBoxContainer>
          카페모아 메인화면 보기
          <Switch01
            // register={register("is_main")}
            onSetValue={onSetValue}
          />
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
