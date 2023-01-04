import { useState } from "react";
import Text from "../../../commons/text/01/Text01.index";
import * as S from "./CafeDetail.styles"

interface IReviewModalProps {
    title: string;
    children?: JSX.Element;
    buttons?: JSX.Element;
  }

export default function ReviewModal() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState(false);

  const onClickIsModalOpen = () => {
    setIsModalOpen((prev) => !prev);
  };
  
  const onClickEditModalOpen = () => {
    setIsEdit(true);
    setIsModalOpen((prev) => !prev);
  }
  
  const onCLickCancel = () => {
    setIsEdit(false);
    setIsModalOpen((prev) => !prev);
  }

  const ReviewModalComponent = (props: IReviewModalProps) => {
    return (
      <>
        <S.ModalWrapper
          open={isModalOpen}
          footer={null}
          centered={true}
          width={1000}
          onCancel={() => {
            setIsModalOpen(false);
          }}
        >
          <S.ModalReviewWrapper>
            <S.ModalReviewTitle>
              <Text size="18">{props.title}</Text>
            </S.ModalReviewTitle>
              <div>{props.children}</div>
            <S.ModalReviewBtnContainer>{props.buttons}</S.ModalReviewBtnContainer>
          </S.ModalReviewWrapper>
        </S.ModalWrapper>
      </>
    );
  };
  return { ReviewModalComponent, onClickIsModalOpen, setIsModalOpen, onClickEditModalOpen, onCLickCancel, isEdit };
}
