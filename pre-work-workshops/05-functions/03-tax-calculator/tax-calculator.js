// YOUR CODE BELOW

const taxCalculator = (price, state) =>{
    const NYtax = 0.04;
    const NJtax = 0.06625;
    let taxValue = 0;
    if(state === 'NY')
        taxValue =  price * NYtax;
    else if(state === 'NJ')
        taxValue = price * NJtax;

    return price + taxValue;
};

