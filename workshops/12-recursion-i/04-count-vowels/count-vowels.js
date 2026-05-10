// YOUR CODE BELOW
function countVowels(str){
    if(str.length === 1){

        if(str == 'a' || str == 'e' ||str == 'i' ||str == 'o' ||str == 'u')
            return 1;
        else
            return 0;
    }
    if(str[0] == 'a' || str[0] == 'e' ||str[0] == 'i' ||str[0] == 'o' ||str[0] == 'u'){
        return 1 + countVowels(str.slice(1));
    }
    else
        return 0 + countVowels(str.slice(1));

}