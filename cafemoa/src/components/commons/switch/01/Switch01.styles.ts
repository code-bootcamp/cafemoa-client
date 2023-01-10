import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { DEFAULT_COLOR } from "../../../../commons/default/default";

export const LabelSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #eee;
  transition: 0.4s;
  border-radius: 30px;

  ::before {
    position: absolute;
    content: "";
    height: 24px;
    width: 24px;
    border-radius: 100%;
    border: 1px solid #333;
    left: 6px;
    bottom: 4px;
    background-color: ${DEFAULT_COLOR.white};
    transition: 0.4s;
  }
`;
export const LabelTxt = styled.span`
  position: absolute;
  top: 50%;
  pointer-events: none;
  text-transform: uppercase;
  transform: translateY(-50%);
  transition: 0.4s;
`;

export const LabelOn = styled(LabelTxt)``;
export const LabelOff = styled(LabelTxt)``;

export const Label = styled.label`
  font-size: 16px;
  position: relative;
  display: inline-block;
  width: 80px;
  height: 32px;
  overflow: hidden;
  > input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  > input:checked + ${LabelSlider} {
    background-color: ${DEFAULT_COLOR.green};
  }

  > input:checked + ${LabelSlider}:before {
    transform: translateX(48px);
  }

  > ${LabelOn} {
    left: 12px;
    transform: translateX(-48px) translateY(-50%);
    color: ${DEFAULT_COLOR.white};
  }
  > ${LabelOff} {
    color: #999;
    right: 12px;
  }
  > input:checked ~ ${LabelOn} {
    transform: translateX(0) translateY(-50%);
  }

  > input:checked ~ ${LabelOff} {
    transform: translateX(48px) translateY(-50%);
  }
`;
