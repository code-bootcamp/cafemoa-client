import styled from "@emotion/styled";
import {
  ContainerWrap,
  MediumBtn,
} from "../../../../../commons/styles/commonStyles";

export const StampCheckContainer = styled(ContainerWrap)`
  padding-top: 100px;
`;
export const Title = styled.div`
  width: 100%;
  margin-bottom: 56px;
`;
export const NotificationContainer = styled.div`
  width: 100%;
`;
export const NotificationWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  background: #f3e6d8;
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
