// YOUR CODE BELOW

function myLastIndexOf(arr, searchValue , startIdx){
    let idx = -1;
    startIdx = startIdx ?? arr.length - 1;
    for(let i = startIdx; i >= 0; i --){
        if(arr[i] === searchValue)
        {
            idx = i;
            break;
        }
    }
    return idx;
}