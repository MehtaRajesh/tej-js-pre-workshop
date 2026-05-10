// YOUR CODE BELOW

function mySplice(array, startIdx, deleteCount, value){
    let removedArray = [];
    deleteCount = deleteCount??array.length-startIdx;
    deleteCount = Math.max(0,Math.min(deleteCount, array.length - startIdx));
    let result = [];
    for(let i = startIdx; i< startIdx + deleteCount ; i++){
        removedArray.push(array[i]);
    }  
    for(let i=0; i<startIdx;i++){
        result.push(array[i]);
    }
    if(value !== undefined){
        let i = deleteCount;
        do{
            result.push(value);
            i--;
        }while(i>0)
    }
    for(let i = startIdx + deleteCount; i < array.length;i++){
        result.push(array[i]);
    }
    array.length = 0;
    for(let i = 0; i < result.length; i++){
        array.push(result[i]);
    }
    return removedArray;
    // if(value !== undefined){
    //     if(deleteCount === 0){

    //         let result = [];
    //         for(let i=0; i<startIdx;i++){
    //             result.push(array[i]);
    //         }
    //         result.push(value);
    //         for(let i=startIdx; i<array.length;i++){
    //             result.push(array[i]);
    //         }
    //         array.length = 0;
    //         for(let i = 0; i < result.length; i++){
    //             array.push(result[i]);
    //         }
    //     }
    //     else{
    //         for(let i = startIdx; i < startIdx + deleteCount ; i++){
    //             array[i] = value;
    //         }
    //     }
    //     return array;      
    // }
    // else
    // {
    //     for(let i = startIdx; i< startIdx + deleteCount ; i++){
    //         removedArray.push(array[i]);
    //     }  
    //     let result = [];
    //     for(let i=0; i<startIdx;i++){
    //         result.push(array[i]);
    //     }
    //     for(let i = startIdx + deleteCount; i < array.length;i++){
    //         result.push(array[i]);
    //     }
    //     array.length = 0;
    //     for(let i = 0; i < result.length; i++){
    //         array.push(result[i]);
    //     }
    // }
    // return removedArray;
}


