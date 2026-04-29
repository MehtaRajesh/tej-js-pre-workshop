// YOUR CODE BELOW
function myJoin(array,  separator){
    let result = '';
    separator = separator??',';
    array.forEach(element => {
        if(element === null)
            result += separator;
        else
            result += element + separator;
        // result += (element??'') + separator;    
    });

    return result.slice(0,result.length - separator.length);
}