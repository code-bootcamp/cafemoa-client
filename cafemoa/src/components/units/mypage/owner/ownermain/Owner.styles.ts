import styled from "@emotion/styled";
import { ContainerWrap } from "../../../../../commons/styles/commonStyles";
import { MobileS } from "../../../../../commons/styles/mediaQuery";

export const MyPageContainer = styled(ContainerWrap)`
  padding-top: 100px;
`;
export const OwnerMenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 768px;
  margin: 0 auto;
  > div {
    width: 50%;
    padding: 8px;
  }
  ${MobileS} {
    > div {
      width: 100%;
    }
  }
`;
export const ImageWrap = styled.div`
  text-align: center;
  padding: 24px 64px 0;
`;
export const TitleWrap = styled.div`
  text-align: center;
`;
