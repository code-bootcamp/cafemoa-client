import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface IInput02StylesProps {
  isVaild?: boolean;
}

export const InputWrap = styled.div<IInput02StylesProps>`
  position: relative;
  font-size: 16px;

  & > input {
    padding: 14px 0;
    width: 100%;
    border-bottom: 1px solid #bdbdbd;
  }
  & > input:read-only {
    color: #bdbdbd;
  }
  & > input + label {
    position: absolute;
    left: 0;
    color: #bdbdbd;
    pointer-events: none;
    transform: translateY(1rem);
    transition: cubic-bezier(0.4, 0, 0.2, 1) 0.5s;
  }
  & > input:focus {
    outline: none;
    border-bottom: 1.5px solid #69473e;
  }
  & > input:focus + label {
    transform: translateY(-50%);
    padding: 0;
    font-size: 12px;
    background-color: #ffffff;
    color: #69473e;
  }

  ${(props) =>
    props.isVaild === true &&
    css`
      & > input {
        outline: none;
        border-bottom: 1.5px solid #69473e;
      }
      & > input + label {
        transform: translateY(-50%);
        padding: 0;
        font-size: 12px;
        background-color: #ffffff;
        color: #69473e;
      }
    `}
`;
