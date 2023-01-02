import styled from "@emotion/styled"
import { Modal, Tabs } from "antd"
import { ContainerWrap, MediumBtn } from "../../../commons/styles/commonStyles"

export const DetailContainer = styled(ContainerWrap)``
export const CafeImageWrapper = styled.div`
    width: 100%;
    margin-top: 54px;
    // text-align: center;
    // background: yellow;
`
export const CafeInfoWrapper = styled.div`
    width: 100%;
    margin-top: 54px;
`
export const CafeNameWrapper = styled.div`
    width: 100%;
`
export const CafeInfoFooter = styled.div`
    width: 100%;
    margin-top: 48px;
    display: flex;
    flex-direction: row;
`
export const CafeAddressContainer = styled.div`
    width: 50%;
    // background: red;
`
export const TagContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    // justify-content: center;
    // background: green;
    padding-top: 2%;
`
export const TagsWrapper = styled.div`
    width: 12%;
    margin-left: 0px;
    // background: red;
    // text-align: center;
`
export const LikeContainer = styled.div`
    width: 40%;
    // background: yellow;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    // padding-top: 2%;
`
export const OwnerContents = styled.div`
    width: 100%;
    margin-top: 64px;
`
export const Contents = styled.div`
    width: 100%;
    margin-top: 32px;
`
export const ColorLine = styled.div`
    width: 100%;
    border-bottom: 2px solid #BB8044;
    margin-top: 80px;
`
export const MenuTitle = styled.div`
    margin-top: 80px;
`
export const MenuImageWrapper = styled.div`
    // height: 1500px;
    display:flex;
    flex-direction: row;
    margin-top: 80px;
`
export const Menu = styled.div`
    width: 30%;
    margin-right: 48px;
`
export const OwnerTitle = styled.div`
    margin: 80px 0px 100px 0px;
`
export const TempDiv = styled.div`
    border-radius: 20px;
    background-color: #f3e6d8;
    padding: 17px 22px;
    margin: 24px 0px 0px 16px;
`
export const SubTitleWrapper = styled.div`
    width: 25%;
    display: flex;
    flex-direction: row;
    // border-bottom: 5px solid #f3e6d8;
    margin-top: 72px;
`
export const TimeTableWrapper = styled.div`
    display: flex;
    flex-direction: row;
`
// ------------------------사진모아 부분 -------------------

export const OwnerImageContainer = styled.div`
    width: 100%;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 40px;
`
export const OwnerImageWrapper = styled.div`
    width: 24%;
    display: inline-block;
`
// ------------------------리뷰모아 부분-------------------

export const ReviewContainer = styled.div`
    width: 100%;
    margin-top: 32px;
`
export const ReviewWrapper = styled.div`
    width: 40%;
    display: inline-block;
    // padding: 0% 4% % 0%;
    margin: 0% 10% 5% 0%;
    // background: blue;
`
export const ReviewHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    // background: red;

`
export const BtnWrapper = styled.div`
    width:20%;
    display: flex;
    // background: yellow;
`
export const EditBtn = styled.span`
    width: 100%;
    text-align: center;
    // background: yellow;
`
export const DeleteBtn = styled.span`
    width: 100%;
    text-align: center;
    // background: green;
`
export const ReviewContents = styled.div`
    width: 100%;
    margin-left: 96px;
`
export const ReplyBtn = styled.div`
    // background: red;
    width: 15%;
    margin-left: 450px;
    padding-left: 8px;
`
export const ReviewColorLine = styled.div`
    width: 79%;
    border-bottom: 10px solid #F3E6D8;
    margin: 32px 0px 16px 96px;
`
export const ReviewImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 64px;
    // background: red;
`
export const ReviewImageWrapper = styled.div`
    width: 25%;
    margin-left: 32px;
`
export const ComponentsTabs = styled(Tabs)`
    .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
        color: #81564b;
        font-size: 20px;
    }
    .ant-tabs-tab {
        color: gray;
    }
    .ant-tabs-ink-bar {
        background: none;
    }
    .ant-tabs-card > .ant-tabs-nav .ant-tabs-tab {
        border-color: white;
    }
    
    .ant-tabs-top > .ant-tabs-nav::before {
        border-color: white;
    }
    
    // .ant-tabs-content {
    //     padding-top: 100px;
    // }
    // .ant-tabs-nav {
    //     border: none;
    //   }
    // .ant-tabs > .ant-tabs-nav {
    //     position: absolute;
    // }
`
export const ReviewBtnWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    // background: red;
`
export const ReviewWriteBtn = styled(MediumBtn)`
    // display: flex;
    // flex-direction: row;
    width: 15%;
    padding: 1%;
    border-radius: 20px;
`
export const BtnInnerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
// ============================점주 답글부분=====================
export const ReplyWrapper = styled.div`
    width: 100%;
    padding-left: 88px;
`

// ----------------------------모달 부분----------------------

export const ModalWrapper = styled(Modal)`
    // width: 1500px;
    .ant-modal-content{
        
    }
    .ant-modal-centered .ant-modal{

    }
    .ant-modal-body{
        // width: fit-content
    }
    .ant-modal-body{

    }
`
export const ModalReviewWrapper = styled.div`
    width: 100%;
    padding: 0% 10%;
`
export const ModalReviewTitle = styled.div`
    padding: 15% 0% 10% 0%;
`
export const ModalReviewContents = styled.div`
`
export const ModalReviewBtnContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    // background: red;
    // padding: 20%;
`
export const ReviewSubmitBtn = styled(MediumBtn)`
    border-radius: 20px;
`
export const ReviewCancelBtn = styled(MediumBtn)`
    border-radius: 20px;
     margin-right: 3%;
`
export const ModalReviewFromWrap = styled.form`
`
export const ModalUserWrapper = styled.div`
    padding-top: 10%;
`
export const ModalInputWrapper = styled.div`
    padding-top: 5%;
    padding-bottom: 20%;
`
export const ModalBtnWrapper = styled.div`
`