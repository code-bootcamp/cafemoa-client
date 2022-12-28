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
}

export default function Select01(props: ISelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<string | number>();
  const onClickOpen = () => {
    setIsOpen((prev) => !prev);
  };
  const onClickSelectValue =
    (value: string | number) => (event: MouseEvent<HTMLButtonElement>) => {
      setIsOpen((prev) => !prev);
      setValue(value);
    };

  return (
    <S.SelectWrap isOpen={isOpen} isValue={value !== undefined}>
      <div>
        <button onClick={onClickOpen}>
          {value !== undefined ? value : props.defaultText ?? "선택"}
        </button>
        <DownOutlined />
      </div>
      <ul>
        {props.selectValue?.map((el) => (
          <Fragment key={uuidv4()}>
            <li>
              <button onClick={onClickSelectValue(el.value)}>{el.label}</button>
            </li>
          </Fragment>
        ))}
      </ul>
    </S.SelectWrap>
  );
}
