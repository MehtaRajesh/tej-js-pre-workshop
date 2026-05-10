// // YOUR CODE BELOW


function lastFridayNight(array){
    let sumValue = 0;
    for (let i = 0; i < array.length; i++) {
        sumValue += array[i].amount;
    }
    return sumValue;
}


