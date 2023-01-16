import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { DEFAULT_COLOR } from "../../../commons/default/default";
import {
  BtnWrap,
  ContainerWrap,
  LargeBtn,
  MediumBtn,
  SmallBtn,
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
  margin-bottom: 56px;
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
  > button {
    text-align: center;
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
        width: 128px;
        border-radius: 10px;
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
export const ContentsTitleWrap = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 3px solid ${DEFAULT_COLOR.subColor04};
`;
export const CheckBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;
export const CafeImageContainer = styled.div`
  margin-top: 16px;
`;
export const CafeImageWrap = styled.div`
  width: 25%;
  padding: 10px;
`;
export const BusinessBtnWrap = styled.div`
  padding-bottom: 40px;
  > button {
    width: 180px;
    border-radius: 10px;
    text-align: center;
  }
`;
export const ImageWrapper = styled.div`
  padding: 40px 0px;
`;
export const TagsWrap = styled.div`
  margin-top: 16px;
  padding: 0 0 16px;
  > button {
    margin-right: 8px;
    margin-top: 8px;
  }
`;
export const EmailBtn = styled(MediumBtn)``;
export const PhoneBtn = styled(MediumBtn)``;
export const BusinessBtn = styled(MediumBtn)``;
export const AddrBtn = styled(MediumBtn)``;
export const ResetBtn = styled(LargeBtn)``;
export const SubmitBtn = styled(SmallBtn)``;
export const SignUpBtnWrap = styled(BtnWrap)`
  > button {
    margin: 0 8px;
    width: calc(50% - 216px);
    text-align: center;
    border-radius: 20px;
  }
`;
