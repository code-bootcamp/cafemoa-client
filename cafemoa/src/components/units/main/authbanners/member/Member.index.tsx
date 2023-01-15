import Box01 from "../../../../commons/box/01/Box01.index";
import Text from "../../../../commons/text/01/Text01.index";
import { QRCode } from "react-qrcode-logo";
import * as S from "./Member.styles";
// import {} from "react";
import MemberStamp from "./Member-stamp";
import MemberCoupon from "./Member-coupon";
import { DEFAULT_COLOR } from "../../../../../commons/default/default";
import { useRecoilState } from "recoil";
import { infoUserState } from "../../../../../commons/stores";

export default function Member() {
  const [infoUser] = useRecoilState(infoUserState);
  const mainRegion = infoUser?.fetchUser?.address?.split(" ");
  return (
    <>
      <S.BannerWrap>
        <Box01
          styles={{
            padding: "48px",
          }}
        >
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
              value={infoUser.fetchUser?.phone}
            />
            ,
          </S.BannerLeft>
          <S.BannerRight>
            <div>
              <div style={{ marginBottom: "8px" }}>
                <Text size="32" weight="700">
                  안녕하세요 {infoUser.fetchUser?.nickname}님
                </Text>
              </div>
              <div>
                <Text size="20">
                  내가 활동하는 지역은 &nbsp;
                  {mainRegion !== undefined &&
                    `${mainRegion[0]} ${mainRegion[1]}`}
                  &nbsp; 입니다.
                </Text>
              </div>
            </div>
            <S.TapWrap
              defaultActiveKey="1"
              items={[
                {
                  label: "스탬프",
                  key: "1",
                  children: <MemberStamp infoUserId={infoUser.fetchUser?.id} />,
                },
                {
                  label: "쿠폰",
                  key: "2",
                  children: (
                    <MemberCoupon infoUserId={infoUser.fetchUser?.id} />
                  ),
                },
              ]}
            />
          </S.BannerRight>
        </Box01>
      </S.BannerWrap>
    </>
  );
}
