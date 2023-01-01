import { useState } from "react";
import * as S from "./CafeSearchModal.styles";
import Text from "../../commons/text/01/Text01.index";
import Input01 from "../../commons/input/01/Input01.index";
import { SearchOutlined } from "@ant-design/icons";
import Select01 from "../../commons/select/01/Select01.index";
import { Collapse, Select } from "antd";
const { Panel } = Collapse;

interface ISearchModalProps {
  title: string;
  text: string;
  status: "write" | "success" | "warning";
  hasInput?: boolean;
}

const SELECT_VALUES02 = [
  { label: "서울특별시", value: "서울" },
  { label: "경기도", value: "경기" },
  { label: "강원도", value: "강원" },
  { label: "충청북도", value: "충북" },
  { label: "충청남도", value: "충남" },
  { label: "전라북도", value: "전북" },
  { label: "전라남도", value: "전남" },
  { label: "경상북도", value: "경북" },
  { label: "경상남도", value: "경남" },
  { label: "광주광역시", value: "광주" },
  { label: "대구광역시", value: "대구" },
  { label: "대전광역시", value: "대전" },
  { label: "부산광역시", value: "부산" },
  { label: "세종특별자치시", value: "세종" },
  { label: "울산광역시", value: "울산" },
  { label: "인천광역시", value: "인천" },
  { label: "제주도", value: "제주도" },
];

export default function CafeSearchModal() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const onClickIsModalOpen = () => {
    setIsModalOpen((prev) => !prev);
  };

  const ModalComponent = (props: ISearchModalProps) => {
    console.log(props.buttons);
    return (
      <>
        <S.ModalWrap
          open={isModalOpen}
          footer={null}
          centered={true}
          onCancel={() => {
            setIsModalOpen(false);
          }}
        >
          <S.ModalContentsWrap>
            <S.ModalTitle>
              <Text size="20">{props.title}</Text>
            </S.ModalTitle>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <S.AreaContainer>
                <S.AreaSelectWrap>
                  <Select01 defaultText="지역" selectValue={SELECT_VALUES02} />
                </S.AreaSelectWrap>
                <S.SubAreaSelectWrap>
                  <Select01
                    defaultText="시/군/구"
                    selectValue={SELECT_VALUES02}
                  />
                </S.SubAreaSelectWrap>
                {/* <S.AreaSelectWrap>
                  <S.AreaSelect defaultValue="지역" options={SELECT_VALUES02} />
                </S.AreaSelectWrap>
                <S.SubAreaSelectWrap>
                  <S.AreaSelect
                    defaultValue="시/군/구"
                    options={SELECT_VALUES02}
                  />
                </S.SubAreaSelectWrap> */}
              </S.AreaContainer>
              <div style={{ width: "100%" }}>
                <Input01 type="text" placeHolder="구로">
                  <S.InputIconWrap>
                    <SearchOutlined />
                  </S.InputIconWrap>
                </Input01>
              </div>
            </div>
            <S.ModalContents>
              <S.ContentWrapper>
                <S.SearchCafeInfo>
                  <Text size="24" weight="500">
                    카페모아 구로디지털점
                  </Text>
                  <Text size="18" weight="300" fontColor="gray">
                    0.2km
                  </Text>
                </S.SearchCafeInfo>
                <div>
                  <Text size="18" weight="500" fontColor="gray">
                    서울특별시 구로구 디지털로34길 43 코오롱싸이언스밸리1차 1층
                  </Text>
                </div>
                <div>
                  <Text size="16" weight="300" fontColor="gray">
                    02-111-2222
                  </Text>
                </div>
                <Collapse ghost>
                  <Panel
                    header="매장 상세 정보"
                    key="1"
                    style={{ fontSize: "16px" }}
                  >
                    <S.SearchCafeWrap>
                      <S.CafePictureWrap>
                        <img src="/images/cafesearch/cafesearch.png" />
                      </S.CafePictureWrap>
                      <div>
                        <S.CafeOperationWrap>
                          <div>
                            <Text size="18" weight="500" fontColor="deepBrown">
                              영업시간
                            </Text>
                          </div>
                          <S.CafeOperation>
                            <p>
                              <Text size="16">평일 : </Text>
                              <Text size="16" weight="300">
                                07:30 - 22:00
                              </Text>
                            </p>
                            <p>
                              <Text size="16">토요일 : </Text>
                              <Text size="16" weight="300">
                                12:00 - 22:00
                              </Text>
                            </p>
                            <p>
                              <Text size="16">일요일 : </Text>
                              <Text size="16" weight="300">
                                12:00 - 22:00
                              </Text>
                            </p>
                            <p>
                              <Text size="16">공휴일 : </Text>
                              <Text size="16" weight="300">
                                12:00 - 22:00
                              </Text>
                            </p>
                          </S.CafeOperation>
                        </S.CafeOperationWrap>
                        <div>
                          <div>
                            <Text size="18" weight="500" fontColor="deepBrown">
                              매장정보
                            </Text>
                          </div>
                          <S.CafeInfo>
                            <p>
                              <Text size="16" weight="300">
                                노키즈존
                              </Text>
                            </p>
                            <p>
                              <Text size="16" weight="300">
                                주차가능
                              </Text>
                            </p>
                            <p>
                              <Text size="16" weight="300">
                                애견동반가능
                              </Text>
                            </p>
                          </S.CafeInfo>
                        </div>
                      </div>
                    </S.SearchCafeWrap>
                  </Panel>
                </Collapse>
              </S.ContentWrapper>

              <S.ContentWrapper>
                <S.SearchCafeInfo>
                  <Text size="24" weight="500">
                    카페모아 구로디지털점
                  </Text>
                  <Text size="18" weight="300" fontColor="gray">
                    0.2km
                  </Text>
                </S.SearchCafeInfo>
                <div>
                  <Text size="18" weight="500" fontColor="gray">
                    서울특별시 구로구 디지털로34길 43 코오롱싸이언스밸리1차 1층
                  </Text>
                </div>
                <div>
                  <Text size="16" weight="300" fontColor="gray">
                    02-111-2222
                  </Text>
                </div>
                <Collapse ghost>
                  <Panel
                    header="매장 상세 정보"
                    key="1"
                    style={{ fontSize: "16px" }}
                  >
                    <S.SearchCafeWrap>
                      <S.CafePictureWrap>
                        <img src="/images/cafesearch/cafesearch.png" />
                      </S.CafePictureWrap>
                      <div>
                        <S.CafeOperationWrap>
                          <div>
                            <Text size="18" weight="500" fontColor="deepBrown">
                              영업시간
                            </Text>
                          </div>
                          <S.CafeOperation>
                            <p>
                              <Text size="16">평일 : </Text>
                              <Text size="16" weight="300">
                                07:30 - 22:00
                              </Text>
                            </p>
                            <p>
                              <Text size="16">토요일 : </Text>
                              <Text size="16" weight="300">
                                12:00 - 22:00
                              </Text>
                            </p>
                            <p>
                              <Text size="16">일요일 : </Text>
                              <Text size="16" weight="300">
                                12:00 - 22:00
                              </Text>
                            </p>
                            <p>
                              <Text size="16">공휴일 : </Text>
                              <Text size="16" weight="300">
                                12:00 - 22:00
                              </Text>
                            </p>
                          </S.CafeOperation>
                        </S.CafeOperationWrap>
                        <div>
                          <div>
                            <Text size="18" weight="500" fontColor="deepBrown">
                              매장정보
                            </Text>
                          </div>
                          <S.CafeInfo>
                            <p>
                              <Text size="16" weight="300">
                                노키즈존
                              </Text>
                            </p>
                            <p>
                              <Text size="16" weight="300">
                                주차가능
                              </Text>
                            </p>
                            <p>
                              <Text size="16" weight="300">
                                애견동반가능
                              </Text>
                            </p>
                          </S.CafeInfo>
                        </div>
                      </div>
                    </S.SearchCafeWrap>
                  </Panel>
                </Collapse>
              </S.ContentWrapper>
            </S.ModalContents>
          </S.ModalContentsWrap>
        </S.ModalWrap>
      </>
    );
  };
  return { ModalComponent, onClickIsModalOpen, setIsModalOpen };
}
