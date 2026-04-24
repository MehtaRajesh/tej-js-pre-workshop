// YOUR CODE BELOW

function justInCamelCase(str){
    let strArray = str.split('_');
    let returnValue = '';
    for(let i = 0; i < strArray.length;i++){

        if(i === 0)
            returnValue = strArray[i].toLowerCase();
        else
            returnValue += strArray[i].toLowerCase().charAt(0).toUpperCase() 
                         + strArray[i].slice(1).toLowerCase();
    }
    return returnValue;
}






// function justInCamelCase(undername) {
//   let camelcaseoutput = "";
//     let foundunder = false;
//     for(let i = 0; i<undername.length; i++) {
//     if (undername[i] === "_") {
//       foundunder = true;
//       } else {
//         if (foundunder) {
//         camelcaseoutput += undername[i].toUpperCase();
//       foundunder = false;
//     } else {
//       camelcaseoutput += undername[i];
//       }
//   }
//   }
//       return camelcaseoutput;
// }
