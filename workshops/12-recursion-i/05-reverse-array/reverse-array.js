// YOUR CODE BELOW
function reverseArray(arr){
    if(arr.length ===0)
        return [];
    return [arr[arr.length -1], ...reverseArray(arr.slice(0,-1))];
}