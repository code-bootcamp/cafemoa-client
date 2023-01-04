import { useForm } from "react-hook-form";
import Input02 from "../../commons/input/02/Input02.index";
import Text from "../../commons/text/01/Text01.index";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./SignupOwner.styles";
import { SignUpOwnerSchema } from "./SignupOwner.validation";

export default function SignUpOwner() {
  const { register, handleSubmit, setValue, watch, formState } = useForm({
    resolver: yupResolver(SignUpOwnerSchema),
    mode: "onChange",
    defaultValues: {
      cafeName: "",
      email: "",
      password: "",
      passwordCheck: "",
      businessName: "",
      businessNumber: "",
      address: "",
      adminPassword: "",
      adminPasswordCheck: "",
    },
  });
  const onSignUpSubmit = (data) => {
    console.log(data);
  };
  const onClickAddress = () => {
    setValue("address", "asdadasdasd", { shouldValidate: true });
  };
  const onClickBusiness = () => {
    setValue("businessName", "카페모아", { shouldValidate: true });
    setValue("businessNumber", "13-76005083", { shouldValidate: true });
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
          <Input02 type="text" name="카페 상호명" register={register("cafeName")} />
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
        <S.BusinessBtnWrap>
          <S.BusinessBtn type="button" color="beige" onClick={onClickBusiness}>
              <Text size="16">사업자 인증하기</Text>
          </S.BusinessBtn>
        </S.BusinessBtnWrap>
        <S.InputWrap>
          <Input02
            type="text"
            name="사업자명"
            register={register("businessName")}
            isValid={watch("businessName").length !== 0}
            readOnly={true}
          />
        </S.InputWrap>
        <S.InputWrap>
          <Input02
            type="text"
            name="사업자 등록번호"
            register={register("businessNumber")}
            isValid={watch("businessNumber").length !== 0}
            readOnly={true}
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
        <S.InputWrapAdminPassword>
          <Input02
            type="password"
            name="관리자 비밀번호"
            register={register("adminPassword")}
          />
        </S.InputWrapAdminPassword>
        <div style={{paddingBottom: "40px"}}>
            <Text size="14" fontColor="red">*관리자 비밀번호는 변경이 불가능하오니, 신중히 결정해주세요</Text>
        </div>
        <S.InputWrap>
          <Input02
            type="password"
            name="관리자 비밀번호 확인"
            register={register("adminPasswordCheck")}
          />
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
