import styled from "@emotion/styled";

interface IInputStylesProps {
  textAlign?: string;
}

export const InputWrap = styled.div`
  position: relative;
  margin-bottom: 16px;
  & > input {
    padding: 8px 16px;
    width: 100%;
    font-size: 16px;
    background-color: #f3e6d8;
    border-radius: 10px;
    text-align: ${(props: IInputStylesProps) =>
      props.textAlign !== undefined ? props.textAlign : "left"};
  }
  & > input:read-only {
    color: #bdbdbd;
  }
`;
