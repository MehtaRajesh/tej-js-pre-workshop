// YOUR CODE BELOW
function compareObjects(obj1 , obj2){
    let obj1Keys = Object.keys(obj1);
    let obj2Keys = Object.keys(obj2);
    if(obj1Keys.length === obj2Keys.length){
        for(let x of obj1Keys){
            if(!obj2.hasOwnProperty(x))
                return false;
            if(obj1[x] !== obj2[x])
                return false;            
        }
        return true;
    }
    else
        return false;
}


