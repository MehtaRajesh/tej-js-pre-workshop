// YOUR CODE BELOW

function oddCouple(nums){
    let resultArray = [];
    for( let i = 0; i< nums.length;i++){
        if(nums[i] % 2 === 1){
            resultArray.push(nums[i]);
            if(resultArray.length == 2)
                break;
        }
    }
    return resultArray;
}