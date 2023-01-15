import { useForm } from "react-hook-form";
import Text from "../../commons/text/01/Text01.index";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./SignupCafeInfo.styles";
import { SignUpCafeInfoSchema } from "./SignupCafeInfo.validation";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import Input02 from "../../commons/input/02/Input02.index";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";
import { v4 as uuidv4 } from "uuid";
import { TAG_VALUES } from "../../../commons/default/default";
import Tag from "../../commons/text/02/Text02.index";
import Uploads01 from "../../commons/uploads/01/Upload01.index";
import { useCreateCafeInform } from "../../commons/hooks/mutations/useCreateCafeInform";
import { useUploadFile } from "../../commons/hooks/mutations/useUploadFile";
import { useUpdateCafeInform } from "../../commons/hooks/mutations/useUpdateCafeInform";
import "antd/dist/antd.css";
import { Upload, Form, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd/es/upload";
import type { UploadFile } from "antd/es/upload/interface";
import { infoUserState } from "../../../commons/stores";
import { useRecoilState } from "recoil";
import Switch02 from "../../commons/switch/02/Switch02.index";
import { useFetchMyCafes } from "../../commons/hooks/queries/useFetchMyCafes";
import { useRouter } from "next/router";
// import Uploads03 from "../../commons/uploads/03/Upload03.index";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

// interface ISignUpCafeInfoProps {
//   data?: Pick<IQuery, "fetchCafeInform">;
//   cafeInformId?: string;
// }

export default function SignUpCafeInfo() {
  const [menufilesList, setMenufilesList] = useState<File[]>([]);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectTag, setSelectTag] = useState<string[]>([]);
  const router = useRouter();
  const { CreatecafeInformSubmit } = useCreateCafeInform();
  const { uploadFile } = useUploadFile();
  const { UpdateCafeInformSubmit } = useUpdateCafeInform();
  const { data } = useFetchMyCafes();
  const [infoUser] = useRecoilState(infoUserState);
  const isCafeInform = infoUser?.fetchOwnerLoggedIn?.is_cafeInform;
  const OwnerId = infoUser.fetchOwnerLoggedIn?.id;

  const onChangeFileUrls = (fileUrl: File, index: number) => {
    const newFileUrls = [...menufilesList];
    newFileUrls[index] = fileUrl;
    setMenufilesList(newFileUrls);
  };
  // const onChangeCafeImageFileUrls = (fileUrl: File, index: number) => {
  //   const newFileUrls = [...menufilesList];
  //   newFileUrls[index] = fileUrl;
  //   setFileList(newFileUrls);
  // };
  console.log(data);
  const { register, handleSubmit, watch, setValue, formState } = useForm({
    resolver: yupResolver(SignUpCafeInfoSchema),
    mode: "onChange",
    defaultValues: {
      cafeAddr: "",
      detailAddr: "",
      cafeinfo: "",
      operatingInfo: "",
      is_WC: false,
      is_Parking: false,
      cafeTag: ["", "", ""],
    },
  });

  // 카페 이미지 업로드 부분

  const handleChange: UploadProps["onChange"] = ({
    fileList: newFileList,
    file: File,
  }) => setFileList(newFileList);
  // setRealfilesList();
  console.log(fileList);

  // const getBase64 = (file: RcFile): Promise<string> =>
  //   new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => resolve(reader.result as string);
  //     reader.onerror = (error) => reject(error);
  //   });

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  // prettier-ignore
  const modules = {
    toolbar:[
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          [{ 'font': [] }],
          [{ 'align': [] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }, 'link'],
          [{ 'color': ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466', 'custom-color'] }, { 'background': [] }],
          ['image', 'video'],
          ['clean']  
        ],
  };

  const onSignUpSubmit = async (data: any) => {
    try {
      // 메뉴이미지 업로드

      const results = await Promise.all(
        menufilesList.map(
          async (files: any) => await uploadFile({ variables: { files } })
        )
      );
      console.log(results);
      const resultMenuUrls = results.map((el) =>
        el !== undefined ? el.data?.uploadFile[0] : ""
      );

      // 카페이미지 업로드

      const cafeImage = await Promise.all(
        fileList.map(
          async (files: any) =>
            await uploadFile({ variables: { files: files.originFileObj } })
        )
      );
      const resultCafeImageUrls = cafeImage.map((el) =>
        el !== undefined ? el.data?.uploadFile[0] : ""
      );
      void CreatecafeInformSubmit(data, resultMenuUrls, resultCafeImageUrls);
      void router.push(`/mypage/owner/${OwnerId}`);
      // if (isCafeInform ?? false) {
      //   void CreatecafeInformSubmit(data, resultMenuUrls, resultCafeImageUrls);
      // } else {
      //   void UpdateCafeInformSubmit(
      //     data?.fetchMyCafes[0].id,
      //     data,
      //     resultMenuUrls,
      //     resultCafeImageUrls
      //   );
      // }
    } catch (e) {
      console.log(e);
    }
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  const handleComplete = (data: Address) => {
    setValue("cafeAddr", data.address);
    toggleModal();
  };
  const onClickTag = (value: string) => () => {
    const tagArr = selectTag;
    const _tempTag = tagArr.filter((el) => el.includes(value));
    if (_tempTag.length === 1) {
      const idx = tagArr.indexOf(value);
      tagArr.splice(idx, 1);
      setSelectTag([...tagArr]);
      return;
    }
    if (tagArr.length >= 3) {
      tagArr.shift();
    }
    tagArr.push(value);
    setSelectTag([...tagArr]);
    setValue("cafeTag", selectTag);
  };
  const onSetWCValue = (value: boolean) => {
    console.log(value);
    setValue("is_WC", value);
  };
  const onSetPKValue = (value: boolean) => {
    console.log(value);
    setValue("is_Parking", value);
  };
  return (
    <>
      <S.ContainerWrapper onSubmit={handleSubmit(onSignUpSubmit)}>
        <S.ContainerInner>
          {/* <S.TitleWrap>
            <Text size="32" fontColor="subColor01">
              카페정보 입력
            </Text>
          </S.TitleWrap>
          <S.InputWrap>
            <Input02
              type="text"
              name="카페 상호명"
              register={register("brandName")}
            />
          </S.InputWrap> */}
          <S.InputWrap>
            <Input02
              type="text"
              name="주소"
              register={register("cafeAddr")}
              isValid={watch("cafeAddr").length !== 0}
              readOnly={true}
            />
            <S.AddrBtn type="button" color="beige" onClick={toggleModal}>
              <Text size="16">주소 검색</Text>
            </S.AddrBtn>
          </S.InputWrap>
          <S.InputWrap>
            <Input02
              type="text"
              name="상세 주소"
              errorMsg={formState.errors.detailAddr?.message}
              register={register("detailAddr")}
            />
          </S.InputWrap>
          <S.ContentsTitleWrap>
            <Text size="20" fontColor="subColor01">
              카페 태그선택
            </Text>
          </S.ContentsTitleWrap>
          <S.TagsWrap style={{ marginBottom: "40px" }}>
            {TAG_VALUES.map((el) => (
              <button key={uuidv4()} onClick={onClickTag(el)}>
                <Tag size="md" isActive={selectTag.includes(el)}>
                  {el}
                </Tag>
              </button>
            ))}
          </S.TagsWrap>
          <S.ContentsTitleWrap>
            <Text size="20" fontColor="subColor01">
              카페 소개
            </Text>
          </S.ContentsTitleWrap>
          <div style={{ padding: "40px 0px", paddingBottom: "60px" }}>
            <ReactQuill
              style={{
                width: "100%",
                height: "300px",
              }}
              modules={modules}
            />
          </div>
          <S.ContentsTitleWrap>
            <Text size="20" fontColor="subColor01">
              편의 시설
            </Text>
          </S.ContentsTitleWrap>
          <S.CheckBoxContainer>
            매장 내 화장실
            <Switch02
              // register={register("is_main")}
              onSetValue={onSetWCValue}
              defaultValue={watch("is_WC")}
            />
          </S.CheckBoxContainer>
          <S.CheckBoxContainer>
            카페 주차장
            <Switch02
              // register={register("is_main")}
              onSetValue={onSetPKValue}
              defaultValue={watch("is_Parking")}
            />
          </S.CheckBoxContainer>
          <S.ContentsTitleWrap>
            <Text size="20" fontColor="subColor01">
              운영시간 및 휴무일
            </Text>
          </S.ContentsTitleWrap>
          <div style={{ padding: "40px 0px", paddingBottom: "60px" }}>
            <ReactQuill
              style={{
                width: "100%",
                height: "300px",
              }}
              modules={modules}
            />
          </div>
          <S.ContentsTitleWrap>
            <Text size="20" fontColor="subColor01">
              메뉴 이미지
            </Text>
          </S.ContentsTitleWrap>
          <S.ImageWrapper>
            <Uploads01 onChangeFileUrls={onChangeFileUrls} maxLength={3} />
          </S.ImageWrapper>
          <S.ContentsTitleWrap>
            <Text size="20" fontColor="subColor01">
              카페 사진
            </Text>
          </S.ContentsTitleWrap>
          <S.CafeImageContainer>
            <Form layout="vertical">
              <Form.Item>
                <Upload
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture-card"
                  fileList={fileList}
                  onChange={handleChange}
                >
                  {fileList.length >= 8 ? null : uploadButton}
                </Upload>
              </Form.Item>
            </Form>
          </S.CafeImageContainer>
          {/* <S.CafeImageContainer>
            <S.CafeImageWrap>
              <img src="/images/cafelist/Cafe3.jpeg" />
            </S.CafeImageWrap>
            <S.CafeImageWrap>
              <img src="/images/cafelist/Cafe3.jpeg" />
            </S.CafeImageWrap>
            <S.CafeImageWrap>
              <img src="/images/cafelist/Cafe3.jpeg" />
            </S.CafeImageWrap>
            <S.CafeImageWrap>
              <img src="/images/cafelist/Cafe3.jpeg" />
            </S.CafeImageWrap>
          </S.CafeImageContainer> */}
          <S.SignUpBtnWrap>
            <S.SubmitBtn color="brown">
              <Text size="24" fontColor="white">
                등록
              </Text>
            </S.SubmitBtn>
          </S.SignUpBtnWrap>
        </S.ContainerInner>
      </S.ContainerWrapper>
      {isModalOpen && (
        <Modal
          title="주소 검색"
          open={true}
          onOk={toggleModal}
          onCancel={toggleModal}
        >
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
