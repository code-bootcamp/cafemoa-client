import styled from "@emotion/styled";
import * as mq from "../../../commons/styles/mediaQuery";
import { useFetchUser } from "../hooks/queries/useFetchUser";
import FooterLayout from "./footer/Footer.index";
import HeaderLayout from "./header/Header.index";

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  useFetchUser();
  return (
    <>
      <HeaderLayout />
      <Contents>{props.children}</Contents>
      <FooterLayout />
    </>
  );
}

const Contents = styled.div`
  overflow: hidden;
  padding-top: 100px;
  padding-bottom: 100px;
  ${mq.MobileM} {
    padding-top: 72px;
  }
`;
