import * as S from "./StampSave.styles";
import Text from "../../../../commons/text/01/Text01.index";
import Box01 from "../../../../commons/box/01/Box01.index";
import MessageModal from "../../../../commons/modal/message/MessageModal.index";
import { useForm } from "react-hook-form";
import { SearchOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import Select01 from "../../../../commons/select/01/Select01.index";
import { useEffect, useRef, useState } from "react";
import { useFetchCouponAddUsers } from "../../../../commons/hooks/queries/useFetchCouponAddUsers";
import { useCreateStamp } from "../../../../commons/hooks/mutations/useCreateStamp";
import Input01 from "../../../../commons/input/01/Input01.index";
import { useRouter } from "next/router";
import { useFetchMyCafes } from "../../../../commons/hooks/queries/useFetchMyCafes";
import { useFetchUser } from "../../../../commons/hooks/queries/useFetchUser";

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

export default function StampSaveByPhone() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const [createStamp] = useCreateStamp();
  const { data, onRefetchUsers } = useFetchCouponAddUsers();
  const { data: mycafedata } = useFetchMyCafes();
  const cafeId = String(mycafedata?.fetchMyCafes[0].id);

  const [selectValue, setSelectValue] = useState<string | number>("");
  const { ModalComponent, setIsModalOpen, onClickIsModalOpen } = MessageModal();
  const { register, setValue, watch, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues: {
      phone: "",
      password: "",
      selectPhone: "",
    },
  });
  const searchValue = watch("phone");

  const onClickStamp = (phone: string) => () => {
    if (selectValue === "") {
      Modal.warning({
        content: "적립할 스탬프 갯수를 선택하세요!",
      });
      return;
    }
    setValue("selectPhone", phone);
    setIsModalOpen(true);
  };

  const onStampSave = () => {
    inputRef.current?.click();
  };

  const submitStampSave = (data: IStampSaveData) => {
    const { phone, ...value } = data;
    console.log(value);
    console.log(selectValue);
    if (value.password === "") {
      Modal.warning({
        content: "가맹주 비밀번호를 입력해주세요!",
      });
      return;
    }

    try {
      void createStamp({
        variables: {
          createStampInput: {
            phone: value.selectPhone,
            cafeId,
            count: selectValue,
            password: value.password,
          },
        },
      });
      Modal.success({
        content: `스탬프가 ${selectValue}개 적립되었습니다!`,
        afterClose() {
          setValue("phone", "");
          setIsModalOpen(false);
          // onClickIsModalOpen();
          // void router.push(`/mypage/owner/${cafeId}/stampsave`);
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);

        // if (error.message.includes("비밀번호가 일치하지 않습니다")) {
        //   Modal.warning({
        //     content: "비밀번호가 일치하지 않습니다.",
        //   });
        //   // return;
        // }
      }
    }
  };

  useEffect(() => {
    onRefetchUsers(searchValue);
  }, [searchValue]);

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
            <S.UserWrapper>
              <Input01
                styles={{ width: "100%" }}
                type="text"
                placeHolder="핸드폰번호뒷자리"
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
            </S.UserWrapper>
            <S.StampTable>
              <ul>
                <S.Name>이름</S.Name>
                <S.Name>닉네임</S.Name>
                <S.PhoneEnd>전화번호 뒷자리</S.PhoneEnd>
                <S.SaveStamp></S.SaveStamp>
              </ul>
              {data?.fetchCouponAddUsers.map((el) => (
                <ul key={el.id}>
                  <S.Name>{el.name}</S.Name>
                  <S.Name>{el.nickname}</S.Name>
                  <S.PhoneEnd>{el.phone.slice(7)}</S.PhoneEnd>
                  <S.SaveStamp>
                    <S.SaveButton
                      color="beige"
                      type="button"
                      onClick={onClickStamp(el.phone)}
                    >
                      <Text size="14">적립 </Text>
                    </S.SaveButton>
                  </S.SaveStamp>
                </ul>
              ))}
            </S.StampTable>
          </S.StampContainer>
        </Box01>
      </S.StampWrapper>
    </>
  );
}
