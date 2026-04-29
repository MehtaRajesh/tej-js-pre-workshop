// YOUR CODE BELOW
function removeColumns(originalGrid, numColumns){
    let newMat = [];
    for(let i = 0; i< originalGrid.length; i++){
        let newRow = [];
        for(let j = 0; j < originalGrid[i].length - numColumns; j++){
            newRow.push(originalGrid[i][j]);
        }
        if(newRow.length !== 0)
            newMat.push(newRow);
    }
    return newMat;
}
