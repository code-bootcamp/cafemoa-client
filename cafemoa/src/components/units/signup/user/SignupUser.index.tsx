import { useForm } from "react-hook-form";
import Input02 from "../../../commons/input/02/Input02.index";
import Text from "../../../commons/text/01/Text01.index";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./SignupUser.styles";
import { SignUpSchema } from "./SignupUser.validation";
import { useCreateUser } from "../../../commons/hooks/mutations/useCreateUser";
import { useRouter } from "next/router";
import { IFormCreateUserData } from "./SignupUser.types";
import { MouseEvent, useEffect, useState } from "react";
import Timer from "../../../commons/timer/01/Timer.index";
import { useEmailVerify } from "../../../commons/hooks/mutations/useEmailVerify";
import { Modal } from "antd";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";
import { usePhoneVerify } from "../../../commons/hooks/mutations/usePhoneVerify";
import Input01 from "../../../commons/input/01/Input01.index";
import Uploads02 from "../../../commons/uploads/02/Upload02.index";
import { useUploadFile } from "../../../commons/hooks/mutations/useUploadFile";
import { ISignUpProps } from "../SignupWrite.types";
import { useUpdateUser } from "../../../commons/hooks/mutations/useUpdateUser";
import Link from "next/link";

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

export default function SignUpUser(props: ISignUpProps) {
  const router = useRouter();
  const { createUserSubmit } = useCreateUser();
  const { updateUserSubmit } = useUpdateUser();
  const [authOpt, setAuthOpt] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [filesList, setFilesList] = useState<File[]>([]);
  const { uploadFile } = useUploadFile();
  const { emailVerifySubmit, accessNum: emailAccessNum } = useEmailVerify();
  const { phoneVerifySubmit, accessNum: phoneAccessNum } = usePhoneVerify();
  const [isSignAuth, setIsSignAuth] = useState({ ...CHECK_AUTH });
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    reset,
    formState,
  } = useForm<IFormCreateUserData>({
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

  const submitSignUp = async (data: IFormCreateUserData) => {
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
    const results = await Promise.all(
      filesList.map(
        async (files: any) => await uploadFile({ variables: { files } })
      )
    );
    if (props.isEdit) {
      const { email, name, phone, ...updateValue } = value;
      void updateUserSubmit(
        updateValue,
        results[0]?.data?.uploadFile[0] ?? updateValue.profileImage
      );
      Modal.success({
        content: "개인정보 수정은 완료했습니다.",
      });
      void router.push(`/mypage/user/${props.infoUser?.fetchUser?.id}`);
    } else {
      void createUserSubmit(value, results[0]?.data?.uploadFile[0] ?? "");
      Modal.success({
        content: "카페모아에서 쿠폰을 모아",
      });
      void router.push("/login");
    }
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

  useEffect(() => {
    if (props.isEdit === undefined) return;
    const temp = { ...isSignAuth };
    temp.email.checkAccect = props.isEdit;
    temp.phone.checkAccect = props.isEdit;
    setIsSignAuth(temp);

    if (props.infoUser !== undefined) {
      const resetData = {
        email: props.infoUser?.fetchUser?.email,
        name: props.infoUser?.fetchUser?.name,
        nickname: props.infoUser?.fetchUser?.nickname,
        address: props.infoUser?.fetchUser?.address,
        detailAddress: props.infoUser?.fetchUser?.detailAddress,
        phone: props.infoUser?.fetchUser?.phone,
        password: "",
        profileImage: props.infoUser?.fetchUser?.profileImage,
      };
      reset({ ...resetData });
    }

    return () => {
      setIsSignAuth(CHECK_AUTH);
    };
  }, [props.isEdit, props.infoUser]);

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

  const onChangeFileUrls = (fileUrl: File, index: number) => {
    const newFileUrls = [...filesList];
    newFileUrls[index] = fileUrl;
    setFilesList(newFileUrls);
  };

  const onReset = () => {
    router.back();
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitSignUp)} onReset={onReset}>
        <S.ContainerInner>
          <S.TitleWrap>
            <Text size="32" fontColor="subColor01">
              {props.isEdit ? "회원수정" : "회원가입"}
            </Text>
          </S.TitleWrap>
          <S.ProfileImageWrap>
            <Uploads02
              onChangeFileUrls={onChangeFileUrls}
              defaultUrls={props.infoUser?.fetchUser?.profileImage}
              maxLength={1}
              cropShape="round"
            />
          </S.ProfileImageWrap>

          <S.InputWrap>
            <Input02
              type="text"
              name="이메일"
              register={register("email")}
              errorMsg={formState.errors.email?.message}
              isValid={watch("email")?.length > 0}
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
              readOnly={props.isEdit}
              errorMsg={formState.errors.name?.message}
              isValid={watch("name")?.length > 0}
              register={register("name")}
            />
          </S.InputWrap>

          <S.InputWrap>
            <Input02
              type="text"
              name="닉네임"
              errorMsg={formState.errors.nickname?.message}
              isValid={watch("nickname")?.length > 0}
              register={register("nickname")}
            />
          </S.InputWrap>

          <S.InputWrap>
            <Input02
              type="text"
              name="핸드폰 번호"
              errorMsg={formState.errors.phone?.message}
              readOnly={isSignAuth.phone.checkAccect}
              isValid={watch("phone")?.length > 0}
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
              isValid={watch("password")?.length > 0}
              register={register("password")}
            />
          </S.InputWrap>

          <S.InputWrap>
            <Input02
              type="password"
              name="비밀번호 확인"
              errorMsg={formState.errors.passwordCheck?.message}
              isValid={watch("passwordCheck")?.length > 0}
              register={register("passwordCheck")}
            />
          </S.InputWrap>

          <S.InputWrap>
            <Input02
              type="text"
              name="주소"
              register={register("address")}
              isValid={watch("address")?.length > 0}
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
              isValid={watch("detailAddress")?.length > 0}
            />
          </S.InputWrap>

          <S.SignUpBtnWrap>
            <S.ResetBtn type="reset" color="lightBeige">
              <Link
                href={`/mypage/user/${String(props.infoUser?.fetchUser?.id)}`}
              >
                <a>
                  <Text size="24">취소</Text>
                </a>
              </Link>
            </S.ResetBtn>
            <S.SubmitBtn type="submit" color="brown">
              <Text size="24" fontColor="white">
                {props.isEdit ? "회원수정" : "회원가입"}
              </Text>
            </S.SubmitBtn>
          </S.SignUpBtnWrap>
        </S.ContainerInner>
      </form>
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
