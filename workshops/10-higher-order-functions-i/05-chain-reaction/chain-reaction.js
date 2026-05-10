// YOUR CODE BELOW
function chainReaction(value, funs){

    funs.forEach(fun => {
        value = fun(value);     
    });
    // for(let i = 0; i < funs.length; i++){
    //     value = funs[i](value);
    // }
    return value;
}