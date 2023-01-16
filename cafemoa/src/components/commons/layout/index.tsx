import styled from "@emotion/styled";
import * as mq from "../../../commons/styles/mediaQuery";
import { useFetchUser } from "../hooks/queries/useFetchUser";
import FooterLayout from "./footer/Footer.index";
import HeaderLayout from "./header/Header.index";
import { Transition, TransitionGroup } from "react-transition-group";
import { useRouter } from "next/router";
import { ReactNode, useRef } from "react";
import { useAuth } from "../hooks/customs/useAuth";
import { useOwnerPage } from "../hooks/customs/useOwnerPage";

interface IGetTransitionStyles {
  entering: {
    position: string;
    opacity: number;
  };
  entered: {
    transition: string;
    opacity: number;
  };
  exiting: {
    transition: string;
    opacity: number;
  };
  [key: string]: any;
}
interface ILayoutProps {
  children: ReactNode;
}

const TIMEOUT = 400;
const getTransitionStyles: IGetTransitionStyles = {
  entering: {
    position: `absolute`,
    opacity: 0,
  },
  entered: {
    transition: `opacity ${TIMEOUT}ms ease-in, transform ${TIMEOUT}ms ease-out`,
    opacity: 1,
  },
  exiting: {
    transition: `opacity ${TIMEOUT}ms ease-in, transform ${TIMEOUT}ms ease-out`,
    opacity: 0,
  },
};

export default function Layout(props: ILayoutProps) {
  useAuth();
  useOwnerPage();
  useFetchUser();
  const router = useRouter();
  const nodeRef = useRef(null);
  console.log(router.pathname);
  return (
    <>
      <HeaderLayout />
      <TransitionGroup style={{ position: "relative" }}>
        <Transition
          key={router.pathname}
          timeout={{
            enter: TIMEOUT,
            exit: TIMEOUT,
          }}
          nodeRef={nodeRef}
        >
          {(status) => (
            <Contents
              style={{
                ...getTransitionStyles[status],
              }}
              isLoginPage={router.pathname === "/login"}
            >
              {props.children}
            </Contents>
          )}
        </Transition>
      </TransitionGroup>
      <FooterLayout />
    </>
  );
}

interface IContentsStyles {
  isLoginPage: boolean;
}

const Contents = styled.div<IContentsStyles>`
  overflow: hidden;
  padding-top: 100px;
  padding-bottom: ${(props) => (props.isLoginPage ? "0" : "100px")};
  ${mq.MobileM} {
    padding-top: 72px;
  }
`;
