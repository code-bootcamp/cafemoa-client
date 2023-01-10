import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import SignUpOwner from "./owner/SignupOwner.index";
import * as S from "./Signup.styles";
import SignUpUser from "./user/SignupUser.index";
// import { v4 as uuidv4 } from "uuid";

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

export default function SignUp() {
  const router = useRouter();
  const [state, setState] = useState(true);
  // const userRef = useRef(null);
  // const ownerRef = useRef(null);
  // const nodeRef = state ? userRef : ownerRef;
  useEffect(() => {
    if (router.query.type === undefined) return;
    setState(router.query.type === "user");
  }, [router]);
  return (
    <S.SignUpWrap>
      <S.SignUpInner>
        <S.SignUpFormWrap>
          {/* <SwitchTransition mode="out-in">
            <CSSTransition
              key={state ? "userForm" : "ownerForm"}
              nodeRef={nodeRef}
              timeout={500}
              addEndListener={(node, done) =>
                nodeRef?.current?.addEventListener("transitionend", done, false)
              }
              classNames="fade"
            >
              <S.TransitionWrap ref={nodeRef}>
                {state ? <SignUpUser /> : <SignUpOwner />}
              </S.TransitionWrap>
            </CSSTransition>
          </SwitchTransition> */}
          {state ? <SignUpUser /> : <SignUpOwner />}
        </S.SignUpFormWrap>
      </S.SignUpInner>
    </S.SignUpWrap>
  );
}
