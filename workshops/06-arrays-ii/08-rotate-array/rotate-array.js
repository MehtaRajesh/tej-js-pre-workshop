// YOUR CODE BELOW
function rotateArray(originalArray, rotateNum){
    let newArray =[];
    rotateNum = rotateNum??0;
    if(rotateNum < 0){
        for(let i = -rotateNum; i < originalArray.length; i++)
            newArray.push(originalArray[i]);
        for(let i = 0; i < -rotateNum; i++)
            newArray.push(originalArray[i]);
        
    }
    else{
        for(let i = originalArray.length  - rotateNum; i < originalArray.length; i++)
            newArray.push(originalArray[i]);       
        for(let i = 0; i < originalArray.length - rotateNum; i++)
            newArray.push(originalArray[i]);
    }

    return newArray;
}