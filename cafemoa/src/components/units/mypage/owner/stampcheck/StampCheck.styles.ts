import styled from "@emotion/styled";
import { DEFAULT_COLOR } from "../../../../../commons/default/default";
import {
  ContainerWrap,
  MediumBtn,
} from "../../../../../commons/styles/commonStyles";
import * as mq from "../../../../../commons/styles/mediaQuery";

export const StampCheckContainer = styled(ContainerWrap)`
  padding-top: 100px;
  display: flex;
  flex-direction: row;
  ${mq.MobileM} {
    flex-direction: column;
  }
`;
export const Title = styled.div`
  padding-bottom: 56px;
  ${mq.MobileM} {
    padding-bottom: 24px;
  }
`;
export const NotificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 350px);
  ${mq.DesktopS} {
    width: calc(100% - 252px);
  }
  ${mq.MobileM} {
    padding-top: 24px;
    width: 100%;
  }
`;
export const NotificationWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  background: ${DEFAULT_COLOR.subColor02};
  padding: 16px 24px;
  margin-bottom: 40px;
  > div {
    width: calc(100% - 72px);
  }
  > button {
    width: 72px;
  }
`;
export const ConfirmBtn = styled(MediumBtn)`
  border-radius: 15px;
  padding: 10px;
  text-align: center;
`;
export const ModalButton = styled(MediumBtn)``;

export const ModalFromWrap = styled.form`
  padding-top: 32px;
`;
