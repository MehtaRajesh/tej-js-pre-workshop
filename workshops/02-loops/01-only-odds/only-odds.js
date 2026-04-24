// YOUR CODE BELOW

function onlyOdds(num){
    let oddSum = 0;
    for(let i = 1; i < num; i +=2){
        oddSum += i;
    }
    return oddSum;
}


