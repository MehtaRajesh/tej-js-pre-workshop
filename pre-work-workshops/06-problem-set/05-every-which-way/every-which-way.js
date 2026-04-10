// YOUR CODE BELOW

const everyWhichWay = (num1, num2, num3) =>{

    return (num1 + num2) === num3? 'sum':
                (num1 - num2) === num3? 'difference':
                    (num1 * num2) === num3? 'product':
                        (num1 / num2) === num3? 'fraction':
                            null;

};
