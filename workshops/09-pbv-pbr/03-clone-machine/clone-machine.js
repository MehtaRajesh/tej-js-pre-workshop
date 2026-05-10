// YOUR CODE BELOW

function cloneMachine(obj){
    let newName = obj.name.charAt(0).toUpperCase() + obj.name.slice(1)+'Clone';
    const newObject = new Object({   ///even without new Object , it's okey
        'name':newName,
        'species':obj.species,
        'offspring':[]
    });
    obj.offspring.push(newName);

    return newObject;
}