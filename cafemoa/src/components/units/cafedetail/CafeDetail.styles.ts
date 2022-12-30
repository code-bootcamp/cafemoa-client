import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { Tabs } from "antd"
import { ContainerWrap } from "../../../commons/styles/commonStyles"

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
export const SelectBox = styled.div`
    margin-top: 40px;
    ${(props) => props.isSelect && css`
    ${SelectBoxUnderBar}{
        transform: translateX(115px)
    }
  `}
`
export const SelectBoxUnderBar = styled.div`
    width: 6%;
    border-bottom: 5px solid #BB8044;
    margin-left: 5px;
    transition : all 0.5s; 
`
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
export const SelectBoxPhoto = styled.div`
    display: inline-block;
`
export const SelectBoxReview = styled.div`
    display: inline-block;
    margin-left: 24px;
`
export const ReviewContainer = styled.div`
    width: 100%;
    margin-top: 32px;
`
export const ReviewWrapper = styled.div`
    width: 40%;
    display: inline-block;
    margin: 0% 10% 5% 0%;
    // background: red;
`
export const ReviewContents = styled.div`
    width: 100%;
    margin-left: 96px;
`
export const ReviewColorLine = styled.div`
    width: 90%;
    border-bottom: 3px solid #BB8044;
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


