import styled from "@emotion/styled";
import { ContainerWrap } from "../../../commons/styles/commonStyles";

export const SignUpWrap = styled.div`
  width: 100vw;
  min-height: calc(100vh - 100px);
  /* background-color: antiquewhite; */
`;
export const SignUpInner = styled(ContainerWrap)`
  padding-top: 40px;
  height: 100%;
`;
export const SignUpFormWrap = styled.div`
  width: 100%;
  height: 100%;
`;
export const SignUpTabWrap = styled.div`
  text-align: center;
`;
export const TransitionWrap = styled.div`
  &.fade-enter {
    opacity: 0;
  }
  &.fade-exit {
    opacity: 1;
  }
  &.fade-enter-active {
    opacity: 1;
  }
  &.fade-exit-active {
    opacity: 0;
  }
  &.fade-enter-active,
  &.fade-exit-active {
    transition: opacity 500ms;
  }
`;
