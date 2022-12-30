import * as S from "./PartnerStamp.styles";
import HeroWrap from "../../../../commons/hero/HeroWrap.index";
import Text from "../../../../commons/text/01/Text01.index";
import Box01 from "../../../../commons/box/01/Box01.index";
import Select01 from "../../../../commons/select/01/Select01.index";
import Input01 from "../../../../commons/input/01/Input01.index";

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
  return (
    <>
      <HeroWrap
        imageUrl="/images/review/review_hero01.png"
        title="마이모아"
        subject="마이페이지 마이페이지 마이페이지"
      ></HeroWrap>
      <S.ContainerWrapper>
        <S.Container>
          <S.TitleWrapper>
            <Text size="36" weight="500">
              스탬프를 적립해보세요!
            </Text>
          </S.TitleWrapper>
          <S.StampWrapper>
            <Box01 styles={{ padding: "50px 20px", width: "50%" }}>
              <>
                <S.Label>
                  <Text size="24" weight="500" fontColor="deepBrown">
                    핸드폰 번호 입력
                  </Text>
                </S.Label>
                <S.PhoneWrapper>
                  <div>
                    <Input01 type="text" />
                  </div>
                  <span>-</span>
                  <div>
                    <Input01 type="text" />
                  </div>
                  <span>-</span>
                  <div>
                    <Input01 type="text" />
                  </div>
                </S.PhoneWrapper>
                <S.Label>
                  <Text size="24" weight="500" fontColor="deepBrown">
                    적립 스탬프 갯수
                  </Text>
                </S.Label>
                <div style={{ width: "30%" }}>
                  <Select01 selectValue={SELECT_VALUES01} />
                </div>
                <S.ButtonWrapper>
                  <S.StampButton color="beige">
                    <Text size="20" fontColor="deepBrown">
                      번호로 적립하기
                    </Text>
                  </S.StampButton>
                </S.ButtonWrapper>
              </>
            </Box01>
          </S.StampWrapper>
        </S.Container>
      </S.ContainerWrapper>
    </>
  );
}
