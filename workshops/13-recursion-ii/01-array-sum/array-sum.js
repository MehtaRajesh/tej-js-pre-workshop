// YOUR CODE BELOW
function arraySum(nums){
    if(typeof nums === 'number') return nums;   
    if(Array.isArray(nums) && nums.length === 1){
        return arraySum(nums[0]);
    }  
    if(Array.isArray(nums))
        return arraySum(nums[0]) + arraySum(nums.slice(1));
}