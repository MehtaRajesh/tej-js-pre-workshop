// YOUR CODE BELOW
function myIncludes(data, searchValue){
    for(let i = 0 ; i < data.length ; i++){
        if( data[i] === searchValue)
            return true;
    }
    return false;
}