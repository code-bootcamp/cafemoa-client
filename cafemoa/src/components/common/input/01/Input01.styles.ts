import styled from "@emotion/styled";

export const InputWrap = styled.div`
  position: relative;
  margin-bottom: 16px;
  & > input {
    padding: 14px 16px;
    width: 100%;
    border: 1px solid #bdbdbd;
  }
  & > input:read-only {
    color: #bdbdbd;
  }
`;
