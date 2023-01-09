import { SearchOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import {
  ContainerWrap,
  LargeBtn,
  MediumBtn,
  TagWrap,
} from "../../src/commons/styles/commonStyles";
import Box01 from "../../src/components/commons/box/01/Box01.index";
import Card01 from "../../src/components/commons/card/01/Card01.index";
import Card02 from "../../src/components/commons/card/02/Card02.index";
import Input01 from "../../src/components/commons/input/01/Input01.index";
import Input02 from "../../src/components/commons/input/02/Input02.index";
import Like01 from "../../src/components/commons/like/01/Like01.index";
import Select01 from "../../src/components/commons/select/01/Select01.index";
import Text from "../../src/components/commons/text/01/Text01.index";
import Tag from "../../src/components/commons/text/02/Text02.index";
import Users01 from "../../src/components/commons/user/01/Users01.index";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import MessageModal from "../../src/components/commons/modal/message/MessageModal.index";
import { useForm } from "react-hook-form";

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
const SELECT_VALUES02 = [
  { label: "서울시", value: "서울" },
  { label: "경기도", value: "경기" },
  { label: "강원도", value: "강원" },
  { label: "충청북도", value: "충북" },
  { label: "충청남도", value: "충남" },
  { label: "전라북도", value: "전북" },
  { label: "전라남도", value: "전남" },
  { label: "경상북도", value: "경북" },
  { label: "경상남도", value: "경남" },
  { label: "제주도", value: "제주도" },
];

// 태그 정리된 값
const TAG_VALUES = [
  "스터디",
  "힐링",
  "사진찍기좋은카페",
  "뷰 좋은 카페",
  "데이트하기 좋은",
  "애견동반카페",
  "키즈존/노키즈존 카페",
  "갬성",
  "커피가맛있는 카페",
  "로스팅 카페",
  "베이커리 카페",
  "디저트가 맛있는 카페",
  "테라스가있는 ",
  "창고형 카페",
  "가성비좋은 카페",
  "조명이 있는 카페",
  "모임 하기좋은",
  "브런치",
];

export default function UiTest() {
  const [selectTag, setSelectTag] = useState<string[]>([]);
  const { ModalComponent, onClickIsModalOpen } = MessageModal();
  const { register, handleSubmit } = useForm();

  const onModalSubmit = (data) => {
    console.log(data);
  };

  // 태그 클릭 버튼
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
  };

  return (
    <UitestWrap>
      <div>
        <Text size="54" weight="700">
          typography
        </Text>
        <br />
        <br />
        <br />
        <br />
        <div>
          <Text size="32" weight="300">
            fontWeight 300
          </Text>
        </div>
        <div>
          <Text size="16" weight="300" fontColor="gray">
            16px
          </Text>
          <Text size="18" weight="300" fontColor="brown">
            18px
          </Text>
          <Text size="20" weight="300" fontColor="green">
            20px
          </Text>
          <Text size="24" weight="300">
            24px
          </Text>
          <Text size="28" weight="300">
            28px
          </Text>
          <Text size="32" weight="300">
            32px
          </Text>
          <Text size="54" weight="300">
            54px
          </Text>
        </div>
        <div>
          <Text size="32" weight="500">
            fontWeight 500
          </Text>
        </div>
        <div>
          <Text size="16" weight="500">
            16px
          </Text>
          <Text size="18" weight="500">
            18px
          </Text>
          <Text size="20" weight="500">
            20px
          </Text>
          <Text size="24" weight="500">
            24px
          </Text>
          <Text size="28" weight="500">
            28px
          </Text>
          <Text size="32" weight="500">
            32px
          </Text>
          <Text size="54" weight="500">
            54px
          </Text>
        </div>
        <div>
          <Text size="32" weight="700">
            fontWeight 700
          </Text>
        </div>
        <div>
          <Text size="16" weight="700">
            16px
          </Text>
          <Text size="18" weight="700">
            18px
          </Text>
          <Text size="20" weight="700">
            20px
          </Text>
          <Text size="24" weight="700">
            24px
          </Text>
          <Text size="28" weight="700">
            28px
          </Text>
          <Text size="32" weight="700">
            32px
          </Text>
          <Text size="54" weight="700">
            54px
          </Text>
        </div>
      </div>
      <div>
        <Text size="54" weight="700">
          Tag
        </Text>
        <br />
        <br />
        <TagsWrap style={{ marginBottom: "40px" }}>
          <Tag size="sm">태그</Tag>
          <Tag size="sm">태그</Tag>
          <Tag size="sm">태그</Tag>
        </TagsWrap>
        <TagsWrap style={{ marginBottom: "40px" }}>
          <Tag size="md">태그</Tag>
          <Tag size="md">태그</Tag>
          <Tag size="md">태그</Tag>
        </TagsWrap>
        <TagsWrap style={{ marginBottom: "40px" }}>
          {TAG_VALUES.map((el) => (
            <button key={uuidv4()} onClick={onClickTag(el)}>
              <Tag size="lg" isActive={selectTag.includes(el)}>
                {el}
              </Tag>
            </button>
          ))}
        </TagsWrap>
      </div>
      <div>
        <Text size="54" weight="700">
          Box
        </Text>
        <div>
          <Box01 styles={{ padding: "20px 0px" }}>
            <div>sssasdasd</div>
          </Box01>
        </div>
        <div>
          <Box01 styles={{ padding: "50px 20px" }}>
            <div>sssasdasd</div>
          </Box01>
        </div>
        <div>
          <Box01>
            <div>sssasdasd</div>
          </Box01>
        </div>
        <UL>
          <LI>
            <Box01>
              <div>sssasdasd</div>
            </Box01>
          </LI>
          <LI>
            <Box01>
              <div>sssasdasd</div>
            </Box01>
          </LI>
          <LI>
            <Box01>
              <div>sssasdasd</div>
            </Box01>
          </LI>
        </UL>
        <br />
        <br />
        <div>
          <Text size="54" weight="700">
            Card
          </Text>
          <UL>
            <LI>
              <Card01 imageUrl="/images/temp/temp01.png">
                <div>sss</div>
              </Card01>
            </LI>
            <LI>
              <Card01 imageUrl="/images/temp/temp03.png">
                <div>sss</div>
              </Card01>
            </LI>
          </UL>
          <UL>
            <LI>
              <Card02 imageUrl="/images/temp/temp01.png">
                <div>sss</div>
              </Card02>
            </LI>
            <LI>
              <Card02 imageUrl="/images/temp/temp03.png">
                <div>sss</div>
              </Card02>
            </LI>
          </UL>
        </div>
        <br />
        <br />
        <div>
          <Text size="54" weight="700">
            Like
          </Text>
          <Like01 iconColor="black" fontColor="black" count={22} />
          <Like01 iconColor="red" count={22} />
          <br />
          <br />
          <Text size="54" weight="700">
            Input01
          </Text>
          <Input01 type="text" />
          <Input01 type="text" placeHolder="플레이스홀더" />
          <Input01 type="text" placeHolder="플레이스홀더" textAlign="center" />
          <Input01 type="text" placeHolder="구로">
            <InputIconWrap>
              <SearchOutlined />
            </InputIconWrap>
          </Input01>
          <br />
          <br />
          <Text size="54" weight="700">
            Input02
          </Text>
          <Input02 type="text" name="이메일" />
          <br />
          <br />
          <Text size="54" weight="700">
            User
          </Text>
          <Users01 name="원두학살자" size="sm" />
          <Users01 size="md" alignItem="top" />
          <br />
          <br />
          <Text size="54" weight="700">
            Select
          </Text>
          <Select01 selectValue={SELECT_VALUES01} />
          <Select01 defaultText="지역" selectValue={SELECT_VALUES02} />
          <br />
          <br />
          <Text size="54" weight="700">
            Button
          </Text>
          <br />
          <TestMediumBtn01 color="brown">
            <Text size="16" fontColor="white">
              테스트
            </Text>
          </TestMediumBtn01>
          <TestMediumBtn01 color="beige">
            <Text size="16">테스트</Text>
          </TestMediumBtn01>
          <TestMediumBtn01 color="lightBeige">
            <Text size="16">테스트</Text>
          </TestMediumBtn01>
          <TestMediumBtn01 color="brownLine">
            <Text size="16">테스트</Text>
          </TestMediumBtn01>
          <TestLargeBtn01>
            <Text size="16">테스트</Text>
          </TestLargeBtn01>
          <br />
          <br />
          <Text size="54" weight="700">
            Modal
          </Text>
          <br />
          <TestMediumBtn01 color="brown" onClick={onClickIsModalOpen}>
            <Text size="28" fontColor="white">
              테스트
            </Text>
          </TestMediumBtn01>
        </div>
      </div>
      <ModalComponent
        title={`비밀번호 입력`}
        text={`스탬프 적립을 위해서 \n 가맹주 비밀번호를 입력해주세요.`}
        status="write"
        buttons={
          <>
            <TestMediumBtn01 color="lightBeige">
              <Text size="24" fontColor="gray">
                취소
              </Text>
            </TestMediumBtn01>
            <TestMediumBtn01 color="beige" type="submit">
              <Text size="24">확인</Text>
            </TestMediumBtn01>
          </>
        }
      >
        <ModalFromWrap onSubmit={handleSubmit(onModalSubmit)}>
          <Input01
            type="text"
            textAlign="center"
            placeHolder="가맹주 비밀번호 입력"
            register={register("password")}
          />
        </ModalFromWrap>
      </ModalComponent>
      {/* <ModalComponent
        title={`비밀번호 입력`}
        text={`스탬프 적립을 위해서 \n 가맹주 비밀번호를 입력해주세요.`}
        status="success"
        buttons={
          <>
            <TestMediumBtn01 color="beige">
              <Text size="16">확인</Text>
            </TestMediumBtn01>
          </>
        }
      ></ModalComponent> */}
    </UitestWrap>
  );
}

const UL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0 -8px;
`;
const LI = styled.li`
  display: block;
  width: 50%;
  padding: 0 8px;
`;

const UitestWrap = styled(ContainerWrap)`
  padding-bottom: 300px;
`;

const TagsWrap = styled(TagWrap)`
  > button + button {
    margin-left: 16px;
  }
`;

const TestMediumBtn01 = styled(MediumBtn)``;
const TestLargeBtn01 = styled(LargeBtn)``;
const InputIconWrap = styled.div`
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  svg {
    font-size: 24px;
  }
`;

const ModalFromWrap = styled.form`
  padding-top: 32px;
`;
