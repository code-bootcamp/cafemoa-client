import * as yup from "yup";

export const SignUpSchema = yup.object({
  // email: yup
  //   .string()
  //   .required("이메일을 입력해주세요.")
  //   .matches(
  //     /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
  //     "이메일 아이디를 @까지 정확하게 입력해주세요."
  //   ),
  // password: yup
  //   .string()
  //   .required("패스워드를 입력해주세요.")
  //   .matches(
  //     /^(?=.*?[a-zA-Z])(?=.*?[0-9]).{8,16}$/,
  //     "영문+숫자 조합 8~16자리의 비밀번호를 입력해주세요."
  //   ),
  // passwordCheck: yup
  //   .string()
  //   .required("패스워드를 입력해주세요.")
  //   .oneOf([yup.ref("password")], "패스워드가 일치하지 않습니다."),
  // name: yup.string().required("이름을 입력해주세요."),
});
