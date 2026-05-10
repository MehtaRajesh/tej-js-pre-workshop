// YOUR CODE BELOW
function countToTen(num){
    if(num > 10)
        return undefined;
    if(num === 10){
        console.log(num);
        return undefined;
    }
    console.log(num);
    countToTen(num+1);
}