import * as S from "./StampSave.styles";
import Text from "../../../../commons/text/01/Text01.index";
import Box01 from "../../../../commons/box/01/Box01.index";
import MessageModal from "../../../../commons/modal/message/MessageModal.index";
import { useForm } from "react-hook-form";
import { Modal } from "antd";
import { useEffect, useRef, useState } from "react";
import Input01 from "../../../../commons/input/01/Input01.index";
import { useRouter } from "next/router";
import { useHtml5QrCodeScanner } from "react-html5-qrcode-reader";
import { SearchOutlined } from "@ant-design/icons";
import Select01 from "../../../../commons/select/01/Select01.index";
import { useFetchCouponAddUsers } from "../../../../commons/hooks/queries/useFetchCouponAddUsers";
import { useCreateStamp } from "../../../../commons/hooks/mutations/useCreateStamp";
import { useFetchMyCafes } from "../../../../commons/hooks/queries/useFetchMyCafes";
import styled from "@emotion/styled";

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

export default function StampSaveQrModal() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  let searchValue = "";
  const [createStamp] = useCreateStamp();
  // const { data } = useFetchCouponAddUsers();
  // console.log(data);

  const { mycafedata } = useFetchMyCafes();
  const cafeId = mycafedata?.fetchMyCafes[0].id;
  console.log(cafeId);
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
  searchValue = watch("phone");

  const onStampSave = () => {
    inputRef.current?.click();
  };

  const submitStampSave = (data: IStampSaveData) => {
    const { phone, ...value } = data;
    console.log(value);
    console.log(selectValue);
    console.log("핸드폰번호 : " + searchValue);

    if (selectValue === "") {
      Modal.warning({
        content: "적립할 스탬프 갯수를 선택하세요!",
      });
      return;
    }

    try {
      const result = createStamp({
        variables: {
          createStampInput: {
            phone: searchValue,
            cafeId,
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
          void router.push(`/mypage/owner/${cafeId}/stampsave`);
        },
      });
      console.log(result);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  // useEffect(() => {
  //   onRefetchUsers(searchValue);
  // }, [searchValue]);

  return (
    <>
      <ModalContentsWrap>
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
              <S.ModalButton color="beige" onClick={onStampSave}>
                <Text size="24">확인</Text>
              </S.ModalButton>
            </>
          }
        >
          <S.ModalFromWrap onSubmit={handleSubmit(submitStampSave)}>
            <S.QrStampSelect>
              <Select01
                defaultText="적립스탬프 갯수"
                selectValue={SELECT_VALUES01}
                setSelectValue={setSelectValue}
              />
            </S.QrStampSelect>
            <Input01
              type="text"
              textAlign="center"
              placeHolder="가맹주 비밀번호 입력"
              register={register("password")}
            />
            <input type="submit" hidden ref={inputRef} />
          </S.ModalFromWrap>
        </ModalComponent>
      </ModalContentsWrap>
    </>
  );
}

const ModalContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
