// YOUR CODE BELOW
function callThemAll(obj, value){
    let returnValues =[];
    for(let key of Object.keys(obj)){
        if(typeof obj[key] === 'function'){
            returnValues.push(obj[key](value));
        }
    }
    return returnValues;
}