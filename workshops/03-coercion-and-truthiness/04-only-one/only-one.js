// YOUR CODE BELOW
function onlyOne(value1, value2, value3){
    if(isTruthy(value1)){
        if(isTruthy(value2) || isTruthy(value3))
            return false;
        return true;
        
    }
    else{
        if(isTruthy(value2) && isTruthy(value3))
            return false;
        if(isTruthy(value2) || isTruthy(value3))
            return true;
        return false;
    }
    
}


function isTruthy(value){
    if(value === null)
        return false;
    if(typeof value === 'undefined')
        return false;
    if(typeof value === 'number')
        return value === 0? false: true;  
    if(typeof value === 'boolean')
        return value;
    if(typeof value === 'string'){
        return value.length > 0? true:false;
    }
}