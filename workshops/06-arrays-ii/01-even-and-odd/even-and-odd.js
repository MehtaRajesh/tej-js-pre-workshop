// YOUR CODE BELOW
function evenAndOdd(nums){
    let odd = [];
    let even = [];
    nums.forEach(e => {
        e % 2 === 0?even.push(e):odd.push(e);
    });

    return [even,odd];
}