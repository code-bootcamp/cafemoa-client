import { useRef, useState } from "react";
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
  const [state, setState] = useState(true);
  const userRef = useRef(null);
  const ownerRef = useRef(null);
  const nodeRef = state ? userRef : ownerRef;
  const onClickTab = (bool: boolean) => () => {
    setState(bool);
  };
  console.log(state);
  return (
    <S.SignUpWrap>
      <S.SignUpInner>
        <S.SignUpFormWrap>
          <S.SignUpTabWrap>
            <button onClick={onClickTab(true)}>일반 회원</button>
            <button onClick={onClickTab(false)}>가맹주 회원</button>
          </S.SignUpTabWrap>

          <SwitchTransition mode="out-in">
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
          </SwitchTransition>
        </S.SignUpFormWrap>
      </S.SignUpInner>
    </S.SignUpWrap>
  );
}
