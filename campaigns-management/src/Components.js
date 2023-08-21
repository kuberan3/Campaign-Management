import { styled } from "styled-components";
import { Table } from "antd";
export const MainDiv=styled.div`
width:100vw;
height:100vh;
`
export const HeaderDiv=styled.div`
/* width: */
align-items: center;
display: flex;
justify-content: space-between;
height: 42px;
flex-shrink: 0;
background-color: rgb(228,231,234);
`

export const StyledTable=styled(Table)`
 .ant-table-thead .ant-table-cell {
    background-color: #F0F2F4;
    color: var(--grey-t-15, #637487);
    font-size: 16px;
    /* height: 30px; */
  }
`

export const DotDiv=styled.div`
    margin-right: 80px;
`

export const HeaderCampaign=styled.p`
color: #3A4A5B;
font-family: SF Pro Display;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-left: 15px;
`
export const CampaignNameDiv=styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    /* gap: 15px; */
`

export const ColumnTitlePTag=styled.div`
 color: var(--grey-t-15, #637487);
font-family: SF Pro Display;
font-size: 16px;
font-style: normal;
margin-right: 10px;
font-weight: 400;
line-height: normal;
`

export const ColumnTitlediv=styled.p`
   display: flex;
   align-items: center;
`

export const CampaignNameTag=styled.p`
color: var(--blue-100, #1B63A9);
font-family: SF Pro Display;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
`

export const RecepientResponseDiv=styled.div`
  display: flex;
align-items: flex-end;
align-items: center;
gap: 10px;
`
export const RecepienPTag=styled.p`
 color: var(--grey-t-25, #768595);
font-family: SF Pro Display;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
export const RecepienScore=styled.p`
color: var(--blue-100, #1B63A9);
font-family: SF Pro Display;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;
`
export const Linediv=styled.div`
width: 1px;
height: 14px;
background-color: #E4E7EA;
`
export const CompletionRatediv=styled.div`
display: flex;
width: 112px;
padding-right: 0px;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 10px;
`

export const RatePercent= styled.p`
margin-left: ${props => props.marginLeft-10 || '0'}px;
color: var(--grey-s-50, #242E39);
font-family: SF Pro Display;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
export const StarScoreDiv=styled.div`
display: inline-flex;
align-items: center;
gap: 10px;
`
export const StarDiv=styled.div`

`
export const ScoreAverage=styled.p`
color: var(--grey-s-50, #242E39);
font-family: SF Pro Display;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
export const StatusDiv=styled.div`
border-radius: 20px;
border: 1px solid var(--green-t-50, #93D7AF);
background: var(--green-t-96, #F6FCF9);
display: inline-flex;
padding: 4px 11px;
align-items: center;
gap: 10px;
`
export const StatusContent=styled.div`
color: var(--green-t-15, #47BA78);
font-family: SF Pro Display;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: normal;
`

export const LastModifiedDiv=styled.div`
color: var(--grey-s-50, #242E39);
/* text-align: center; */
font-family: SF Pro Display;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
`