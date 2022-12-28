import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface ITagSizeProps {
  sm: { fontSize: string; padding: string; marginRight: string };
  md: { fontSize: string; padding: string; marginRight: string };
  lg: { fontSize: string; padding: string; marginRight: string };
  [prop: string]: any;
}

interface ITagStyleProps {
  size: string;
}

const TAG_SIZE: ITagSizeProps = {
  sm: {
    fontSize: "14px",
    padding: "4px 8px",
    marginRight: "4px",
  },
  md: {
    fontSize: "16px",
    padding: "8px 16px",
    marginRight: "8px",
  },
  lg: {
    fontSize: "24px",
    padding: "16px 24px",
    marginRight: "16px",
  },
};

export const Word = styled.span`
  display: inline-block;
  border-radius: 50px;
  background-color: #f3e6d8;
  font-weight: 500;
  ::before {
    content: "# ";
  }
  &:last-of-type {
    margin-right: 0;
  }
  ${(props: ITagStyleProps) =>
    css`
      font-size: ${TAG_SIZE[props.size].fontSize};
      padding: ${TAG_SIZE[props.size].padding};
      margin-right: ${TAG_SIZE[props.size].marginRight};
    `}
`;
