import styled from "@emotion/styled";
import { css } from "@emotion/react";
import * as mq from "./mediaQuery";

interface IButtonColorTypes {
  beige?: {
    bgColor: string;
    borderColor: string;
  };
  lightBeige?: {
    bgColor: string;
    borderColor: string;
  };
  brown?: {
    bgColor: string;
    borderColor: string;
  };
  brownLine?: {
    bgColor: string;
    borderColor: string;
  };
  [prop: string]: any;
}

const BUTTON_COLOR: IButtonColorTypes = {
  beige: {
    bgColor: "#F5E9DF",
    borderColor: "#F5E9DF",
  },
  lightBeige: {
    bgColor: "#F4F0EB",
    borderColor: "#F4F0EB",
  },
  brown: {
    bgColor: "#69473E",
    borderColor: "#69473E",
  },
  brownLine: {
    bgColor: "transparent",
    borderColor: "#69473E",
  },
};

export const ContainerWrap = styled.div`
  margin: 0 auto;
  padding: 0 6.25%;
  max-width: 1640px;
  width: 100%;
  ${mq.MobileL} {
    padding-top: 56px;
  }
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
  ${mq.MobileL} {
    margin-top: 36px;
    margin-left: -6px;
    margin-right: -6px;
    padding-left: 6px;
    padding-right: 6px;
  }
`;

export const LargeBtn = styled.button`
  margin: 0 12px;
  padding: 32px;
  border-width: ${(props) => (props.color === "brownLine" ? "3px" : "1px")};
  border-style: solid;
  border-color: #bdbdbd;
  ${(props) =>
    props.color !== undefined &&
    css`
      background-color: ${BUTTON_COLOR[props.color].bgColor};
      border-color: ${BUTTON_COLOR[props.color].borderColor};
    `}
`;
export const MediumBtn = styled.button`
  padding: 16px 32px;
  border-width: ${(props) => (props.color === "brownLine" ? "3px" : "1px")};
  border-style: solid;
  border-color: #bdbdbd;
  transition: all 0.2s;
  ${(props) =>
    props.color !== undefined &&
    css`
      background-color: ${BUTTON_COLOR[props.color].bgColor};
      border-color: ${BUTTON_COLOR[props.color].borderColor};
    `}
  ${mq.MobileL} {
    padding: 16px;
  }
`;

export const SmallBtn = styled.button`
  padding: 8px 16px;
  border-width: ${(props) => (props.color === "brownLine" ? "3px" : "1px")};
  border-style: solid;
  border-color: #bdbdbd;
  transition: all 0.2s;
  ${(props) =>
    props.color !== undefined &&
    css`
      background-color: ${BUTTON_COLOR[props.color].bgColor};
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

export const TagWrap = styled.div`
  position: sticky;
  left: 0;
  top: 100px;
  padding: 0 16px 18px;
  max-width: max-content;
  display: flex;
  -webkit-overflow-scrolling: touch;
  overflow-x: auto;
  overflow-y: hidden;
  > * {
    position: relative;
    float: left;
    width: auto;
    height: auto;
    flex-shrink: 0;
  }
`;
