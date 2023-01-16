import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { infoUserState } from "../../../commons/stores";
import SignUpOwner from "./owner/SignupOwner.index";
import * as S from "./SignupWrite.styles";
import { ISignUpProps } from "./SignupWrite.types";
import SignUpUser from "./user/SignupUser.index";

export default function SignUpWrite(props: ISignUpProps) {
  const router = useRouter();
  const [state, setState] = useState(true);
  const [infoUser] = useRecoilState(infoUserState);

  useEffect(() => {
    if (router.query.type === undefined) return;
    setState(router.query.type === "user");
  }, [router]);

  useEffect(() => {
    if (props.isUser === undefined) return;
    setState(props.isUser);
  }, [props.isUser]);

  return (
    <S.SignUpWrap>
      <S.SignUpInner>
        <S.SignUpFormWrap>
          {state ? (
            <SignUpUser isEdit={props.isEdit} infoUser={infoUser} />
          ) : (
            <SignUpOwner isEdit={props.isEdit} infoUser={infoUser} />
          )}
        </S.SignUpFormWrap>
      </S.SignUpInner>
    </S.SignUpWrap>
  );
}
