import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface IDefaultColorTypes {
  black?: string;
  white?: string;
  gray?: string;
  beige?: string;
  deepBeige?: string;
  lightBeige?: string;
  green?: string;
  brown?: string;
  deepBrown?: string;
  [prop: string]: any;
}

export const DEFAULT_COLOR: IDefaultColorTypes = {
  black: "#000",
  white: "#ffffff",
  gray: "#8B8B8B",
  beige: "#F5E9DF",
  deepBeige: "#F3E6D8",
  lightBeige: "#F6F5F1",
  green: "#5A7B2F",
  brown: "#69473E",
  deepBrown: "#81564B",
};

interface IButtonColorTypes {
  black?: {
    bgColor: string;
    borderColor: string;
    color: string;
  };
  yellow?: {
    bgColor: string;
    borderColor: string;
    color: string;
  };
  gray?: {
    bgColor: string;
    borderColor: string;
    color: string;
  };
  lightGray?: {
    bgColor: string;
    borderColor: string;
    color: string;
  };
  white?: {
    bgColor: string;
    borderColor: string;
    color: string;
  };
  [prop: string]: any;
}

const BUTTON_COLOR: IButtonColorTypes = {
  black: {
    bgColor: "#000000",
    borderColor: "#000000",
    color: "#ffffff",
  },
  yellow: {
    bgColor: "#FFE004",
    borderColor: "#FFE004",
    color: "#000000",
  },
  gray: {
    bgColor: "#a0a0a0",
    borderColor: "#a0a0a0",
    color: "#ffffff",
  },
  lightGray: {
    bgColor: "#c9c9c9",
    borderColor: "#c9c9c9",
    color: "#ffffff",
  },
  white: {
    bgColor: "#ffffff",
    borderColor: "#000000",
    color: "#000000",
  },
};

export const ContainerWrap = styled.div`
  margin: 0 auto;
  padding: 0 120px;
  max-width: 1640px;
  width: 100%;
`;

export const BtnWrap = styled.div`
  margin-top: 72px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: -12px;
  margin-right: -12px;
  padding-left: 12px;
  padding-right: 12px;
`;

export const LargeBtn = styled.button`
  margin: 0 12px;
  padding: 32px;
  border-width: 1px;
  border-style: solid;
  border-color: #bdbdbd;
  font-size: 30px;
  ${(props) =>
    props.color !== undefined &&
    css`
      background-color: ${BUTTON_COLOR[props.color].bgColor};
      color: ${BUTTON_COLOR[props.color].color};
      border-color: ${BUTTON_COLOR[props.color].borderColor};
    `}
`;
export const MediumBtn = styled.button`
  padding: 25px 16px;
  border-width: 1px;
  border-style: solid;
  border-color: #bdbdbd;
  transition: all 0.2s;
  ${(props) =>
    props.color !== undefined &&
    css`
      background-color: ${BUTTON_COLOR[props.color].bgColor};
      color: ${BUTTON_COLOR[props.color].color};
      border-color: ${BUTTON_COLOR[props.color].borderColor};
    `}
`;
export const SmallBtn = styled.button`
  padding: 14px 16px;
  border-width: 1px;
  border-style: solid;
  border-color: #bdbdbd;
  transition: all 0.2s;
  ${(props) =>
    props.color !== undefined &&
    css`
      background-color: ${BUTTON_COLOR[props.color].bgColor};
      color: ${BUTTON_COLOR[props.color].color};
      border-color: ${BUTTON_COLOR[props.color].borderColor};
    `}
`;

export const EllipsisOne = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const EllipsisTwo = styled.div`
  display: -webkit-box;
  line-height: 1.2;
  height: 2.4em;
  word-break: break-word;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
