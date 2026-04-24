// // YOUR CODE BELOW

// function isTruthy(value){
    
//     if(typeof value === 'undefined'){
//         return 'undefined is falsey';
//     }
//     if(value === null){
//         return 'The null value is falsey';
//     }
//     if(typeof value === 'boolean'){
//         if(value === true){
//             return true;
//         }
//         if(value === false){
//             return 'The boolean value false is falsey';
//         }
//     }
//     if(typeof value === 'number'){
//         if(value === 0){
//             return 'The number 0 is falsey (the only falsey number)';
//         }
//         if(value === 1){
//             return true;
//         } 
//         return true;
//     }
//     if(typeof value === 'string'){
//         return value.length > 0? true : 'The empty string is falsey (the only falsey string)';
//     }  
// }