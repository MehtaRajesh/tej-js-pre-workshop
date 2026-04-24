// YOUR CODE BELOW

function crazyCaps(str){
    let returnString = '';
    let toggle = false;
    for(let i = 0; i < str.length; i++){
        if(toggle){
            returnString += str[i].toUpperCase();
            toggle = false;
        }
        else{
            returnString += str[i].toLowerCase();
            toggle = true;
        }
    }

    return returnString;
}




