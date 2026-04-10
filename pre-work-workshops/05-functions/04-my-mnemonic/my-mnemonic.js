// YOUR CODE BELOW

const myMnemonic = (...words) => {
    
    let newWord = "";
    words.forEach(x=>{
        newWord += x[0]; 
    })
    return newWord;
};



