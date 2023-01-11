import styled from "@emotion/styled";
import { DEFAULT_COLOR } from "../../../../commons/default/default";
import * as mq from "../../../../commons/styles/mediaQuery";

export const CardImgWrap = styled.div`
  position: relative;
  > img {
    width: 100%;
  }
`;
export const CardInfoWrap = styled.div`
  position: relative;
  padding: 24px 24px 48px;

  ${mq.MobileL} {
    padding: 16px 16px 32px;
  }
`;
export const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid ${DEFAULT_COLOR.black};
`;
