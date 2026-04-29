// YOUR CODE BELOW
function makeGrid(numColumns, numRows){
    let mat = [];
    for(let i = 0; i < numRows ; i ++){
        let newRow = [];
        for(let j = 1 ; j <= numColumns ; j++){
            newRow.push(j);
        }
        mat.push(newRow);
    }
    return mat;
}