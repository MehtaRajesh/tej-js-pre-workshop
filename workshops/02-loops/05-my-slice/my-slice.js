// YOUR CODE BELOW
function mySlice(originalString, startIdx, endIdx){
    if(typeof startIdx === "undefined"){
        return originalString;
    }
    else{
        let returnString ='';

        if(typeof endIdx === "undefined"){
            for(let i=startIdx; i<originalString.length; i++){
                returnString += originalString[i];
            }
        }
        else{
            for(let i=startIdx; i<endIdx; i++){
                returnString += originalString[i];
            }
        }
        return returnString;
    }
}



