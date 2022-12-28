import styled from "@emotion/styled";

interface IBoxProps {
  children: JSX.Element;
  styles?: {
    [key: string]: string | number;
  };
}

export default function Box01(props: IBoxProps) {
  const _styles = { ...props.styles };
  return <BoxWrapper style={_styles}>{props.children}</BoxWrapper>;
}

const BoxWrapper = styled.div`
  padding: 24px 24px 48px;
  width: 100%;
  border: 1px solid #000000;
  border-radius: 24px;
`;
