import styled from "@emotion/styled";
import { ContainerWrap } from "../../../../../commons/styles/commonStyles";

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
`;
export const ImageWrap = styled.div`
  text-align: center;
  padding-top: 24px;
`;
export const TitleWrap = styled.div`
  text-align: center;
`;
