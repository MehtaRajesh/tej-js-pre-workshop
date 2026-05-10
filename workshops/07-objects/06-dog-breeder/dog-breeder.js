// YOUR CODE BELOW

function dogBreeder(name, age){
    if(typeof name === 'number'){
        age = name;
        name = 'Steve';
    }
    name = name??'Steve';
    age = age??0;
    let dog ={
        'name':name,
        'age':age
    }
    return dog;
}