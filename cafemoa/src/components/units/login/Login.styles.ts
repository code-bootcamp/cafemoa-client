import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { stubArray } from "lodash";
import { ContainerWrap, MediumBtn } from "../../../commons/styles/commonStyles";

export const ContainerWrapper = styled(ContainerWrap)``;

export const LoginButton = styled(MediumBtn)`
  padding-top: 8px;
  padding-bottom: 8px;
`;
export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #ccc;
  background-size: cover;
`;

export const LoginContainer = styled.div`
  position: relative;
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  //  height: 690px;
  background-color: #f3e6d8;
  border-radius: 3px;
  padding: 25px 0;
`;

export const OptionsRegister = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 75px 45px;
  color: #ffffff;
  font-weight: 300;
  padding: 50px 45px;
`;

export const OptionsDetail = styled.div`
  padding-top: 25px;
`;

export const OptionsButtonWrap = styled.div`
  padding-top: 25px;
`;

export const OptionsButton = styled.button`
  margin-top: 30px;
  border: 1px solid black;
  border-radius: 3px;
  padding: 10px 30px;
  color: #ffffff;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  :hover {
    color: white;
    background-color: black;
  }
`;

export const FormsContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 30px;
  width: calc(50% - 30px);
  min-height: 500px;
  background-color: #ffffff;
  border-radius: 3px;
  box-shadow: 2px 0 15px rgba($black, 0.25);
  overflow: hidden;
  transform: translate3d(0, -50%, 0);
  transition: 0.4s ease-in-out;
  ${(props) =>
    props.dir === "left"
      ? css`
          transform: translate3d(0, -50%, 0);
        `
      : css`
          transform: translate3d(100%, -50%, 0);
        `}
`;

export const RegistForms = styled.div`
  transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-out;
  position: absolute;
  top: 70px;
  left: 40px;
  width: calc(100% - 80px);
  //  opacity: ${(props) => (props.dir === props.posi ? 1 : 0)};
  /* visibility: ${(props) =>
    props.dir === props.posi ? "visible" : "hidden"}; */
  transition: opacity 0.4s ease-in-out,
    visibility 0.4s ease-in-out transform 0.5s ease-in-out;
  transform: translate3d(0, 0, 0);
`;

export const FormTitle = styled.div`
  padding-bottom: 40px;
`;

// export const Form = styled.form`
//   padding-top: 10px;
// `;

export const FormsField = styled.div`
  margin-bottom: 50px;
  /* :not(:last-of-type) {
  } */
`;

export const FormsButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 35px;
`;

export const FindPassword = styled.button`
  color: #8b8b8b;
  text-decoration: underline;
  transition: color 0.2s ease-in-out;

  :hover {
    color: darken(#8b8b8b, 10%);
  }
`;

// export const LoginButton = styled.button`
//   // margin-top: 30px;
//   /* border: 1px solid black; */
//   border-radius: 3px;
//   padding: 10px 50px;
//   color: #ffffff;
//   transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
//   background-color: #69473e;
//   :hover {
//     color: white;
//     background-color: black;
//   }
// `;
