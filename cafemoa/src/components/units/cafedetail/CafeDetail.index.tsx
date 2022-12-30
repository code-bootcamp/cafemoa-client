import HeroWrap from "../../common/hero/HeroWrap.index";
import Like01 from "../../common/like/01/Like01.index";
import Text from "../../common/text/01/Text01.index";
import Tag from "../../common/text/02/Text02.index";
import { Image } from "antd";
import * as S from "./CafeDetail.styles"

export default function CafeDetail() {
    return(
        <>
            <HeroWrap
                imageUrl="/images/temp/temp_hero01.png"
                title="카페 모아"
                subject="카페를 한눈에 보기 쉽게 모아!"
            ></HeroWrap>
            <S.DetailContainer>
                <S.CafeImageWrapper>
                    <img src="/images/cafedetail/CafeDetail01.jpeg"/>
                </S.CafeImageWrapper>
                <S.CafeInfoWrapper>
                    <Text size="54" weight="700">스타벅스</Text>
                    <S.CafeInfoFooter>
                        <Text size="32" weight="300">구로구 구로동 222-2</Text>
                        <div style={{marginLeft: "104px"}}>
                            <Tag size="md">좀 많이 긴 태그</Tag>
                        </div>  
                        <div style={{marginLeft: "48px"}}>
                            <Tag size="md">좀 많이 긴 태그</Tag>
                        </div>  
                        <div style={{marginLeft: "48px"}}>
                            <Tag size="md">좀 많이 긴 태그</Tag>
                        </div>  
                        <div style={{marginLeft: "160px"}}>
                            <Like01 iconColor="red" fontColor="black" count={22} />
                        </div>
                    </S.CafeInfoFooter>
                </S.CafeInfoWrapper>
                <S.OwnerContents>
                    <Text size="24" weight="500">가맹점주 카페소개란</Text>
                    <br />
                    <br />
                    <div style={{marginTop: "32px"}}>
                        <Text size="24" weight="500">
                            가맹점주 카페소개란 가맹점주 카페소개란 가맹점주 카페소개란 가맹점주 카페소개란 
                            가맹점주 카페소개란 가맹점주 카페소개란 가맹점주 카페소개란 가맹점주 카페소개란 
                            가맹점주 카페소개란
                        </Text>
                    </div>
                </S.OwnerContents>
                <S.ColorLine></S.ColorLine>
                <S.MenuTitle>
                    <Text size="54" weight="500">메뉴모아</Text>
                </S.MenuTitle>
                <S.MenuImageWrapper>
                    <S.Menu>
                        <img 
                        src="/images/cafedetail/CafeDetail02.jpeg"
                        />
                    </S.Menu>
                    <S.Menu>
                        <img 
                        src="/images/cafedetail/CafeDetail02.jpeg"
                        />
                    </S.Menu>
                    <S.Menu>
                        <img 
                        src="/images/cafedetail/CafeDetail02.jpeg"
                        />
                    </S.Menu>
                </S.MenuImageWrapper>
                <S.ColorLine></S.ColorLine>
                <S.OwnerTitle>
                    <Text size="54" weight="500">정보모아</Text>
                </S.OwnerTitle>
                <S.SubTitleWrapper>
                    <div>
                        <img src="/images/cafedetail/CafeDetail03.png"/>
                    </div>
                    <div style={{margin: "24px 0px 0px 16px"}}>
                        <Text size="32" weight="500">
                            공지사항
                        </Text>
                    </div>
                </S.SubTitleWrapper>
                <div style={{marginTop: "32px"}}>
                    <Text size="24" weight="500">
                    2022년 10월 20일 이후 기본 원두 변경(콜롬비아 수프리모 {'>'} 이티오피아 예카체프)
                    </Text>
                </div>
                <S.SubTitleWrapper>
                    <div>
                        <img src="/images/cafedetail/CafeDetail03.png"/>
                    </div>
                    <div style={{margin: "20px 0px 0px 16px"}}>
                        <Text size="32" weight="500">
                            운영 및 휴무
                        </Text>
                    </div>
                </S.SubTitleWrapper>
                <S.TimeTableWrapper>
                    <div style={{marginTop: "32px"}}>
                        <Text size="24" weight="500">
                            Sunday 
                        </Text>
                        <br/>
                        <Text size="24" weight="500">
                            Monday 
                        </Text>
                        <br/>
                        <Text size="24" weight="500">
                            Tuesday
                        </Text>
                        <br/>
                        <Text size="24" weight="500">
                            Wednesday 
                        </Text>
                        <br/>
                        <Text size="24" weight="500">
                            Thursday 
                        </Text>
                        <br/>
                        <Text size="24" weight="500">
                            Friday 
                        </Text>
                        <br/>
                        <Text size="24" weight="500">
                            Saturday
                        </Text>
                    </div>
                    <div style={{margin: "32px 0px 0px 40px"}}>
                        <div>
                            <Text size="24" weight="500">
                                10:00 ~ 22:00
                            </Text>
                        </div>
                        <div>
                            <Text size="24" weight="500">
                                10:00 ~ 22:00 
                            </Text>
                        </div>
                        <div>
                            <Text size="24" weight="500">
                                10:00 ~ 22:00 
                            </Text>
                        </div>
                        <div>
                            <Text size="24" weight="500">
                                10:00 ~ 22:00 
                            </Text>
                        </div>
                        <div>
                            <Text size="24" weight="500">
                                10:00 ~ 22:00 
                            </Text>
                        </div>
                        <div>
                            <Text size="24" weight="500">
                                10:00 ~ 22:00 
                            </Text>
                        </div>
                        <div>
                            <Text size="24" weight="500">
                                10:00 ~ 22:00 
                            </Text>
                        </div>
                    </div>
                </S.TimeTableWrapper>
                    <div style={{marginTop: "32px"}}>
                        <Text size="42" weight="500" fontColor="green">
                                격주 월요일 정기 휴무
                        </Text>
                    </div>
                <S.SubTitleWrapper>
                    <div>
                        <img src="/images/cafedetail/CafeDetail03.png"/>
                    </div>
                    <div style={{margin: "20px 0px 0px 16px"}}>
                        <Text size="32" weight="500">
                            편의 시설
                        </Text>
                    </div>
                </S.SubTitleWrapper>
                <div style={{margin: "32px 0px 196px 0px"}}>
                    <Text size="24" weight="500">
                     주차가능 / 매장 내 화장실 / 노키즈존
                    </Text>
                </div>
                <S.ColorLine></S.ColorLine>
                <S.SelectBox>
                    <div isSelect={true}>
                        <Text size="24" weight="500" fontColor="brown">
                        사진모아
                        </Text>
                    </div>
                    <div isSelect={false} style={{marginLeft: "24px"}}>
                        <Text size="24" weight="500" fontColor="brown">
                        리뷰모아
                        </Text>
                    </div>
                </S.SelectBox>
                <S.SelectBoxUnderBar></S.SelectBoxUnderBar>
                <S.OwnerImageContainer>
                    <S.OwnerImageWrapper>
                        <img src="/images/cafedetail/CafeDetail01.jpeg"/>
                    </S.OwnerImageWrapper>
                    <S.OwnerImageWrapper>
                        <img src="/images/cafedetail/CafeDetail01.jpeg"/>
                    </S.OwnerImageWrapper>
                    <S.OwnerImageWrapper>
                        <img src="/images/cafedetail/CafeDetail01.jpeg"/>
                    </S.OwnerImageWrapper>
                    <S.OwnerImageWrapper>
                        <img src="/images/cafedetail/CafeDetail01.jpeg"/>
                    </S.OwnerImageWrapper>
                </S.OwnerImageContainer>
            </S.DetailContainer>
        </>
    )
}