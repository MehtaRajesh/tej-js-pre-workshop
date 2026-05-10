// YOUR CODE BELOW
function backwardString(str){
    if(str == '' || str === undefined)
        return;
    if(str.length === 1){
        console.log(str);
        return;
    }
    console.log(str[str.length - 1]);
    backwardString(str.slice(0,str.length - 1));
}