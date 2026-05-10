// YOUR CODE BELOW
function frequencyAnalysis(str){
    let output = {};
    for(let char of str){
        if(char == ' ')
            continue;
        if(output.hasOwnProperty(char)){
            output[char] += 1;
        }
        else{
            output[char] = 1;
        }
    }
    return output;
}