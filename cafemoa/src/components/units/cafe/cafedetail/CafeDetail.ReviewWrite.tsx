import { useEffect, useState } from "react";
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
import { IComment } from "../../../../commons/types/generated/types";
import { Modal } from "antd";

interface IReviewWriteProps {
  isEdit: boolean;
  setIsEdit: (bool: boolean) => void;
  setIsReview: (bool: boolean) => void;
  image_Url?: string;
  cafeInformId: string;
  commentId: string;
  updatedata?: IComment;
  setUpdatedata: (el?: IComment) => void;
  onClickOpenReivewWrite: () => void;
  onClickCloseReviewWrite: () => void;
}

interface IFormCreateComment {
  reply: string;
  image_Url: string[];
}

export default function ReviewWrite(props: IReviewWriteProps) {
  console.log(props.isEdit);
  const { createCommentSubmit } = useCreateComment();
  const { updateCommentSubmit } = useUpdateComment();
  const { uploadFile } = useUploadFile();
  const [filesList, setFilesList] = useState<File[]>([]);
  const [infoUser] = useRecoilState(infoUserState);
  const userNickName = infoUser?.fetchUser?.nickname;
  const userProfileImage = infoUser?.fetchUser?.profileImage;
  const { register, handleSubmit, getValues, reset } =
    useForm<IFormCreateComment>({
      // resolver: yupResolver(CreateCommentSchema),
      mode: "onChange",
      defaultValues: {
        reply: "",
        image_Url: [],
      },
    });
  // console.log(infoUser.fetchUser?.profileImage);
  console.log(infoUser);
  console.log("111111111111");

  const onChangeFileUrls = (fileUrl: File, index: number) => {
    const newFileUrls = [...filesList];
    console.log(newFileUrls);
    newFileUrls[index] = fileUrl;
    setFilesList(newFileUrls);
  };
  const onReplySubmit = async (value: IFormCreateComment) => {
    try {
      const results = await Promise.all(
        filesList.map(
          async (files: any) => await uploadFile({ variables: { files } })
        )
      );
      const tempUrls = results.map((el, idx) =>
        el !== undefined ? String(el.data?.uploadFile[0]) : value.image_Url[idx]
      );

      const resultUrls = tempUrls.map((el) => el);

      if (value.image_Url.length === 0 && resultUrls.length === 0) {
        Modal.warning({
          content: "리뷰 이미지 한개는 필수입니다.",
        });
        return;
      }

      const data = {
        ...value,
        image_Url: resultUrls,
      };

      if (!props.isEdit) {
        void createCommentSubmit(data, props.cafeInformId);
      } else {
        void updateCommentSubmit(data, props.commentId, props.cafeInformId);
      }
      props.setIsReview(false);
    } catch (e) {
      console.log(e);
    }
    props.setIsReview(false);
    props.setUpdatedata();
  };

  useEffect(() => {
    // console.log(props.updatedata);
    if (props.updatedata != null) {
      const ImageUrls = props.updatedata.commentImage.map((el) =>
        String(el.image_url)
      );
      const resetData = {
        reply: props.updatedata.reply,
        image_Url: [...ImageUrls],
      };
      reset({ ...resetData });
    }
    return () => reset({ reply: "", image_Url: [] });
  }, [props.updatedata]);

  return (
    <>
      <S.ReviewWriteWrapper>
        <S.ReviewWriteTitle>
          <Text size="18" fontColor="black">
            소중한 리뷰를 작성해주세요
          </Text>
        </S.ReviewWriteTitle>
        <S.ReviewWriteFromWrap onSubmit={handleSubmit(onReplySubmit)}>
          <Uploads01
            // defaultUrls={[...props.updatedata.commentImage]}
            defaultUrls={getValues("image_Url")}
            onChangeFileUrls={onChangeFileUrls}
            maxLength={3}
          />
          <S.ReviewWriteUserWrapper>
            <Users01 image={userProfileImage} name={userNickName} size="sm" />
          </S.ReviewWriteUserWrapper>
          <S.ReviewWriteInputWrapper>
            <Textarea01
              placeHolder="고객님의 의견을 자유롭게 적어주세요"
              register={register("reply")}
              defaultValue={props.updatedata?.reply}
            />
          </S.ReviewWriteInputWrapper>
          <S.ReviewWriteBtnContainer>
            <S.ReviewCancelBtn
              type="reset"
              color="lightBeige"
              onClick={props.onClickCloseReviewWrite}
            >
              <Text size="16" fontColor="black">
                취소
              </Text>
            </S.ReviewCancelBtn>
            <S.ReviewSubmitBtn color="brown">
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
