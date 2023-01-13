import { Fragment, useEffect, useState } from "react";
import * as S from "./CafeSearchModal.styles";
import Text from "../../commons/text/01/Text01.index";
import Input01 from "../../commons/input/01/Input01.index";
import { SearchOutlined } from "@ant-design/icons";
import Select01 from "../../commons/select/01/Select01.index";
import { Collapse } from "antd";
import { useFetchCafeInform } from "../../commons/hooks/queries/useFetchCafeInform";
import { useForm } from "react-hook-form";
import { useFetchCafeByBrandName } from "../../commons/hooks/queries/useFetchCafeByBrandName";
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
  // const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [selectValue, setSelectValue] = useState<string | number>("");
  console.log(selectValue);
  const { data, onRefetchCafe } = useFetchCafeByBrandName();
  console.log(data);
  const { register, watch } = useForm({
    mode: "onChange",
    defaultValues: {
      cafeSearch: "",
    },
  });
  const searchValue = watch("cafeSearch");

  useEffect(() => {
    onRefetchCafe(searchValue);
  }, [searchValue]);

  return (
    <>
      <S.ModalContentsWrap>
        <S.ModalTitle>
          <Text size="24">매장을 검색해보세요!</Text>
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
              <Select01
                defaultText="지역"
                selectValue={SELECT_VALUES02}
                setSelectValue={setSelectValue}
              />
            </S.AreaSelectWrap>
          </S.AreaContainer>
          <S.CafeSearchWrap>
            <Input01
              type="text"
              placeHolder="구로"
              register={register("cafeSearch")}
            >
              <S.InputIconWrap>
                <SearchOutlined />
              </S.InputIconWrap>
            </Input01>
          </S.CafeSearchWrap>
        </div>
        <S.ModalContents>
          {data?.fetchCafeInformsByBrandName.map((el) => (
            <S.ContentWrapper key={el.id}>
              <S.SearchCafeInfo>
                <Text size="20" weight="500" fontColor="mainColor">
                  {el.owner.brandName}
                </Text>
                {/* <Text size="14" weight="300" fontColor="gray">
                  0.2km
                </Text> */}
              </S.SearchCafeInfo>
              <div>
                <Text size="16" weight="500" fontColor="gray">
                  {el.cafeAddr} {el.detailAddr}
                </Text>
              </div>
              <div>
                <Text size="14" weight="300" fontColor="gray">
                  {el.cafeinfo}
                </Text>
              </div>
              <Collapse ghost>
                <Panel
                  header="매장 상세 정보"
                  key="1"
                  style={{ fontSize: "16px" }}
                >
                  <S.SearchCafeWrap>
                    {/* <S.CafePictureWrap>
                      <img src="/images/cafesearch/cafesearch.png" />
                    </S.CafePictureWrap> */}
                    <div>
                      <S.CafeOperationWrap>
                        <div>
                          <Text size="18" weight="500" fontColor="mainColor">
                            영업시간
                          </Text>
                        </div>
                        <S.CafeOperation>{el.operatingInfo}</S.CafeOperation>
                      </S.CafeOperationWrap>
                      <div>
                        <div>
                          <Text size="18" weight="500" fontColor="mainColor">
                            매장정보
                          </Text>
                        </div>
                        <S.CafeInfo>
                          {el.cafeTag.map((el) => (
                            <p key={el.id}>
                              <Text size="16" weight="300">
                                #{el.tagName}
                              </Text>
                            </p>
                          ))}
                        </S.CafeInfo>
                      </div>
                    </div>
                  </S.SearchCafeWrap>
                </Panel>
              </Collapse>
            </S.ContentWrapper>
          ))}
        </S.ModalContents>
      </S.ModalContentsWrap>
    </>
  );
}
