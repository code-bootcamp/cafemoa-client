import styled from "@emotion/styled";
import * as mq from "../../../../commons/styles/mediaQuery";

export const CardImgWrap = styled.div`
  position: relative;
  overflow: hidden;
  > img {
    width: 100%;
  }
`;
export const CardInfoWrap = styled.div`
  padding: 24px 24px 48px;
  ${mq.MobileL} {
    padding: 16px 16px 24px;
  }
`;
export const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid #000000;
  border-radius: 12px;
  overflow: hidden;
`;
