import styled from "@emotion/styled";
import { DEFAULT_COLOR } from "../../../../commons/default/default";

export const BoxWrapper = styled.div`
  position: relative;
  padding: 24px 24px 48px;
  width: 100%;
  border: 1px solid ${DEFAULT_COLOR.black};
  border-radius: 24px;
  @media screen and (max-width: 1024px) {
    padding: 16px 16px 32px;
  }
`;
