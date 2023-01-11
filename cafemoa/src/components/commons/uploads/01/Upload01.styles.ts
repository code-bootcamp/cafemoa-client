import styled from "@emotion/styled";

export const InputFileWrap = styled.div``;

export const InputFile = styled.div`
  position: relative;
  display: inline-block;
  width: 180px;
  height: 180px;
  margin-right: 24px;
  margin-bottom: 24px;
  text-align: center;
  padding: 18px;
  background-color: #bdbdbd;
  & > span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding-top: 28px;
    display: block;
    font-weight: bold;
    font-size: 14px;
    color: #4f4f4f;
  }
  & > span::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 6px;
    transform: translateX(-50%);
    width: 14px;
    height: 2px;
    background-color: #4f4f4f;
  }
  & > span::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    width: 2px;
    height: 14px;
    background-color: #4f4f4f;
  }
  & > input {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    font-size: 0;
    text-indent: -9999px;
    cursor: pointer;
  }
  & > img {
    position: absolute;
    left: 50%;
    top: 50%;
    width: auto;
    height: 100%;
    transform: translate(-50%, -50%);
  }
`;
