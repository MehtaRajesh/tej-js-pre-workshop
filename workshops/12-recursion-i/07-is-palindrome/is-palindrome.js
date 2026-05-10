// YOUR CODE BELOW
function isPalindrome(str){
    if(str.length <= 1) return true;
    if(str[0].toLowerCase() !== str[str.length -1].toLowerCase())
        return false;
    else
        return isPalindrome(str.slice(1,-1));
}

