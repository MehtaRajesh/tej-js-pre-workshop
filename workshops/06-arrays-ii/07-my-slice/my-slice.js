// YOUR CODE BELOW
function mySlice(originalArray, startingIdx, endingIdx){
    let newArray =[];
    startingIdx = startingIdx??0;
    if(startingIdx < 0)
        startingIdx = originalArray.length + startingIdx;
    endingIdx = endingIdx??originalArray.length;
    if(endingIdx < 0)
        endingIdx = originalArray.length + endingIdx;
    for(let i = startingIdx; i < endingIdx; i++){
        newArray.push(originalArray[i]);
    }
    return newArray;
}