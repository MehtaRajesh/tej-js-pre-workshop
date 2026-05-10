// YOUR CODE BELOW
function whosASpecial(list){
    let message = '';
    list.forEach(element => {
        message += ` ${element.name} the ${element.species} is very special!`;
    });
    return message.trim();
}