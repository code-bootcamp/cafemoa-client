import styled from "@emotion/styled";

export const InputWrap = styled.div`
  position: relative;
  margin-bottom: 16px;
  & > input {
    padding: 14px 0;
    width: 100%;
    border-bottom: 1px solid #bdbdbd;
  }
  & > input:read-only {
    color: #bdbdbd;
  }
  & > input + label {
    position: absolute;
    left: 0;
    color: #bdbdbd;
    pointer-events: none;
    transform: translateY(1rem);
    transition: cubic-bezier(0.4, 0, 0.2, 1) 0.5s;
  }
  & > input:focus,
  & > input:valid {
    outline: none;
    border-bottom: 1.5px solid #69473e;
  }
  & > input:focus + label,
  & > input:valid + label {
    left: -6px;
    transform: translateY(-50%) scale(0.8);
    background-color: #ffffff;
    padding: 0;
    color: #69473e;
  }
`;
