import { StarDiv } from "../Components";
import FullStar from "./FullStar";
import HalfStar from "./HalsStar";
import EmptyStar from "./EmptyStar";
const StarRatings = (props) => {
    let score=props.score
    const getStars=()=>{
        const  starContainer=[]
        for(let i=1;i<=5;i++)
        {
            if(score>=i)
            {
                starContainer.push(<FullStar></FullStar>)
            }
            else if(score===i-0.5)
            {
                starContainer.push(<HalfStar></HalfStar>)
            }
            else{
                starContainer.push(<EmptyStar></EmptyStar>)
            }
        }
        return starContainer
    }
    return ( 
        <StarDiv>{getStars()}</StarDiv>
     );
}
 
export default StarRatings;