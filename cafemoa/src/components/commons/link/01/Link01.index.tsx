import * as S from "./Link01.styles";
import Link from "next/link";
import { ReactNode } from "react";
import { UrlObject } from "url";

interface ILinkProps {
  href: string | UrlObject;
  children: ReactNode;
  as?: string;
  active?: boolean;
}

export default function Link01(props: ILinkProps) {
  return (
    <Link href={props.href} as={props.as}>
      <S.LinkWrap active={props.active}>
        <S.LinkBorder />
        {props.children}
      </S.LinkWrap>
    </Link>
  );
}
