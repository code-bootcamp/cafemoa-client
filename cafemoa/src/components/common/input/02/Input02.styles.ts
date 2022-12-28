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
  & > input + label {
    position: absolute;
    left: 15px;
    color: #bdbdbd;
    pointer-events: none;
    transform: translateY(1rem);
    transition: cubic-bezier(0.4, 0, 0.2, 1) 0.5s;
  }
  & > input:focus,
  & > input:valid {
    outline: none;
    border: 1.5px solid #ff1b6d;
  }
  & > input:focus + label,
  & > input:valid + label {
    transform: translateY(-50%) scale(0.8);
    background-color: #ffffff;
    padding: 0 0.2em;
    color: #ff1b6d;
  }
`;
