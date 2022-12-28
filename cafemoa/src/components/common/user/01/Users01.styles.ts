import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface IUserSizeProps {
  sm: { size: string };
  md: { size: string };
  [prop: string]: any;
}

interface IUserStylesProps {
  size: string;
  alignItem: string;
}

const USER_SIZE: IUserSizeProps = {
  sm: {
    size: "45px",
  },
  md: {
    size: "80px",
  },
};

export const UserImageWrap = styled.div`
  width: 45px;
  height: 45px;
  background-color: #c4c4c4;
  border-radius: 100%;
`;
export const UserName = styled.div`
  padding-left: 16px;
  font-size: 24px;
  line-height: 1;
`;
export const UserTime = styled.div``;
export const UserWrap = styled.div`
  display: flex;
  align-items: ${(props: IUserStylesProps) =>
    props.alignItem !== "" ? props.alignItem : "center"};
  ${(props: IUserStylesProps) =>
    props.size !== undefined &&
    css`
      ${UserImageWrap} {
        width: ${USER_SIZE[props.size].size};
        height: ${USER_SIZE[props.size].size};
      }
    `}
`;
