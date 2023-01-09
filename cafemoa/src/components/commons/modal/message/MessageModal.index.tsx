import { useState } from "react";
import * as S from "./MessageModal.styles";
import Text from "../../text/01/Text01.index";
import { BiEdit } from "react-icons/bi";
import { FiCheckCircle } from "react-icons/fi";
import { RiErrorWarningLine } from "react-icons/ri";

interface IErrorModalProps {
  title: string;
  text: string;
  status: "write" | "success" | "warning";
  children?: JSX.Element;
  buttons?: JSX.Element;
}

export default function MessageModal() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  // console.log(userPhone);
  const onClickIsModalOpen = () => {
    // console.log(userPhone);
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
              <S.IconWrap>
                {props.status === "write" && <BiEdit />}
                {props.status === "success" && <FiCheckCircle />}
                {props.status === "warning" && <RiErrorWarningLine />}
              </S.IconWrap>
              <Text size="32">{props.title}</Text>
            </S.ModalTitle>
            <S.ModalContents>
              <Text size="20">{props.text}</Text>
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
