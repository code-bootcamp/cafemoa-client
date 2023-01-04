import { useForm } from "react-hook-form";
import Text from "../../commons/text/01/Text01.index";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./SignupCafeInfo.styles";
import { SignUpCafeInfoSchema } from "./SignupCafeInfo.validation";
import TempCafeInfoMenuImages from "./imageupload/menu/TempCafeInfoMenuImages";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function SignUpCafeInfo() {
  const { register, handleSubmit, watch, formState } = useForm({
    resolver: yupResolver(SignUpCafeInfoSchema),
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
  return (
    <S.ContainerWrapper onSubmit={handleSubmit(onSignUpSubmit)}>
      <S.ContainerInner>
        <S.TitleWrap>
          <Text size="32" fontColor="subColor01">
            카페정보 입력
          </Text>
        </S.TitleWrap>
        <S.ContentsTitleWrap>
          <Text size="20" fontColor="subColor01">
            카페 소개
          </Text>
        </S.ContentsTitleWrap>
        <div style={{ paddingTop: "40px", marginBottom: "40px" }}>
          <ReactQuill
            style={{
              width: "100%",
              height: "300px",
            }}
          />
        </div>
        <S.ContentsTitleWrap>
          <Text size="20" fontColor="subColor01">
            운영시간 및 휴무일
          </Text>
        </S.ContentsTitleWrap>
        <S.ContentsTitleWrap>
          <Text size="20" fontColor="subColor01">
            메뉴 이미지
          </Text>
        </S.ContentsTitleWrap>
        <TempCafeInfoMenuImages />
        <S.ContentsTitleWrap>
          <Text size="20" fontColor="subColor01">
            카페 사진
          </Text>
        </S.ContentsTitleWrap>
        <S.CafeImageContainer>
          <S.CafeImageWrap>
            <img src="/images/cafelist/Cafe3.jpeg" />
          </S.CafeImageWrap>
          <S.CafeImageWrap>
            <img src="/images/cafelist/Cafe3.jpeg" />
          </S.CafeImageWrap>
          <S.CafeImageWrap>
            <img src="/images/cafelist/Cafe3.jpeg" />
          </S.CafeImageWrap>
          <S.CafeImageWrap>
            <img src="/images/cafelist/Cafe3.jpeg" />
          </S.CafeImageWrap>
        </S.CafeImageContainer>
        <S.SignUpBtnWrap>
          <S.SubmitBtn color="brown">
            <Text size="24" fontColor="white">
              등록
            </Text>
          </S.SubmitBtn>
        </S.SignUpBtnWrap>
      </S.ContainerInner>
    </S.ContainerWrapper>
  );
}
