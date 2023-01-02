import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface ISelectStylesProps {
  isOpen: boolean;
  isValue: boolean;
}

export const SelectWrap = styled.div`
  position: relative;
  display: block;
  > div {
    position: relative;
    > button {
      padding: 8px 16px;
      display: block;
      width: 100%;
      /* height: 100%; */
      background-color: #f3e6d8;
      font-size: 16px;
      border-radius: 10px;

      .anticon {
        position: absolute;
        right: 24px;
        top: 50%;
        transform-origin: top;
        transform: translateY(-50%);
        transition: all 0.2s;
      }
    }
  }
  > ul {
    position: absolute;
    left: 0;
    top: 72px;
    padding: 25px 8px;
    width: 100%;
    border: 1px solid #000000;
    border-radius: 10px;
    background-color: #ffffff;
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s;
    z-index: 10;
  }
  > ul > li > button {
    display: block;
    padding: 8px 12px;
    width: 100%;
    border-radius: 10px;
    :hover {
      background-color: #f3e6d8;
    }
  }
  ${(props: ISelectStylesProps) =>
    props.isOpen &&
    css`
      > ul {
        opacity: 1;
        visibility: visible;
      }

      > div > button > .anticon {
        transform: rotateX(180deg) translateY(-50%);
      }
    `}
  ${(props: ISelectStylesProps) =>
    !props.isValue &&
    css`
      > div > button {
        color: #8b8b8b;
      }
    `}
`;
