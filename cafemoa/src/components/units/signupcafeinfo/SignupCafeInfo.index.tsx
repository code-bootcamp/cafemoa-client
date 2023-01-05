import { useForm } from "react-hook-form";
import Text from "../../commons/text/01/Text01.index";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./SignupCafeInfo.styles";
import { SignUpCafeInfoSchema } from "./SignupCafeInfo.validation";
import TempCafeInfoMenuImages from "./imageupload/menu/TempCafeInfoMenuImages";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import Input02 from "../../commons/input/02/Input02.index";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function SignUpCafeInfo() {
  const { register, handleSubmit, watch, setValue, formState } = useForm({
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

  // prettier-ignore
  const modules = {
    toolbar:[
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          [{ 'font': [] }],
          [{ 'align': [] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }, 'link'],
          [{ 'color': ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466', 'custom-color'] }, { 'background': [] }],
          ['image', 'video'],
          ['clean']  
        ],
  };

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
            카페정보 입력
          </Text>
        </S.TitleWrap>
        <S.InputWrap>
          <Input02
            type="text"
            name="카페 상호명"
            register={register("cafeName")}
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
        <S.ContentsTitleWrap>
          <Text size="20" fontColor="subColor01">
            카페 소개
          </Text>
        </S.ContentsTitleWrap>
        <div style={{ padding: "40px 0px", paddingBottom: "60px" }}>
          <ReactQuill
            style={{
              width: "100%",
              height: "300px",
            }}
            modules={modules}
          />
        </div>
        <S.ContentsTitleWrap>
          <Text size="20" fontColor="subColor01">
            운영시간 및 휴무일
          </Text>
        </S.ContentsTitleWrap>
        <div style={{ padding: "40px 0px", paddingBottom: "60px" }}>
          <ReactQuill
            style={{
              width: "100%",
              height: "300px",
            }}
            modules={modules}
          />
        </div>
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