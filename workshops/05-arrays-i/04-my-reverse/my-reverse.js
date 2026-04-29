// YOUR CODE BELOW
function myReverse(data){
    let reverseData = [];
    for(let i = data.length-1; i > -1; i--)
        reverseData.push(data[i]);
    return reverseData;    
}