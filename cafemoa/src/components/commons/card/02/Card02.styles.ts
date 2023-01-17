import styled from "@emotion/styled";
import * as mq from "../../../../commons/styles/mediaQuery";

export const CardImgWrap = styled.div`
  position: relative;
  overflow: hidden;
  > img {
    width: 100%;
  }
  ::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.4) 100%
    );
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
