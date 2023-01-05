import Box01 from "../../../../commons/box/01/Box01.index";
import Text from "../../../../commons/text/01/Text01.index";
import { QRCodeSVG } from "qrcode.react";
import * as S from "./Member.styles";
import { useState } from "react";
import MemberStamp from "./Member-stamp";
import MemberCoupon from "./Member-coupon";

export default function Member() {
  const [userQrCode, setUserQrCode] = useState("https://naver.com");

  return (
    <>
      <Box01
        styles={{
          padding: "48px",
        }}
      >
        <S.BannerWrap>
          <S.BannerLeft>
            <QRCodeSVG level="M" size={400} value={userQrCode} />,
          </S.BannerLeft>
          <S.BannerRight>
            <div>
              <div style={{ marginBottom: "8px" }}>
                <Text size="32" weight="700">
                  안녕하세요 닉네임님
                </Text>
              </div>
              <div>
                <Text size="20">내가 활동하는 지역은 ㅁㅁㅁ 입니다.</Text>
              </div>
            </div>
            <S.TapWrap
              defaultActiveKey="1"
              items={[
                {
                  label: "스탬프",
                  key: "1",
                  children: <MemberStamp />,
                },
                {
                  label: "쿠폰",
                  key: "2",
                  children: <MemberCoupon />,
                },
              ]}
            />
          </S.BannerRight>
        </S.BannerWrap>
      </Box01>
    </>
  );
}
