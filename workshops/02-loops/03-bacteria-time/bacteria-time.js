// YOUR CODE BELOW
function bacteriaTime(currentNum, targetNum){
    if( currentNum > targetNum)
        return 'targetNum must be larger than currentNum';
    else{
        let totalTime = Math.round(Math.log2(targetNum) - Math.log2(currentNum)) * 20;

        return totalTime;
    }
}
