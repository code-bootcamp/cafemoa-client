import styled from "@emotion/styled";
import { BtnWrap, MediumBtn } from "../../../../../commons/styles/commonStyles";
import * as mq from "../../../../../commons/styles/mediaQuery";

export const BannerWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  > div {
    width: 50%;
    ${mq.MobileM} {
      width: 100%;
    }
  }
  ${mq.MobileM} {
    flex-direction: column;
  }
`;
export const BannerLeft = styled.div`
  ${mq.MobileM} {
    text-align: center;
  }
`;
export const BannerRight = styled.div``;
export const BannerBtnWrap = styled(BtnWrap)`
  margin-top: 0;
  > a {
    width: calc(50% - 24px);
    margin: 0 12px;
    max-width: 320px;
    text-align: center;
  }
  ${mq.MobileL} {
    margin-top: 0;
  }
  ${mq.MobileM} {
    margin-top: 32px;
  }
`;
export const SignUpBtn = styled(MediumBtn.withComponent("a"))``;
export const SignInBtn = styled(MediumBtn.withComponent("a"))``;
