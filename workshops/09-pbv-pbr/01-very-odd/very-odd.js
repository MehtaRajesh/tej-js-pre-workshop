// YOUR CODE BELOW
function veryOdd(nums){
    let oddNums = [];
    nums.forEach(num => {
        if(num % 2 === 1 )
            oddNums.push(num);
    });
    return oddNums;
}