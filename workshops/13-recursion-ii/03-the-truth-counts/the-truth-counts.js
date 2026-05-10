// YOUR CODE BELOW
function theTruthCounts(arr){
    let count = 0;
    if(!Array.isArray(arr))
        if(arr)
            return 1;
        else
             return 0;
    for(let item of arr){
        count += theTruthCounts(item);
    }
    return count;
}
