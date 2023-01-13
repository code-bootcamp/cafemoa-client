import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { infoUserState } from "../../../../commons/stores";
import { useCreateComment } from "../../../commons/hooks/mutations/useCreateComment";
import { useUpdateComment } from "../../../commons/hooks/mutations/useUpdateComment";
import Text from "../../../commons/text/01/Text01.index";
import Textarea01 from "../../../commons/textareas/01/textarea01.index";
import Uploads01 from "../../../commons/uploads/01/Upload01.index";
import Users01 from "../../../commons/user/01/Users01.index";
import * as S from "./CafeDetail.styles";
import { useUploadFile } from "../../../commons/hooks/mutations/useUploadFile";

interface IReviewWriteProps {
  isEdit: boolean;
  image_Url?: string;
  cafeInformId: string;
  commentId: string;
  onClickOpenReivewWrite: () => void;
}
interface IFormUpdateCommentData {
  reply: string;
  image_Url?: string[];
}

interface IFormCreateComment {
  reply: string;
  image_url: string[];
}

export default function ReviewWrite(props: IReviewWriteProps) {
  const { createCommentSubmit } = useCreateComment();
  const { updateCommentSubmit } = useUpdateComment();
  const { uploadFile } = useUploadFile();
  const [filesList, setFilesList] = useState<File[]>([]);
  const [infoUser] = useRecoilState(infoUserState);
  const userName = infoUser?.fetchUser?.name;
  const { register, handleSubmit } = useForm({
    // resolver: yupResolver(CreateCommentSchema),
    mode: "onChange",
    defaultValues: {
      reply: "",
    },
  });
  const onChangeFileUrls = (fileUrl: File, index: number) => {
    const newFileUrls = [...filesList];
    console.log(newFileUrls);
    newFileUrls[index] = fileUrl;
    setFilesList(newFileUrls);
  };
  const onReplyUpdate = () => {
    // inputRef.current?.click();
  };
  const onReplySubmit = async (data: any) => {
    try {
      const results = await Promise.all(
        filesList.map(
          async (files: any) => await uploadFile({ variables: { files } })
        )
      );
      console.log(results);
      const resultUrls = results.map((el) =>
        el !== undefined ? el.data?.uploadFile : ""
      );
      if (!props.isEdit) {
        void createCommentSubmit(data, props.cafeInformId, resultUrls);
      } else {
        void updateCommentSubmit(data, props.commentId, resultUrls);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <S.ReviewWriteWrapper>
        <S.ReviewWriteTitle>
          <Text size="18" fontColor="black">
            소중한 리뷰를 작성해주세요
          </Text>
        </S.ReviewWriteTitle>
        <S.ReviewWriteFromWrap onSubmit={handleSubmit(onReplySubmit)}>
          <Uploads01 onChangeFileUrls={onChangeFileUrls} maxLength={3} />
          <S.ReviewWriteUserWrapper>
            <Users01
              image="/images/cafedetail/CafeDetail04.jpeg"
              name={userName}
              size="sm"
            />
          </S.ReviewWriteUserWrapper>
          <S.ReviewWriteInputWrapper>
            <Textarea01
              placeHolder="고객님의 의견을 자유롭게 적어주세요"
              register={register("reply")}
            />
          </S.ReviewWriteInputWrapper>
          <S.ReviewWriteBtnContainer>
            <S.ReviewCancelBtn
              type="button"
              color="lightBeige"
              onClick={props.onClickOpenReivewWrite}
            >
              <Text size="16" fontColor="black">
                취소
              </Text>
            </S.ReviewCancelBtn>
            <S.ReviewSubmitBtn
              onClick={props.isEdit ? onReplyUpdate : onReplySubmit}
              color="brown"
            >
              {props.isEdit ? (
                <Text size="16" fontColor="white">
                  수정하기
                </Text>
              ) : (
                <Text size="16" fontColor="white">
                  작성하기
                </Text>
              )}
            </S.ReviewSubmitBtn>
          </S.ReviewWriteBtnContainer>
        </S.ReviewWriteFromWrap>
      </S.ReviewWriteWrapper>
    </>
  );
}
