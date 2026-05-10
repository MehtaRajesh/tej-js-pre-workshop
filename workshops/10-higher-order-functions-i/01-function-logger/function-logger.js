// YOUR CODE BELOW
function functionLogger(fun, args){
    console.log('Function starting');
    let returnValue = fun(args);
    console.log('Function complete');
    return returnValue;
}