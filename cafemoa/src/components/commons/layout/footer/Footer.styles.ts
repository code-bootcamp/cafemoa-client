import styled from "@emotion/styled";
import { DEFAULT_COLOR } from "../../../../commons/default/default";

export const FooterWrap = styled.div`
  border-top: 1px solid ${DEFAULT_COLOR.mainColor};
  padding: 24px 0 24px;
  text-align: center;
`;
export const FooterMenu = styled.ul`
  padding: 0;
  li {
    display: inline-block;
    padding: 0 8px;
  }
`;
export const FooterCopy = styled.div``;
