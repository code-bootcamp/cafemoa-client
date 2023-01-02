import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  BtnWrap,
  ContainerWrap,
  LargeBtn,
  MediumBtn,
} from "../../../commons/styles/commonStyles";

interface ISignupStylesProps {
  children?: JSX.Element[] | JSX.Element;
}

export const ContainerWrapper = styled(ContainerWrap)`
  padding-top: 100px;
`;
export const ContainerInner = styled.form`
  padding: 100px 6.25%;
  max-width: 920px;
  margin: 0 auto;
  box-shadow: 0 0 20px 0;
`;
export const TitleWrap = styled.div`
  position: relative;
  padding-bottom: 24px;
  margin-bottom: 50px;
  ::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    background-color: #69473e;
  }
`;
export const InputWrap = styled.div`
  display: flex;
  > div {
    width: 100%;
  }
  padding-bottom: 40px;
  justify-content: space-between;
  ${(props: ISignupStylesProps) =>
    props.children !== undefined &&
    Array.isArray(props.children) &&
    css`
      > div {
        width: calc(100% - 156px);
        > input {
          padding-top: 16px;
          padding-bottom: 16px;
        }
      }
      > button {
        width: 140px;
        border-radius: 10px;
      }
    `}
`;
export const EmailBtn = styled(MediumBtn)``;
export const PhoneBtn = styled(MediumBtn)``;
export const AddrBtn = styled(MediumBtn)``;
export const ResetBtn = styled(LargeBtn)``;
export const SubmitBtn = styled(LargeBtn)``;
export const SignUpBtnWrap = styled(BtnWrap)`
  > button {
    margin: 0 8px;
    width: calc(50% - 16px);
    text-align: center;
    border-radius: 20px;
  }
`;
