// YOUR CODE BELOW
function cacheSavings(callback){
    let cache = {};
    const newFun = function(arg){
        let returnValue;
        if(cache.hasOwnProperty(arg)){
            returnValue = cache[arg];
        }
        else{
            returnValue = callback(arg);
            cache[arg] = returnValue;
        }
        return returnValue;
    }
    return newFun;
}