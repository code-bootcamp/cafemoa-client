import styled from "@emotion/styled";
import { DEFAULT_COLOR } from "../../../commons/default/default";
import { ContainerWrap, MediumBtn } from "../../../commons/styles/commonStyles";

export const ContainerWrapper = styled(ContainerWrap)`
  padding-top: 100px;
  /* background-color: ${DEFAULT_COLOR.subColor02}; */
`;

export const FindpwWrapper = styled.div`
  background-color: ${DEFAULT_COLOR.white};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
`;

export const TitleWrapper = styled.div`
  text-align: center;
  padding-bottom: 56px;
  padding-top: 50px;
`;

export const FindpwForms = styled.div`
  padding: 10px 50px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;

export const FindpwText = styled.div`
  padding-bottom: 22px;
`;

export const FindpwEmail = styled.div`
  width: 100%;
`;

export const FindpwButton = styled(MediumBtn)``;

export const BtnWrapper = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: center;
`;
