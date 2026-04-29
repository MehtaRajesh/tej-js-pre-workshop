// YOUR CODE BELOW
function myUnshift(data, value){
    let newData = [];
    newData.push(value);
    data.forEach(e => {
        newData.push(e);
    });
    return newData;
}