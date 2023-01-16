import { useForm } from "react-hook-form";
import Text from "../../commons/text/01/Text01.index";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./SignupCafeInfo.styles";
import { SignUpCafeInfoSchema } from "./SignupCafeInfo.validation";
import { useEffect, useState } from "react";
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
import { infoUserState } from "../../../commons/stores";
import { useRecoilState } from "recoil";
import Switch02 from "../../commons/switch/02/Switch02.index";
import { useFetchMyCafes } from "../../commons/hooks/queries/useFetchMyCafes";
import { useRouter } from "next/router";
import type { UploadProps } from "antd/es/upload";
import type { RcFile, UploadFile } from "antd/es/upload/interface";
import { IFormCafeInfoData } from "./SignupCafeInfo.types";
import { useDeleteCafeImage } from "../../commons/hooks/mutations/useDeleteCafeImage";

// import Uploads03 from "../../commons/uploads/03/Upload03.index";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function SignUpCafeInfo() {
  const [menufilesList, setMenufilesList] = useState<File[]>([]);
  // const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectTag, setSelectTag] = useState<string[]>([]);
  const router = useRouter();
  const { CreatecafeInformSubmit } = useCreateCafeInform();
  const { uploadFile } = useUploadFile();
  const { UpdateCafeInformSubmit } = useUpdateCafeInform();
  const { onDeleteCafeImage } = useDeleteCafeImage();
  const { data } = useFetchMyCafes();
  const [infoUser] = useRecoilState(infoUserState);
  const OwnerId: string | undefined = infoUser?.fetchOwnerLoggedIn?.id;
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [cafeFileList, setCafeFileList] = useState<RcFile[]>([]);

  // console.log(data);
  console.log("cafeFileList", cafeFileList);
  const onChangeFileUrls = (fileUrl: File, index: number) => {
    const newFileUrls = [...menufilesList];
    newFileUrls[index] = fileUrl;
    setMenufilesList(newFileUrls);
  };

  // console.log(data);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    getValues,
    formState,
    trigger,
  } = useForm<IFormCafeInfoData>({
    resolver: yupResolver(SignUpCafeInfoSchema),
    mode: "onChange",
    defaultValues: {
      cafeAddr: "",
      detailAddr: "",
      cafeinfo: "",
      notice: "",
      operatingInfo: "",
      is_WC: false,
      is_Wifi: false,
      is_Parking: false,
      cafeTag: ["", "", ""],
      menu_imageUrl: ["", "", ""],
      cafe_imageUrl: [],
    },
  });

  const onChangeOperatingInfo = (value: string) => {
    setValue("cafeinfo", value === "<p><br></p>" ? "" : value);
    void trigger("cafeinfo");
  };

  const onChangeCafeInfo = (value: string) => {
    setValue("operatingInfo", value === "<p><br></p>" ? "" : value);
    void trigger("operatingInfo");
  };
  const onChangeNotice = (value: string) => {
    setValue("notice", value === "<p><br></p>" ? "" : value);
    void trigger("notice");
  };

  // 카페 이미지 업로드 부분

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  // console.log(cafeFileList);

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
  // console.log(isCafeInform);
  const onSignUpSubmit = async (value: IFormCafeInfoData) => {
    console.log(value);
    try {
      const results = await Promise.all(
        menufilesList.map(
          async (files: any) => await uploadFile({ variables: { files } })
        )
      );
      const tempUrls = results.map((el, idx) =>
        el !== undefined
          ? String(el.data?.uploadFile[0])
          : value.menu_imageUrl[idx]
      );
      const resultUrls = tempUrls.filter((el) => el !== undefined);

      const cafeImage = await Promise.all(
        cafeFileList.map(
          async (files: any) => await uploadFile({ variables: { files } })
        )
      );
      const tempCafeUrls = cafeImage.map((el, idx) =>
        el !== undefined
          ? String(el.data?.uploadFile[0])
          : value.menu_imageUrl[idx]
      );
      const resultCafeImageUrls = tempCafeUrls.filter((el) => el !== undefined);

      const submitData: IFormCafeInfoData = {
        ...value,
        menu_imageUrl:
          resultUrls.length === 0 ? value.menu_imageUrl : resultUrls,
        cafe_imageUrl:
          resultCafeImageUrls.length === 0
            ? [...value.cafe_imageUrl]
            : [...resultCafeImageUrls],
      };
      console.log(submitData);

      if (infoUser?.fetchOwnerLoggedIn?.is_cafeInform === false) {
        void CreatecafeInformSubmit(submitData);
        void router.push(`/mypage/owner/${String(OwnerId)}`);
      } else {
        void UpdateCafeInformSubmit(
          String(data?.fetchMyCafes[0].id),
          submitData
        );
      }
    } catch (error) {
      console.log(error);
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
    // console.log(value);
    setValue("is_WC", value);
  };
  const onSetPKValue = (value: boolean) => {
    // console.log(value);
    setValue("is_Parking", value);
  };
  const onSetWifiValue = (value: boolean) => {
    // console.log(value);
    setValue("is_Wifi", value);
  };

  const onReset = () => {
    router.back();
  };

  useEffect(() => {
    if (data?.fetchMyCafes[0]?.cafeTag != null) {
      const cafeTags = data.fetchMyCafes[0].cafeTag.map((el) =>
        String(el.tagName)
      );
      const cafeImages = data.fetchMyCafes[0].cafeImage.map((el) =>
        String(el.cafe_image)
      );
      console.log(
        data.fetchMyCafes[0].cafeImage,
        "data.fetchMyCafes[0].cafeImage"
      );
      const defaultFileList: UploadFile[] =
        data?.fetchMyCafes[0].cafeImage?.map((el) => ({
          uid: el.id,
          name: el.cafe_image,
          status: "done",
          url: `https://storage.googleapis.com/${el.cafe_image}`,
        }));
      setFileList(defaultFileList);
      const cafeMenuImages = data.fetchMyCafes[0].cafeMenuImage.map((el) =>
        String(el.menu_imageUrl)
      );
      console.log(data);
      setSelectTag([...cafeTags]);
      const resetData = {
        cafeAddr: data.fetchMyCafes[0].cafeAddr ?? "",
        detailAddr: data.fetchMyCafes[0].detailAddr ?? "",
        cafeinfo: data.fetchMyCafes[0].cafeinfo ?? "",
        notice: data.fetchMyCafes[0].notice ?? "",
        operatingInfo: data.fetchMyCafes[0].operatingInfo ?? "",
        is_WC: data.fetchMyCafes[0].is_WC ?? false,
        is_Wifi: data.fetchMyCafes[0].is_Wifi ?? false,
        is_Parking: data.fetchMyCafes[0].is_Parking ?? false,
        cafeTag: [...(cafeTags ?? "")],
        menu_imageUrl: [...(cafeMenuImages ?? "")],
        cafe_imageUrl: [...(cafeImages ?? "")],
      };
      reset({ ...resetData });
    }
    return () =>
      reset({
        cafeAddr: "",
        detailAddr: "",
        cafeinfo: "",
        notice: "",
        operatingInfo: "",
        is_WC: false,
        is_Wifi: false,
        is_Parking: false,
        cafeTag: ["", "", ""],
        menu_imageUrl: ["", "", ""],
        cafe_imageUrl: [],
      });
  }, [data]);

  return (
    <>
      <S.ContainerWrapper
        onSubmit={handleSubmit(onSignUpSubmit)}
        onReset={onReset}
      >
        <S.ContainerInner>
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
              isValid={watch("cafeAddr").length !== 0}
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
              onChange={onChangeOperatingInfo}
              defaultValue={data?.fetchMyCafes[0]?.cafeinfo}
            />
          </div>
          <S.ContentsTitleWrap>
            <Text size="20" fontColor="subColor01">
              공지사항
            </Text>
          </S.ContentsTitleWrap>
          <div style={{ padding: "40px 0px", paddingBottom: "60px" }}>
            <ReactQuill
              style={{
                width: "100%",
                height: "200px",
              }}
              modules={modules}
              onChange={onChangeNotice}
              defaultValue={data?.fetchMyCafes[0]?.notice}
            />
          </div>

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
              onChange={onChangeCafeInfo}
              defaultValue={data?.fetchMyCafes[0]?.operatingInfo}
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
          <S.CheckBoxContainer>
            와이파이
            <Switch02
              // register={register("is_main")}
              onSetValue={onSetWifiValue}
              defaultValue={watch("is_Wifi")}
            />
          </S.CheckBoxContainer>
          <S.ContentsTitleWrap>
            <Text size="20" fontColor="subColor01">
              메뉴 이미지
            </Text>
          </S.ContentsTitleWrap>
          <S.ImageWrapper>
            <Uploads01
              defaultUrls={getValues("menu_imageUrl")}
              onChangeFileUrls={onChangeFileUrls}
              maxLength={3}
            />
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
                  // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture-card"
                  fileList={fileList}
                  onChange={handleChange}
                  beforeUpload={(file) => {
                    console.log(file);
                    const tempFileList = [...cafeFileList, file];
                    setCafeFileList(tempFileList);
                  }}
                  onRemove={async (file) => {
                    console.log(file.uid);
                    if (!file.uid.includes("upload")) {
                      await onDeleteCafeImage(file.uid);
                    } else {
                      const tempFileList = cafeFileList.filter(
                        (el) => el.uid !== file.uid
                      );
                      setCafeFileList(tempFileList);
                    }
                  }}
                >
                  {uploadButton}
                </Upload>
              </Form.Item>
            </Form>
            {/* <Upload
              // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onChange={handleChange}
            >
              {uploadButton}
            </Upload> */}
          </S.CafeImageContainer>
          <S.SignUpBtnWrap>
            {infoUser?.fetchOwnerLoggedIn?.is_cafeInform && (
              <S.ResetBtn color="beige" type="reset">
                <Text size="24" fontColor="black">
                  취소
                </Text>
              </S.ResetBtn>
            )}
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
