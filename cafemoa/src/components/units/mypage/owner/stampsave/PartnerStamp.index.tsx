import * as S from "./PartnerStamp.styles";
import HeroWrap from "../../../../commons/hero/HeroWrap.index";
import Text from "../../../../commons/text/01/Text01.index";
import Box01 from "../../../../commons/box/01/Box01.index";
import Input01 from "../../../../commons/input/01/Input01.index";
import MessageModal from "../../../../commons/modal/message/MessageModal.index";
import { useForm } from "react-hook-form";
import { SearchOutlined } from "@ant-design/icons";
import { Pagination } from "antd";
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

export default function PartnerStamp() {
  const { ModalComponent, onClickIsModalOpen } = MessageModal();

  const { register, handleSubmit } = useForm();
  const onModalSubmit = (data) => {
    console.log(data);
  };

  const onStampSave = () => {};

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
            <S.ModalButton color="beige">
              <Text size="24">확인</Text>
            </S.ModalButton>
          </>
        }
      >
        <S.ModalFromWrap onSubmit={handleSubmit(onModalSubmit)}>
          <Input01
            type="text"
            textAlign="center"
            placeHolder="가맹주 비밀번호 입력"
            register={register("password")}
          />
        </S.ModalFromWrap>
      </ModalComponent>

      <HeroWrap
        imageUrl="/images/review/review_hero01.png"
        title="마이모아"
        subject="마이페이지 마이페이지 마이페이지"
      ></HeroWrap>
      <S.ContainerWrapper>
        <S.Container>
          <S.TitleWrapper>
            <Text size="32" weight="500">
              스탬프를 적립해보세요!
            </Text>
          </S.TitleWrapper>
          <S.StampWrapper>
            <Box01 styles={{ padding: "40px 50px" }}>
              <S.StampContainer>
                <S.UserWrapper>
                  <Input01 type="text" placeHolder="이름">
                    <S.InputIconWrap>
                      <SearchOutlined />
                    </S.InputIconWrap>
                  </Input01>
                  <S.StampSelect>
                    <Select01
                      defaultText="적립스탬프 갯수"
                      selectValue={SELECT_VALUES01}
                    />
                  </S.StampSelect>
                </S.UserWrapper>
                <S.StampTable>
                  <ul>
                    <S.Name>이름</S.Name>
                    <S.PhoneEnd>전화번호 뒷자리</S.PhoneEnd>
                    <S.SaveStamp></S.SaveStamp>
                  </ul>
                  <ul>
                    <S.Name>김예은</S.Name>
                    <S.PhoneEnd>1234</S.PhoneEnd>
                    <S.SaveStamp>
                      <S.SaveButton color="beige" onClick={onClickIsModalOpen}>
                        <Text size="14">적립 </Text>
                      </S.SaveButton>
                    </S.SaveStamp>
                  </ul>
                  <ul>
                    <S.Name>김예은</S.Name>
                    <S.PhoneEnd>5678</S.PhoneEnd>
                    <S.SaveStamp>
                      <S.SaveButton color="beige">
                        <Text size="14">적립 </Text>
                      </S.SaveButton>
                    </S.SaveStamp>
                  </ul>
                  <ul>
                    <S.Name>김예은</S.Name>
                    <S.PhoneEnd>0956</S.PhoneEnd>
                    <S.SaveStamp>
                      <S.SaveButton color="beige">
                        <Text size="14">적립 </Text>
                      </S.SaveButton>
                    </S.SaveStamp>
                  </ul>
                </S.StampTable>
                <S.PageWrapper>
                  <Pagination defaultCurrent={1} total={50} />
                </S.PageWrapper>
                {/* <S.Label>
                  <Text size="20" weight="500" fontColor="deepBrown">
                    적립 스탬프 갯수
                  </Text>
                </S.Label>
                <S.SelectWrap>
                  <Select01 selectValue={SELECT_VALUES01} />
                </S.SelectWrap> */}
              </S.StampContainer>
            </Box01>
          </S.StampWrapper>
        </S.Container>
      </S.ContainerWrapper>
    </>
  );
}
