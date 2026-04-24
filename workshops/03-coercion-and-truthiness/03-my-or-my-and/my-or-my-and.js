// YOUR CODE BELOW
function myOr(value1, value2, value3){
    if(isTruthy(value1))
        return value1;
    if(isTruthy(value2))
        return value2;
    if(isTruthy(value3))
        return value3;
    else
        return value3;
}

function myAnd(value1, value2, value3){
    if(!isTruthy(value1))
        return value1;
    if(!isTruthy(value2))
        return value2;
    if(!isTruthy(value3))
        return value3;
    else
        return value3;
}


function isTruthy(value){
    
    if(typeof value === 'undefined'){
        return false;
    }
    if(value === null){
        return false;
    }
    if(typeof value === 'boolean')
            return value;
    if(typeof value === 'number'){
        if(value === 0){
            return false;
        }
        return true;
    }
    if(typeof value === 'string'){
        return value.length > 0 ? true : false;
    }  
}
