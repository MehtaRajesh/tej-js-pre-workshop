// YOUR CODE BELOW
function zooInventory(data){
    let newData = [];
    data.forEach(element => {
        let animalDescription ='';
        animalDescription = `${element[0]} the ${element[1][0]} is ${element[1][1]}.`;
        newData.push(animalDescription);
        
    });

    return newData;
}