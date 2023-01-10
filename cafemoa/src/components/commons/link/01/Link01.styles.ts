import styled from "@emotion/styled";
import { DEFAULT_COLOR } from "../../../../commons/default/default";

export const LinkBorder = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
  background-color: ${DEFAULT_COLOR.gray};
`;

export const LinkWrap = styled.a`
  position: relative;
  padding-right: 20px;
  ::before {
    content: "";
    position: absolute;
    right: -1px;
    top: 10px;
    width: 14px;
    height: 1px;
    background-color: ${DEFAULT_COLOR.gray};
  }
  ::after {
    content: "";
    position: absolute;
    right: 0;
    top: 6px;
    width: 9px;
    height: 9px;
    border-style: solid;
    border-color: ${DEFAULT_COLOR.gray};
    border-width: 0px 1px 1px 0;
    transform: rotate(-45deg);
  }
  :hover > span {
    color: ${DEFAULT_COLOR.mainColor};
  }
  :hover::before {
    background-color: ${DEFAULT_COLOR.mainColor};
  }
  :hover::after {
    border-color: ${DEFAULT_COLOR.mainColor};
  }
  :hover > ${LinkBorder} {
    transform: scaleX(1);
    transform-origin: bottom left;
    background-color: ${DEFAULT_COLOR.mainColor};
  }
`;
