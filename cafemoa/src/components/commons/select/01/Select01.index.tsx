import { DownOutlined } from "@ant-design/icons";
import { Fragment, MouseEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import * as S from "./Select01.styles";

interface ISelectValues {
  label: string;
  value: string | number;
}

interface ISelectProps {
  selectValue: ISelectValues[];
  defaultText?: string;
  setSelectValue: (value: string | number) => void;
  styles?: {
    [key: string]: string | number;
  };
}

export default function Select01(props: ISelectProps) {
  const _styles = { ...props.styles };
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<string | number>();
  const [label, setLabel] = useState<string | number>();
  const onClickOpen = () => {
    setIsOpen((prev) => !prev);
  };
  const onClickSelectValue =
    (value: string | number, label: string | number) =>
    (event: MouseEvent<HTMLButtonElement>) => {
      setIsOpen((prev) => !prev);
      setValue(value);
      setLabel(label);
      props.setSelectValue(value);
    };

  return (
    <S.SelectWrap style={_styles} isOpen={isOpen} isValue={value !== undefined}>
      <div>
        <button type="button" onClick={onClickOpen}>
          {label !== undefined ? label : props.defaultText ?? "선택"}
          <DownOutlined />
        </button>
      </div>
      <ul>
        {props.selectValue?.map((el) => (
          <Fragment key={uuidv4()}>
            <li>
              <button
                type="button"
                onClick={onClickSelectValue(el.value, el.label)}
              >
                {el.label}
              </button>
            </li>
          </Fragment>
        ))}
      </ul>
    </S.SelectWrap>
  );
}
