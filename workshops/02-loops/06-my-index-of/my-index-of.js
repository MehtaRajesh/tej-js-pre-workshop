// YOUR CODE BELOW

function myIndexOf(source, searchValue, startIdx){
    let count = 0;
    let firstOccuranceIdx = -1;
    startIdx = typeof startIdx === 'undefined'? 0: startIdx;
    
    if(searchValue.length === 1){
        for(let i=startIdx; i< source.length; i++){
            if(source[i] === searchValue){
                firstOccuranceIdx = i;  
                break;       
            }
        }
    }
    else{
        let searchLength = searchValue.length;
        for(let i = startIdx; i < source.length; i++){
            if(source.slice(i, i + searchLength) === searchValue){
                firstOccuranceIdx = i;
                break;
            }
        }
    }
    return firstOccuranceIdx;
}


