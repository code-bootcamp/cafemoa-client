import styled from "@emotion/styled";
import {
  ContainerWrap,
  EllipsisOne,
  EllipsisTwo,
  SmallBtn,
} from "../../../../../commons/styles/commonStyles";
import * as mq from "../../../../../commons/styles/mediaQuery";

export const ContainerWrapper = styled(ContainerWrap)`
  padding-top: 100px;
  display: flex;
  flex-direction: row;
  ${mq.MobileM} {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 350px);
  ${mq.DesktopS} {
    width: calc(100% - 252px);
  }
  ${mq.MobileM} {
    padding-top: 24px;
    width: 100%;
  }
`;

export const TitleWrapper = styled.div`
  padding-bottom: 56px;
`;

export const AreaWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding-bottom: 40px;
`;

export const MainArea = styled.div`
  min-width: 150px;
  margin-right: 2%;
`;

export const SubArea = styled.div`
  min-width: 150px;
  margin-right: 2%;
`;

export const Search = styled(SmallBtn)``;

export const MypickContainer = styled.div`
  > div {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0 -15px;
  }
`;

export const PickWrapper = styled.div`
  display: block;
  width: 50%;
  padding: 0 15px 30px;
  ${mq.DesktopM} {
    width: 100%;
  }
`;

export const MypickInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const MypickCafeImg = styled.div`
  width: 120px;
  height: 120px;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  ${mq.MobileS} {
    width: 80px;
    height: 80px;
  }
`;

export const MypickCafe = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  width: calc(100% - 120px);
`;

export const MypickCafeInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const MypickCafeAdd = styled(EllipsisTwo)`
  margin-top: 10px;
`;

export const MypickCafeTag = styled(EllipsisOne)`
  padding-top: 10px;
`;
