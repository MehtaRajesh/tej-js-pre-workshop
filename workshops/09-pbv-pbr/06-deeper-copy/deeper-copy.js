// YOUR CODE BELOW
function deeperCopy(data){
    let newData = [];
    for(let i = 0; i < data.length; i++){
        if(Array.isArray(data[i])){

            let newInnerArray = [];
            for(let j = 0; j < data[i].length; j++){
                newInnerArray.push(data[i][j]);
            }
            newData.push(newInnerArray);
        }
        else{
            newData.push(data[i]);
        }
    }
    return newData;
}