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
  background-color: #ffffff;
  border-bottom: 1px solid #69473e;
  z-index: 100;
`;
export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1640px;
  padding: 0 6.25%;
  height: 100px;
`;
export const Logo = styled.h1`
  width: 200px;
`;
export const Utiles = styled.div`
  > * + * {
    margin-left: 16px;
  }
  svg {
    font-size: 28px;
  }
`;
export const SearchBtn = styled.button``;
export const MenuBtn = styled.button``;
