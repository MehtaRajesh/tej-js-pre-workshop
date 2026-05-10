// YOUR CODE BELOW
function billerBuilder(state){
    if(state ==='NY'){
        return (n) =>  n * 1.03 * 1.04;
        // return function(n){
        //     return n * 1.03 * 1.04;
        // }
    }
    if(state ==='NJ'){
        return (n) => n * 1.05 * 1.06625;
        // return function(n){
        //     return n * 1.05 * 1.06625;
        // }
    }
}