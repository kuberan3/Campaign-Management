import { Progress } from 'antd';
import { styled } from 'styled-components';
const RateDiv=styled.div`
width: 112px;
height: 6px;
`
const ProgressBar = (rate) => {
    let clr=""
    if(rate.rate<30)
    {
        clr="rgb(220,50,50)"
    }
    if(rate.rate<70 && rate > 30){
        clr="rgb(255,190,75)"
    }
    if(rate.rate>=100){
        clr="rgb(38,171,103)"
    }
    return ( 
        <RateDiv>
            <Progress percent={rate.rate} size="small" strokeColor={clr} showInfo={false} />
        </RateDiv>
     );
}

export default ProgressBar;