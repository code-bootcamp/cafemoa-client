import Box01 from "../../../../commons/box/01/Box01.index";
import Text from "../../../../commons/text/01/Text01.index";
import { QRCode } from "react-qrcode-logo";
import * as S from "./Member.styles";
import { useState } from "react";
import MemberStamp from "./Member-stamp";
import MemberCoupon from "./Member-coupon";
import { DEFAULT_COLOR } from "../../../../../commons/default/default";

export default function Member() {
  const [userQrCode, setUserQrCode] = useState("01012341234");

  return (
    <>
      <Box01
        styles={{
          padding: "48px",
        }}
      >
        <S.BannerWrap>
          <S.BannerLeft>
            <QRCode
              size={400}
              logoImage="/images/main/img_qr.png"
              quietZone={20}
              fgColor={DEFAULT_COLOR.mainColor}
              eyeColor={{
                // top/left eye
                outer: `${DEFAULT_COLOR.subColor01 ?? ""}`,
                inner: `${DEFAULT_COLOR.mainColor ?? ""}`,
              }}
              eyeRadius={[
                [10, 10, 0, 10], // top/left eye
                [10, 10, 10, 0], // top/right eye
                [10, 0, 10, 10], // bottom/left
              ]}
              qrStyle="dots"
              logoWidth={230}
              logoOpacity={0.4}
              value={userQrCode}
            />
            ,
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
