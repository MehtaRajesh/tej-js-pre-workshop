// YOUR CODE BELOW
function reverse(data){
    let dataLength = data.length;
    for(let i = 0; i < Math.trunc(dataLength/2); i++){
        let temp = data[i];
        data[i] = data[dataLength - 1 - i];
    }
    return data;
}