// import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { DEFAULT_COLOR } from "../../../../commons/default/default";
import * as mq from "../../../../commons/styles/mediaQuery";

// interface IHeroProps {
//   imageUrl: string;
// }

export const HeaderWrap = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: #ffffff;
  /* border-bottom: 1px solid #69473e; */
  box-shadow: 0px 0px 10px 0;
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
  ${mq.MobileM} {
    height: 72px;
  }
`;
export const Logo = styled.h1`
  width: 200px;
  ${mq.MobileM} {
    width: 140px;
  }
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
export const MenuBtn = styled.button`
  display: none;
  ${mq.MobileM} {
    display: inline-block;
  }
`;
export const MyPageBtn = styled.a`
  display: inline-flex;
  align-items: flex-end;
  ${mq.MobileM} {
    display: none;
  }
`;
export const MenuWrap = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  > a {
    display: inline-block;
    padding: 0 8px;
  }
  ${mq.MobileM} {
    display: none;
  }
`;
