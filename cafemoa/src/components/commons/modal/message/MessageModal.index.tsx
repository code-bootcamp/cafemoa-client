import { useState } from "react";
import * as S from "./MessageModal.styles";
import Text from "../../text/01/Text01.index";

interface IErrorModalProps {
  title: string;
  text: string;
  status: "write" | "success" | "warning";
  hasInput?: boolean;
  children?: JSX.Element;
  buttons?: JSX.Element;
}

export default function MessageModal() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const onClickIsModalOpen = () => {
    setIsModalOpen((prev) => !prev);
  };

  const ModalComponent = (props: IErrorModalProps) => {
    console.log(props.buttons);
    return (
      <>
        <S.ModalWrap
          open={isModalOpen}
          footer={null}
          centered={true}
          onCancel={() => {
            setIsModalOpen(false);
          }}
        >
          <S.ModalContentsWrap>
            <S.ModalTitle>
              <Text size="48">{props.title}</Text>
            </S.ModalTitle>
            <S.ModalContents>
              <Text size="24">{props.text}</Text>
            </S.ModalContents>
            <div>{props.children}</div>
            <S.ModalBtnWrap>{props.buttons}</S.ModalBtnWrap>
          </S.ModalContentsWrap>
        </S.ModalWrap>
      </>
    );
  };
  return { ModalComponent, onClickIsModalOpen, setIsModalOpen };
}
