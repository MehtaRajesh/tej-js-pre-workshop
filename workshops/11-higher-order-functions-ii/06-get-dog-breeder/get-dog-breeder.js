// YOUR CODE BELOW

function getDogBreeder(name = 'Steve', age = 0){
    if (typeof name === 'number') [name, age] = ['Steve', name];

    return function(newName=name,newAge=age){
        if(typeof newName === 'number'){
            newAge = newName;
            newName = name;
        }
        return {'name': newName, 'age': newAge};
    }
}