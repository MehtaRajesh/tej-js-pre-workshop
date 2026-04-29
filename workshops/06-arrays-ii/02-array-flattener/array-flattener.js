// YOUR CODE BELOW
function arrayFlattener(data){
    let newData = [];
    if(Array.isArray(data)){
        data.forEach(element => {
            if(Array.isArray(element)){
                element.forEach(e =>{newData.push(e);});
            }
            else
                newData.push(element);
        });
    }
    else
        newData.push(data);
    return newData;
}