import { Fragment, useEffect, useState } from "react";
import * as S from "./CafeSearchModal.styles";
import Text from "../../commons/text/01/Text01.index";
import Input01 from "../../commons/input/01/Input01.index";
import { SearchOutlined } from "@ant-design/icons";
import Select01 from "../../commons/select/01/Select01.index";
import { Collapse } from "antd";
import { useForm } from "react-hook-form";
import { useFetchCafesWithOption } from "../../commons/hooks/queries/useFetchCafesWithOption";
import { SELECT_VALUES02 } from "../../../commons/default/default";
import { regText } from "../../../commons/libraries/utill";
const { Panel } = Collapse;

export default function CafeSearchModal() {
  // const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [selectValue, setSelectValue] = useState<string | number>("");
  console.log(selectValue);
  const { data, onRefetchCafe, onSelectLocation } = useFetchCafesWithOption();
  console.log(data);
  const { register, watch } = useForm({
    mode: "onChange",
    defaultValues: {
      cafeSearch: "",
    },
  });
  const searchValue = watch("cafeSearch");

  useEffect(() => {
    onSelectLocation(String(selectValue));
    onRefetchCafe(searchValue);
  }, [searchValue, selectValue]);

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
              placeHolder="스타벅스"
              register={register("cafeSearch")}
            >
              <S.InputIconWrap>
                <SearchOutlined />
              </S.InputIconWrap>
            </Input01>
          </S.CafeSearchWrap>
        </div>
        <S.ModalContents>
          {data?.fetchCafesWithNameAndLocation.map((el) => (
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
                  {regText(el.cafeinfo)}
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
                        <S.CafeOperation>
                          {regText(el.operatingInfo)}
                        </S.CafeOperation>
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
