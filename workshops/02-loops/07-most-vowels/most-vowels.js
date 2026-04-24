// YOUR CODE BELOW

// YOUR CODE BELOW
function mostVowels(source){
    let startIdxPreviousWord = 0;
    let startIdxCurrentWord = 0;
    let strPreviousWordLength = 0;
    let strCurrentWordLength = 0;
    let numberOfPreviousVowels = 0;
    let numberOfCurrentVowels = 0;
    source = String(source).trim();

    for(let i = 0; i < source.length; i++){
        if(source[i] === ' '){
            if(numberOfPreviousVowels < numberOfCurrentVowels){
                startIdxPreviousWord = startIdxCurrentWord;
                numberOfPreviousVowels = numberOfCurrentVowels;
                strPreviousWordLength = strCurrentWordLength;          
            }               
            numberOfCurrentVowels = 0;          
            strCurrentWordLength = 0;
            startIdxCurrentWord = i+1;
        }
        else{
            if(source[i] === 'a' || source[i] === 'e' || source[i] === 'i' 
                || source[i] === 'o' || source[i] === 'u')
            {
                numberOfCurrentVowels++;
            }
            strCurrentWordLength++;
        }
        if( i == source.length -1){
            if(numberOfPreviousVowels < numberOfCurrentVowels){
                let word = source.slice(startIdxCurrentWord, startIdxCurrentWord + strCurrentWordLength);
                if(String(word).endsWith('.'))
                    word = word.slice(0, word.length -1);
                return word;
            }
            else{
                let word = source.slice(startIdxPreviousWord, startIdxPreviousWord + strPreviousWordLength);
                if(String(word).endsWith('.'))
                    word = word.slice(0, word.length -1);
                return word;
            }
        }
        
    }
}

