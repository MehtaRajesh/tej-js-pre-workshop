// YOUR CODE BELOW
function partial(fun, arga){
    return (argb) => fun(arga,argb);
}