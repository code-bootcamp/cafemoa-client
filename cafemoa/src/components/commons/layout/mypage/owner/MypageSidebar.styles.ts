import styled from "@emotion/styled";

export const ProfileWrapper = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 1px 16px 0 rgb(0 0 0 / 16%);
  margin-right: 50px;
  padding-top: 50px;
  > * {
    padding-bottom: 15px;
  }
`;

export const UserName = styled.div`
  padding-bottom: 32px;
`;

export const SettingIcon = styled.div`
  position: absolute;
  right: -8px;
  top: -8px;
  > svg {
    font-size: 32px;
  }
`;
