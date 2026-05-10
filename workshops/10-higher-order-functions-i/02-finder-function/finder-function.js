// YOUR CODE BELOW
function finderFunction(data, callback){
    for(let i = 0; i < data.length; i++) {
        if(callback(data[i])){
            return i;
        }
    }
    return -1;
}