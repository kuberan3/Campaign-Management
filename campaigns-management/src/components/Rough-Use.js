let rate=2.5;
let rounded=Math.floor(rate);
let x=rounded,i;
for(i=0;i<rounded;i++)
{
    console.log("full star")
    // x=x-1;
}
// x=x+1;
if(rate%1!==0)
{
    console.log("halfe")
    rounded--;
}
// console.log(x)
for(i=0; i<rounded; i++)
{
    console.log("empty")
}