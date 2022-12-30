import HeroWrap from "../../../common/hero/HeroWrap.index";
import Text from "../../../common/text/01/Text01.index";
import * as S from "./StampCheck.styles"

export default function StampCheck () {
    const temp = [
        {name: "원두학살자",
         stamp: 5        
        },
        {name: "김덕배",
         stamp: 3        
        },
        {name: "커피그만",
         stamp: 3        
        },
        {name: "이자성",
         stamp: 5        
        },
        {name: "커피맛없어",
         stamp: 5        
        }
    ]
    return(
        <>
            <HeroWrap
                imageUrl="/images/owner/Owner01.jpeg"
                title="마이 모아"
                subject="마이페이지 마이페이지 마이페이지 마이페이지 마이페이지 마이페이지 마이페이지"
            ></HeroWrap>
            <S.StampCheckContainer>
                <S.Title>
                    <Text size="48" weight="500" fontColor="black">스탬프를 한번에 받은 회원님들을 모아봤어요!</Text>
                </S.Title>
                <S.NotificationContainer>
                    {temp.map((el,idx) => (
                        <S.NotificationWrapper key={idx}>
                            <div>
                                <Text size="36" weight="500">{el.name}</Text>
                                <Text size="36" weight="500">님에게 스탬프 </Text>
                                <Text size="36" weight="500">{el.stamp.toString()}</Text>
                                <Text size="36" weight="500">개를 적립하였습니다.</Text>
                            </div>
                            <S.ConfirmBtn color="brown">
                                <Text size="24" fontColor="white">
                                    확인
                                </Text>
                            </S.ConfirmBtn>
                        </S.NotificationWrapper>
                    ))}
                     
                </S.NotificationContainer>
            </S.StampCheckContainer>
        </>
    )   
}