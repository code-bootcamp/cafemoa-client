import * as S from "./StampSave.styles";
import Text from "../../../../commons/text/01/Text01.index";
import Box01 from "../../../../commons/box/01/Box01.index";
import MessageModal from "../../../../commons/modal/message/MessageModal.index";
import { useForm } from "react-hook-form";
import { Modal } from "antd";
import { useEffect, useRef, useState } from "react";
import { fetchCouponAddUsers } from "../../../../commons/hooks/queries/useFetchCouponAddUsers";
import { useCreateStamp } from "../../../../commons/hooks/mutations/useCreateStamp";
import Input01 from "../../../../commons/input/01/Input01.index";
import { useRouter } from "next/router";
import TestQr from "../../../../../../pages/mypage/owner/stampsave/test";
import {
  useHtml5QrCodeScanner,
  useAvailableDevices,
} from "react-html5-qrcode-reader";
import { SearchOutlined } from "@ant-design/icons";
import Select01 from "../../../../commons/select/01/Select01.index";

const SELECT_VALUES01 = [
  { label: "1개", value: 1 },
  { label: "2개", value: 2 },
  { label: "3개", value: 3 },
  { label: "4개", value: 4 },
  { label: "5개", value: 5 },
  { label: "6개", value: 6 },
  { label: "7개", value: 7 },
  { label: "8개", value: 8 },
  { label: "9개", value: 9 },
  { label: "10개", value: 10 },
];

interface IStampSaveData {
  password: string;
  phone: string;
  selectPhone: string;
}
const html5QrCodeScannerFile = "/html5-qrcode.min.js"; // <-- this file is in /public.
export default function StampSaveByQr() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const [createStamp] = useCreateStamp();
  const { data, onRefetchUsers } = fetchCouponAddUsers();
  console.log(data);
  const [selectValue, setSelectValue] = useState<string | number>("");
  const { ModalComponent, setIsModalOpen, onClickIsModalOpen } = MessageModal();
  const { register, watch, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues: {
      phone: "",
      password: "",
      selectPhone: "",
    },
  });
  const searchValue = watch("phone");

  const onStampSave = () => {
    inputRef.current?.click();
  };

  const submitStampSave = (data: IStampSaveData) => {
    const { phone, ...value } = data;
    console.log(value);
    console.log(selectValue);
    try {
      const result = createStamp({
        variables: {
          createStampInput: {
            phone: value.selectPhone,
            cafeId: "fb8553fb-b45e-47cc-8815-872361cfad8e",
            count: selectValue,
            password: value.password,
          },
        },
      });
      setIsModalOpen(false);
      Modal.success({
        content: `스탬프가 ${selectValue}개 적립되었습니다!`,
        afterClose() {
          setSelectValue("");
          void router.push("/mypage/owner/stampsave");
        },
      });
      console.log(result);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  useEffect(() => {
    onRefetchUsers(searchValue);
  }, [searchValue]);

  const { Html5QrcodeScanner } = useHtml5QrCodeScanner(html5QrCodeScannerFile);
  const { devices, error } = useAvailableDevices(html5QrCodeScannerFile);
  const onScanSuccess = (decodedText, decodedResult) => {
    // Handle on success condition with the decoded text or result.
    console.log(`Scan result: ${decodedText}`, decodedResult);
    // ...
    Html5QrcodeScanner.clear();
    // ^ this will stop the scanner (video feed) and clear the scan area.
  };

  useEffect(() => {
    if (Html5QrcodeScanner) {
      // Creates anew instance of `HtmlQrcodeScanner` and renders the block.
      const html5QrcodeScanner = new Html5QrcodeScanner(
        "reader",
        { fps: 10, qrbox: { width: 250, height: 250 } },
        /* verbose= */ false
      );
      html5QrcodeScanner.render(onScanSuccess);
    }
  }, [Html5QrcodeScanner]);

  return (
    <>
      <ModalComponent
        title={`스탬프 적립`}
        text={`스탬프 적립을 위해서 \n 가맹주 비밀번호를 입력해주세요.`}
        status="write"
        buttons={
          <>
            <S.ModalButton color="lightBeige" onClick={onClickIsModalOpen}>
              <Text size="24" fontColor="gray">
                취소
              </Text>
            </S.ModalButton>
            <S.ModalButton type="submit" color="beige" onClick={onStampSave}>
              <Text size="24">확인</Text>
            </S.ModalButton>
          </>
        }
      >
        <S.ModalFromWrap onSubmit={handleSubmit(submitStampSave)}>
          <Input01
            type="text"
            textAlign="center"
            placeHolder="가맹주 비밀번호 입력"
            register={register("password")}
          />
          <input type="submit" hidden ref={inputRef} />
        </S.ModalFromWrap>
      </ModalComponent>

      <S.StampWrapper>
        <Box01 styles={{ padding: "40px 50px" }}>
          <S.StampContainer>
            <S.QrWrapper>
              <S.QrReader id="reader"></S.QrReader>
              <S.QrUserWrapper>
                <Input01
                  styles={{ width: "100%" }}
                  type="text"
                  placeHolder="핸드폰번호"
                  register={register("phone")}
                >
                  <S.InputIconWrap>
                    <SearchOutlined />
                  </S.InputIconWrap>
                </Input01>
                <S.StampSelect>
                  <Select01
                    defaultText="적립스탬프 갯수"
                    selectValue={SELECT_VALUES01}
                    setSelectValue={setSelectValue}
                  />
                </S.StampSelect>
                <S.QrSaveStamp>
                  <S.SaveButton color="beige" type="button">
                    <Text size="14">적립 </Text>
                  </S.SaveButton>
                </S.QrSaveStamp>
              </S.QrUserWrapper>
            </S.QrWrapper>
          </S.StampContainer>
        </Box01>
      </S.StampWrapper>
    </>
  );
}
