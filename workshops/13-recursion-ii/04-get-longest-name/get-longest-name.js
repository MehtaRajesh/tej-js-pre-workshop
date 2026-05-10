// YOUR CODE BELOW
function getLongestName(obj){
    let longestName = '';
    for(let key of Object.keys(obj)){
        if(obj[key] != null){
            let returnValue = getLongestName(obj[key]);
            longestName = returnValue.length > longestName.length?returnValue:longestName ;
        }
        else{
            longestName = key.length > longestName.length?key:longestName ;
        }
    }
    return longestName;
}
 ////using reduce
// function getLongestName(obj) {
//   return Object.entries(obj).reduce(
//     (longest, [key, value]) => {
//       const name = value ? getLongestName(value) : key;
//       return name.length > longest.length ? name : longest;
//     },
//     ''
//   );
// }
