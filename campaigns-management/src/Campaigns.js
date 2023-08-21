import {
  DotDiv,
  HeaderCampaign,
  HeaderDiv,
  MainDiv,
  CampaignNameTag,
  CampaignNameDiv,
  RecepientResponseDiv,
  ColumnTitlePTag,
  ColumnTitlediv,
  RecepienScore,
  RecepienPTag,
  Linediv,
  CompletionRatediv,
  RatePercent,
  StarScoreDiv,
  StarDiv,
  ScoreAverage,
  StatusDiv,
  StatusContent,
  LastModifiedDiv,

} from "./Components";
import { Space, Table, Tag,Rate } from "antd";
import UserIcon from "./components/UserIcon";
import ThreeDot from "./components/Three-Dot-svg";
import SortIcon from "./components/SortIcon";
import LineText from "./components/FileText";
import RateRuler from "./components/RateRuler";
import FullStar from "./components/FullStar";
import HalfStar from "./components/HalsStar";
import EmptyStar from "./components/EmptyStar"
import ActionDot from "./components/ActionDot";
import RateRuler61 from "./components/RateRuler61";
import ProgressBar from "./components/ProgressBar";
const columns = [
  {
    title: (
      <ColumnTitlediv>
        <ColumnTitlePTag>Name</ColumnTitlePTag> <SortIcon></SortIcon>
      </ColumnTitlediv>
    ),
    // dataIndex: "name",
    key: "name",
    render: (data, score) => 
      <CampaignNameDiv>
         <CampaignNameTag>{data.name}</CampaignNameTag>
        <RecepientResponseDiv>
            <UserIcon></UserIcon>
            <RecepienPTag>Recipients</RecepienPTag>
            <RecepienScore>{data.recepient}</RecepienScore>
            <Linediv></Linediv>
            <LineText></LineText>
            <RecepienPTag>Response</RecepienPTag>
            <RecepienScore>{data.response}</RecepienScore>
        </RecepientResponseDiv>
      </CampaignNameDiv>
  },
  {
    title: <ColumnTitlePTag>Completion Rate</ColumnTitlePTag>,
    key: "CompletionRate",
    render: (data) => 
    <CompletionRatediv>
        <RatePercent marginLeft={data.rate} >{data.rate}%</RatePercent>
        <ProgressBar rate={data.rate} ></ProgressBar>
    </CompletionRatediv>
  },
  {
    title: <ColumnTitlePTag>Average Score</ColumnTitlePTag>,
    key: "AverageScore",
    render: (data) => 
    <StarScoreDiv>
        {data.star}
        <ScoreAverage>{data.score}</ScoreAverage>
    </StarScoreDiv>
  },
  {
    title: <ColumnTitlePTag>Status</ColumnTitlePTag>,
    key: "Status",
    render: (data) => 
    <StatusDiv>
        <StatusContent>{data.status}</StatusContent>
    </StatusDiv>
  },
  {
    title: (
      <ColumnTitlediv>
        <ColumnTitlePTag>Last Modified</ColumnTitlePTag> <SortIcon></SortIcon>{" "}
      </ColumnTitlediv>
    ),
   
    key: "LastModified",
    render: (data) => 
   <LastModifiedDiv>
    {data.lastmodofied}
   </LastModifiedDiv>
  },
  {
    title: (
      <ColumnTitlediv>
        <ColumnTitlePTag>
          Last Activated
        </ColumnTitlePTag> <SortIcon></SortIcon>
      </ColumnTitlediv>
    ),
   
    key: "LastActivated",
    render: (data) => 
   <LastModifiedDiv>
        {data.lastactivated}
   </LastModifiedDiv>
  },
  {
    title: <ColumnTitlePTag>Actions</ColumnTitlePTag>,
   
    key: "Actions",
    render: () => 
        <ActionDot></ActionDot>
  },
];
const data = [
  {
    key: "1",
    name: "Application Survey",
    recepient: 100,
    response: 80,
    rate:23.1,
    score:3.42,
    star:<StarDiv>
            <FullStar></FullStar>
            <FullStar></FullStar>
            <FullStar></FullStar>
            <HalfStar></HalfStar>
            <EmptyStar></EmptyStar>
        </StarDiv>,
    status:'Active',
    lastmodofied:'Oct 25, 2021',
    lastactivated:'Oct 25, 2021'
  },
  {
    key: "2",
    name: "Application Survey",
    recepient: 100,
    response: 80,
    rate:61.2,
    score:4.35,
    star:<StarDiv>
            <FullStar></FullStar>
            <FullStar></FullStar>
            <FullStar></FullStar>
            <FullStar></FullStar>
            <HalfStar></HalfStar>
            
        </StarDiv>,
    status:'Active',
    lastmodofied:'Oct 25, 2021',
    lastactivated:'Oct 25, 2021'
  },
  {
    key: "3",
    name: "Application Survey",
    recepient: 100,
    response: 80,
    rate:100,
    score:5,
    star:<StarDiv>
            <FullStar></FullStar>
            <FullStar></FullStar>
            <FullStar></FullStar>
            <FullStar></FullStar>
            <FullStar></FullStar>
        </StarDiv>,
    status:'Active',
    lastmodofied:'Oct 25, 2021',
    lastactivated:'Oct 25, 2021'
  },
  {
    key: "4",
    name: "Application Survey",
    recepient: 100,
    response: 80,
    rate:80,

    star:<RecepienPTag>No Survey</RecepienPTag>,
    status:'Active',
    lastmodofied:'Oct 25, 2021',
    lastactivated:'Oct 25, 2021'
  },
  {
    key: "5",
    name: "Application Survey",
    recepient: 100,
    response: 80,
    rate:55.1,
    // score:3.42,
    star:<RecepienPTag>-</RecepienPTag>
    ,
    status:'Active',
    lastmodofied:'Oct 25, 2021',
    lastactivated:'Oct 25, 2021'
  },
];
const Campaigns = () => {
  return (
    <MainDiv>
      <HeaderDiv>
        <HeaderCampaign>Campaigns</HeaderCampaign>
        <DotDiv>
          <ThreeDot></ThreeDot>
        </DotDiv>
      </HeaderDiv>
      <Table columns={columns} dataSource={data} />;
    </MainDiv>
  );
};

export default Campaigns;
