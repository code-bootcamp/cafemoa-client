import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import {
  BtnWrap,
  ContainerWrap,
  LargeBtn,
  MediumBtn,
  SmallBtn,
} from "../../../../commons/styles/commonStyles";
import * as mq from "../../../../commons/styles/mediaQuery";

interface ISignupStylesProps {
  children?: ReactNode;
  size?: string;
}

export const ContainerWrapper = styled(ContainerWrap)`
  padding-top: 0;
`;
export const ContainerInner = styled.form`
  padding: 40px 100px;
  max-width: 540px;
  margin: 0 auto;
  background-color: #ffffff;
  box-shadow: 0 0 12px -4px;
  ${mq.MobileL} {
    padding: 50px 100px;
  }
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
export const InputWrap = styled.div<ISignupStylesProps>`
  display: flex;
  padding-bottom: 20px;
  justify-content: space-between;
  > div {
    width: 100%;
  }
  ${(props) =>
    props.children !== undefined &&
    Array.isArray(props.children) &&
    css`
      > div {
        width: calc(100% - 116px);
        > input {
          padding-top: 16px;
          padding-bottom: 16px;
        }
      }
      > button {
        width: 100px;
        border-radius: 10px;
      }
    `}
  ${(props) =>
    props.size === "sm" &&
    css`
      > div {
        margin-bottom: 0;
      }
      > div > input {
        font-size: 14px;
        padding: 8px;
      }
      > button {
        padding: 4px 16px;
      }
    `}
`;
export const InputWrapAdminPassword = styled.div`
  display: flex;
  > div {
    width: 100%;
  }
  padding-bottom: 10px;
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
export const CheckBoxContainer = styled.div`
  display: flex;
`;
export const CheckBoxWrapper = styled.div`
  width: 50%;
  padding-left: 100px;
`;
export const Timer = styled.div`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
`;
export const EmailBtn = styled(SmallBtn)``;
export const PhoneBtn = styled(SmallBtn)``;
export const BusinessBtn = styled(SmallBtn)``;
export const AddrBtn = styled(SmallBtn)``;
export const ResetBtn = styled(MediumBtn)``;
export const SubmitBtn = styled(MediumBtn)``;
export const SignUpBtnWrap = styled(BtnWrap)`
  margin-top: 36px;
  > button {
    margin: 0 8px;
    width: calc(50% - 16px);
    text-align: center;
    border-radius: 20px;
  }
`;
