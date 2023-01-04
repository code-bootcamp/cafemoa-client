import styled from "@emotion/styled";
import { DEFAULT_COLOR } from "../../../../../commons/default/default";
import {
  ContainerWrap,
  MediumBtn,
  SmallBtn,
} from "../../../../../commons/styles/commonStyles";
import Input01 from "../../../../commons/input/01/Input01.index";

export const SaveButton = styled(SmallBtn)``;

export const ContainerWrapper = styled(ContainerWrap)`
  padding-top: 100px;
`;

export const ModalButton = styled(MediumBtn)``;

export const ModalFromWrap = styled.form`
  padding-top: 32px;
`;

export const StampButton = styled(MediumBtn)`
  border-radius: 10px;
  background-color: #f3e6d8;
  padding-top: 8px;
  padding-bottom: 8px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  text-align: center;
  padding-bottom: 56px;
`;

export const StampWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 800px;
  width: 100%;
`;

export const StampContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserWrapper = styled.div`
  display: flex;
  max-width: 500px;
`;

export const StampSelect = styled.div`
  /* display: flex;
  align-items: center; */
  margin-left: 10px;
  width: 100%;
`;

export const InputIconWrap = styled.div`
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  svg {
    font-size: 24px;
  }
`;

export const StampTable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding-top: 20px;
  width: 100%;

  > ul {
    width: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    border-bottom: 1px solid ${DEFAULT_COLOR.black};
    margin-bottom: 0em;
    padding: 4px 0px;
  }
`;

export const Name = styled.li`
  width: 30%;
`;

export const PhoneEnd = styled.li`
  width: 40%;
`;

export const SaveStamp = styled.li`
  width: 30%;
`;

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 15px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 40px;
`;
