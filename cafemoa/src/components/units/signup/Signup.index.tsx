import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import SignUpOwner from "./owner/SignupOwner.index";
import * as S from "./Signup.styles";
import { ICheckAuth, ISignUpProps } from "./Signup.types";
import SignUpUser from "./user/SignupUser.index";
// import { v4 as uuidv4 } from "uuid";

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

export default function SignUp(props: ISignUpProps) {
  const router = useRouter();
  const [state, setState] = useState(true);
  useEffect(() => {
    if (router.query.type === undefined) return;
    setState(router.query.type === "user");
  }, [router]);
  return (
    <S.SignUpWrap>
      <S.SignUpInner>
        <S.SignUpFormWrap>
          {state ? <SignUpUser /> : <SignUpOwner />}
        </S.SignUpFormWrap>
      </S.SignUpInner>
    </S.SignUpWrap>
  );
}
