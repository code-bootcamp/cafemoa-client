import styled from "@emotion/styled";

export const TextareaWrap = styled.div`
  position: relative;
  & > textarea {
    padding: 8px 16px;
    width: 100%;
    font-size: 16px;
    background-color: #f3e6d8;
    border-radius: 10px;
    height: 300px;
    resize: none;
  }
`;
