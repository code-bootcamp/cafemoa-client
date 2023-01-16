import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { DEFAULT_COLOR } from "../../../../commons/default/default";

interface ILinkStylesProps {
  active?: boolean;
  size?: string;
}

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

export const LinkWrap = styled.a<ILinkStylesProps>`
  position: relative;
  padding-right: 20px;
  padding-bottom: 4px;
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
  ${(props) =>
    props.size === "sm" &&
    css`
      ::before {
        top: 8px;
      }
      ::after {
        top: 5px;
        width: 7px;
        height: 7px;
      }
    `}
  ${(props) =>
    props.active !== undefined &&
    props.active &&
    css`
      > span {
        color: ${DEFAULT_COLOR.mainColor};
      }
      ::before {
        background-color: ${DEFAULT_COLOR.mainColor};
      }
      ::after {
        border-color: ${DEFAULT_COLOR.mainColor};
      }
      > ${LinkBorder} {
        transform: scaleX(1);
        transform-origin: bottom left;
        background-color: ${DEFAULT_COLOR.mainColor};
      }
    `}
`;
