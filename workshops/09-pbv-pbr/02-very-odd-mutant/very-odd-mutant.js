// YOUR CODE BELOW
function veryOddMutant(nums){
    let evenCounter = 0;

    nums.forEach((num,index) => {
        if(num % 2 == 0){
            evenCounter++;
            nums[index] = 'normie';
        }
    });
    return evenCounter;
}