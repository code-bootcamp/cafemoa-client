import styled from "@emotion/styled";
import { Tabs } from "antd";
import { DEFAULT_COLOR } from "../../../../commons/default/default";
import {
  BtnWrap,
  ContainerWrap,
  MediumBtn,
  SmallBtn,
} from "../../../../commons/styles/commonStyles";

export const DetailContainer = styled(ContainerWrap)`
  padding-top: 100px;
`;
export const CafeImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  > img {
    position: absolute;
    left: 50%;
    top: 0;
    width: 100%;
    transform: translateX(-50%);
  }
`;
export const CafeInfoWrapper = styled.div`
  width: 100%;
  padding-top: 56px;
`;
export const CafeNameWrapper = styled.div`
  width: 100%;
`;
export const CafeInfoFooter = styled.div`
  width: 100%;
  margin-top: 16px;
  display: flex;
  flex-direction: row;
`;
export const CafeAddressContainer = styled.div`
  width: 50%;
`;
export const TagContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-top: 16px;
`;

export const LikeContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Section = styled.div`
  padding-bottom: 40px;
  border-bottom: 2px solid #bb8044;
`;

export const SectionTitle = styled.div`
  margin-top: 40px;
`;

export const OwnerContents = styled.div`
  width: 100%;
  margin-top: 16px;
`;
export const Contents = styled.div`
  width: 100%;
  margin-top: 16px;
`;
export const MenuTitle = styled.div``;
export const MenuImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 40px -20px 0;
`;
export const Menu = styled.div`
  width: 33.333%;
  padding: 0 20px;
`;
export const OwnerTitle = styled.div``;
export const TempDiv = styled.div`
  border-radius: 20px;
  background-color: ${DEFAULT_COLOR.subColor01};
  padding: 17px 22px;
  margin: 24px 0px 0px 16px;
`;
export const SubTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  // border-bottom: 5px solid #f3e6d8;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 16px;
`;
export const TimeTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
// ------------------------사진모아 부분 -------------------

export const OwnerImageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
`;
export const OwnerImageWrapper = styled.div`
  width: 24%;
  display: inline-block;
  padding-top: 20px;
`;
// ------------------------리뷰모아 부분-------------------

export const ReviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
`;
export const ReviewWrapper = styled.div`
  width: 50%;
  padding-right: 32px;
  margin-bottom: 64px;
  // margin-right: 4px;
`;
export const ReviewHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const BtnWrapper = styled.div`
  width: 20%;
  display: flex;
  padding-bottom: 50px;
`;
export const EditBtn = styled.span`
  width: 100%;
  font-size: 24px;
  text-align: right;
  :hover {
    cursor: pointer;
  }
`;
export const DeleteBtn = styled.span`
  width: 100%;
  font-size: 24px;
  text-align: right;
  :hover {
    cursor: pointer;
  }
`;
export const ReviewContents = styled.div`
  width: 100%;
  display: flex;
  padding-left: 2px;
`;
export const LikeWrapper = styled.div`
  padding-left: 24px;
  padding-top: 4px;
`;
export const ReplyBtn = styled.div`
  padding-top: 8px;
  text-align: right;
`;
export const ReviewColorLine = styled.div`
  width: 79%;
  border-bottom: 10px solid #f3e6d8;
  margin: 32px 0px 16px 96px;
`;
export const ReviewImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 64px;
  border-bottom: 4px solid ${DEFAULT_COLOR.subColor04};
`;
export const ReviewImageWrapper = styled.div`
  width: 33.3333%;
  padding: 10px;
  padding-bottom: 32px;
`;
export const ComponentsTabs = styled(Tabs)`
  margin-top: 40px;
  .ant-tabs-nav::before {
    display: none;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: ${DEFAULT_COLOR.mainColor};
    transform: scale(1);
  }

  .ant-tabs-tab + .ant-tabs-tab {
    margin-left: 16px;
  }

  .ant-tabs-tab-btn {
    font-size: 20px;
    color: ${DEFAULT_COLOR.gray};
    transform: scale(0.8);
  }

  .ant-tabs-ink-bar {
    background: none;
  }
  .ant-tabs-card > .ant-tabs-nav .ant-tabs-tab {
    border-color: ${DEFAULT_COLOR.white};
  }

  .ant-tabs-top > .ant-tabs-nav::before {
    border-color: ${DEFAULT_COLOR.white};
  }
`;
export const ReviewBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
export const ReviewWriteBtn = styled(SmallBtn)`
  border-radius: 20px;
`;
export const BtnInnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
// ============================점주 답글부분=====================
export const ReplyWrap = styled.div`
  // background: red;
`;
export const ReplyFormWrapper = styled.form`
  display: flex;
  padding-left: 100px;
`;
export const ReplyInputWrapper = styled.div`
  width: 80%;
`;
export const ReplySubmitBtn = styled(SmallBtn)`
  margin-left: 10px;
  padding-top: 10px;
`;
export const OwnerComment = styled.div`
  display: flex;
  padding-left: 64px;
  padding-top: 16px;
`;
export const CommentIcon = styled.div``;
export const CommentContents = styled.div`
  padding-left: 16px;
`;
// ----------------------------모달 부분----------------------

export const ReviewWriteWrapper = styled.div`
  width: calc(100% - 100px);
  padding: 40px 100px;
`;
export const ReviewWriteTitle = styled.div`
  margin-bottom: 24px;
`;
export const ModalReviewContents = styled.div``;
export const ReviewWriteBtnContainer = styled(BtnWrap)`
  /* width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end; */
`;
export const ReviewSubmitBtn = styled(MediumBtn)`
  border-radius: 20px;
`;
export const ReviewCancelBtn = styled(MediumBtn)`
  border-radius: 20px;
  margin-right: 3%;
`;
export const ReviewWriteFromWrap = styled.form``;
export const ReviewWriteUserWrapper = styled.div`
  padding-top: 24px;
`;
export const ReviewWriteInputWrapper = styled.div`
  padding-top: 24px;
`;
export const ModalBtnWrapper = styled.div``;

export const CommentWrap = styled.div`
  width: 100%;
  display: flex;
  padding-top: 16px;
  padding-left: 64px;
  // background: red;
`;
export const CommentImageWrapper = styled.div``;
export const CommentContentWrapper = styled.div`
  padding-left: 16px;
`;
