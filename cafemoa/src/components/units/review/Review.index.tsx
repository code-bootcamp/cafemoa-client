import Card01 from "../../commons/card/01/Card01.index";
import HeroWrap from "../../commons/hero/HeroWrap.index";
import Tag from "../../commons/text/02/Text02.index";
import * as S from "./Review.styles";
import Users01 from "../../commons/user/01/Users01.index";
import Text from "../../commons/text/01/Text01.index";
import { v4 as uuidv4 } from "uuid";
import { SELECT_VALUES02, TAG_VALUES } from "../../../commons/default/default";
import { useEffect, useState } from "react";
import { useFetchCommentsAll } from "../../commons/hooks/queries/useFetchCommentsAll";
import Select01 from "../../commons/select/01/Select01.index";
import Link from "next/link";
import Masonry from "react-masonry-component";
import { GetDate } from "../../../commons/libraries/utill";
import InfiniteScrollWrap from "../../commons/infiniteScroll/01/InfiniteScroll.index";

export default function ReviewList() {
  const [selectTag, setSelectTag] = useState<string[]>([]);
  const [selectValue, setSelectValue] = useState<string | number>("");
  const { data, onRefetchComments, onSelectLocation, onHandleMore } =
    useFetchCommentsAll();
  // console.log(data?.fetchCommentsAll?.user?.profileImage);

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

  useEffect(() => {
    onSelectLocation(String(selectValue));
    onRefetchComments(selectTag);
  }, [selectValue, selectTag]);
  return (
    <>
      <HeroWrap
        imageUrl="/images/review/review_hero01.png"
        title="리뷰모아"
        subject="리뷰를 한눈에 보기 쉽게 모아!"
      ></HeroWrap>
      <S.ContainerWrapper>
        <S.FilterWrapper>
          <Select01
            defaultText="지역"
            selectValue={SELECT_VALUES02}
            setSelectValue={setSelectValue}
          ></Select01>
        </S.FilterWrapper>
        <S.Container>
          <S.TagWrapper style={{ marginBottom: "40px" }}>
            {TAG_VALUES.map((el) => (
              <button key={uuidv4()} onClick={onClickTag(el)}>
                <Tag size="md" isActive={selectTag.includes(el)}>
                  {el}
                </Tag>
              </button>
            ))}
          </S.TagWrapper>
          <S.ReviewListsWrap>
            <InfiniteScrollWrap onHandleMore={onHandleMore}>
              <Masonry>
                {data?.fetchCommentsAll ? (
                  data?.fetchCommentsAll.map((el) => (
                    <S.ReviewList key={el.id}>
                      <Link href={`/cafe/${String(el.cafeinfo.id)}`}>
                        <a>
                          <Card01
                            imageUrl={`https://storage.googleapis.com/${el.commentImage[0].image_url}`}
                          >
                            <div>
                              <S.UserWrapper>
                                <Users01
                                  image={el.user.profileImage}
                                  name={el.user.nickname}
                                  size="sm"
                                />
                              </S.UserWrapper>
                              <S.CafeName>
                                <Text size="24" weight="500">
                                  {el.cafeinfo.owner.brandName}
                                </Text>
                              </S.CafeName>
                              <S.ReviewContent>
                                <Text size="16" weight="300">
                                  {el.reply}
                                </Text>
                              </S.ReviewContent>
                              <S.ReviewTag>
                                {el.cafeinfo.cafeTag.map((el, idx) => (
                                  <Tag key={idx} size="sm">
                                    {el.tagName}
                                  </Tag>
                                ))}
                              </S.ReviewTag>
                              <S.ReviewDate>
                                <Text size="14" weight="300" fontColor="gray">
                                  {GetDate(el.time)}
                                </Text>
                              </S.ReviewDate>
                            </div>
                          </Card01>
                        </a>
                      </Link>
                    </S.ReviewList>
                  ))
                ) : (
                  <>데이터가 없습니다.</>
                )}
              </Masonry>
            </InfiniteScrollWrap>
          </S.ReviewListsWrap>
        </S.Container>
      </S.ContainerWrapper>
    </>
  );
}
