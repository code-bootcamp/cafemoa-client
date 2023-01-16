import * as S from "./StampSave.styles";
import Text from "../../../../commons/text/01/Text01.index";
import { useForm } from "react-hook-form";
import { Modal } from "antd";
import { useRef, useState } from "react";
import Input01 from "../../../../commons/input/01/Input01.index";
import { useRouter } from "next/router";
import Select01 from "../../../../commons/select/01/Select01.index";
import { useCreateStamp } from "../../../../commons/hooks/mutations/useCreateStamp";
import { useFetchMyCafes } from "../../../../commons/hooks/queries/useFetchMyCafes";

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
}

interface IStampSaveProps {
  searchValue: string;
  setIsModalOpen: (bool: boolean) => void;
}

export default function StampSaveQrModal(props: IStampSaveProps) {
  const [, setIsModalOpen] = useState<boolean>(true);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [createStamp] = useCreateStamp();

  const { data: mycafedata } = useFetchMyCafes();
  const cafeId = String(mycafedata?.fetchMyCafes[0].id);
  const [selectValue, setSelectValue] = useState<string | number>("");
  const { register, handleSubmit, setValue } = useForm({
    mode: "onChange",
    defaultValues: {
      password: "",
    },
  });

  const submitStampSave = async (data: IStampSaveData) => {
    if (selectValue === "") {
      Modal.warning({
        content: "적립할 스탬프 갯수를 선택하세요!",
      });
      return;
    }

    if (data.password === "") {
      Modal.warning({
        content: "가맹주 비밀번호를 입력해주세요!",
      });
      return;
    }

    try {
      const result = await createStamp({
        variables: {
          createStampInput: {
            phone: props.searchValue,
            cafeId,
            count: selectValue,
            password: data.password,
          },
        },
      });
      setIsModalOpen(false);

      Modal.success({
        content: `스탬프가 ${selectValue}개 적립되었습니다!`,
        afterClose() {
          setSelectValue("");
          setValue("password", "");
          props.setIsModalOpen(false);
          void router.push(`/mypage/owner/${cafeId}/stampsave`);
        },
      });

      console.log(result);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        if (error.message.includes("비밀번호가 일치하지 않습니다")) {
          Modal.warning({
            content: "비밀번호가 일치하지 않습니다.",
          });
          // return;
        }
      }
    }
  };

  return (
    <>
      <S.ModalContentsWrap>
        <S.ModalTitle>
          <S.QrModalTitle>
            <Text size="32">스탬프 적립</Text>
          </S.QrModalTitle>
          <S.QrModalContents>
            <Text size="20">
              스탬프 적립을 위해서 <br />
              가맹주 비밀번호를 입력해주세요.
            </Text>
          </S.QrModalContents>
        </S.ModalTitle>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
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
            <S.ButtonWrapper>
              <S.ModalButton type="submit" color="beige">
                <Text size="24">확인</Text>
              </S.ModalButton>
            </S.ButtonWrapper>
          </S.ModalFromWrap>
        </div>
      </S.ModalContentsWrap>
    </>
  );
}
