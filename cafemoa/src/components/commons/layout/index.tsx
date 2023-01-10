import styled from "@emotion/styled";
import * as mq from "../../../commons/styles/mediaQuery";
import { useFetchUser } from "../hooks/queries/useFetchUser";
import FooterLayout from "./footer/Footer.index";
import HeaderLayout from "./header/Header.index";

import { Transition, TransitionGroup } from "react-transition-group";
import { useRouter } from "next/router";
import { ReactNode, useRef } from "react";

const TIMEOUT = 400;
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

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const nodeRef = useRef(null);
  useFetchUser();
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
            >
              {props.children}
            </Contents>
          )}
        </Transition>
      </TransitionGroup>
      {/* <Contents>{props.children}</Contents> */}
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
