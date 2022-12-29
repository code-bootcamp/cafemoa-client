// import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ContainerWrap } from "../../../../commons/styles/commonStyles";

// interface IHeroProps {
//   imageUrl: string;
// }

export const HeaderWrap = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
`;
export const HeaderInner = styled(ContainerWrap)`
  display: flex;
  align-items: center;
  height: 100px;
`;
export const Logo = styled.h1`
  width: 200px;
`;
export const Utiles = styled.div``;
