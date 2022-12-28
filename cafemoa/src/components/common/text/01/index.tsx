import styled from "@emotion/styled";

interface ITextProps {
  size?:
    | "16"
    | "18"
    | "20"
    | "24"
    | "28"
    | "32"
    | "36"
    | "42"
    | "48"
    | "54"
    | "72"
    | "80";
  weight?: "300" | "500" | "700";
  children: string;
}

interface IFontProps {
  size?: string;
  weight?: string;
}

export default function Text(props: ITextProps) {
  return (
    <Word size={props.size} weight={props.weight}>
      {props.children}
    </Word>
  );
}

const Word = styled.span`
  font-size: ${(props: IFontProps) =>
    props.size === undefined ? "16px" : `${props.size}px`};
  font-weight: ${(props: IFontProps) =>
    props.weight === null ? "300" : props.weight};
`;
