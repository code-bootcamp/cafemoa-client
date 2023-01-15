import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { DEFAULT_COLOR } from "../../../../commons/default/default";
import * as mq from "../../../../commons/styles/mediaQuery";

interface IUserSizeProps {
  sm: { size: string; borderWidth: string; iconSize: string };
  md: { size: string; borderWidth: string; iconSize: string };
  lg: { size: string; borderWidth: string; iconSize: string };
  [prop: string]: any;
}

interface IUserStylesProps {
  size: string;
  alignItem: string;
}

const USER_SIZE: IUserSizeProps = {
  sm: {
    size: "48",
    borderWidth: "1",
    iconSize: "24",
  },
  md: {
    size: "80",
    borderWidth: "2",
    iconSize: "40",
  },
  lg: {
    size: "140",
    borderWidth: "3",
    iconSize: "70",
  },
};

export const UserImageWrap = styled.div`
  position: relative;
  width: 45px;
  height: 45px;
  background-color: #ffffff;
  border-width: 1px;
  border-style: solid;
  border-color: ${DEFAULT_COLOR.gray};
  border-radius: 100%;
  overflow: hidden;
  > img,
  > svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
  }
  > svg {
    font-size: 70px;
  }
`;
export const UserName = styled.div`
  padding-left: 16px;
  font-size: 20px;
  line-height: 1;
`;
export const UserTime = styled.div``;
export const UserWrap = styled.div<IUserStylesProps>`
  position: relative;
  display: flex;
  align-items: ${(props) =>
    props.alignItem !== "" ? props.alignItem : "center"};
  ${(props) =>
    props.size !== undefined &&
    css`
      ${UserImageWrap} {
        width: ${USER_SIZE[props.size].size}px;
        height: ${USER_SIZE[props.size].size}px;
        border-width: ${USER_SIZE[props.size].borderWidth}px;
        > svg {
          font-size: ${USER_SIZE[props.size].iconSize}px;
        }
      }
      ${UserName} {
        width: calc(100% - ${USER_SIZE[props.size].size}px);
      }
    `}
  ${mq.MobileL} {
    ${(props) =>
      props.size !== undefined &&
      css`
        ${UserImageWrap} {
          width: ${USER_SIZE[props.size].size / 1.5}px;
          height: ${USER_SIZE[props.size].size / 1.5}px;
          > svg {
            font-size: ${USER_SIZE[props.size].iconSize / 1.5}px;
          }
        }
        ${UserName} {
          width: calc(100% - ${USER_SIZE[props.size].size / 1.5}px);
        }
      `}
  }
`;
