import styled from "@emotion/styled";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";

export const PageNumber = styled.button`
  margin: 10px;
  cursor: pointer;
  border: none;
  font-size: 15px;
  background-color: transparent;
  color: ${(props) => (props.pageClick ? "deeppink" : "black")};
  :hover {
    color: gray;
  }
`;

export const MovePage = styled.button`
  cursor: pointer;
  border: 0;
  background-color: transparent;
  font-size: 20px;

  :disabled {
    color: red;
  }
`;

export const PrevBtn = styled(LeftCircleOutlined)`
  &[disabled] {
    color: red;
  }
`;

export const NextBtn = styled(RightCircleOutlined)`
  &[disabled] {
    color: red;
  }
`;
