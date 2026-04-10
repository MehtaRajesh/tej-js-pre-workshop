// YOUR CODE BELOW
const maxOfThree = (num1, num2, num3) =>{
    if(num1 >= num2  && num2 >= num3){
        return num1;
    }
    else if( num1 <= num2 && num2 >= num3 ){
        return num2;
    }
    else
        return num3;
};