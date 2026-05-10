// YOUR CODE BELOW
function allSystemsGo(obj) {
    if (typeof obj === 'boolean') {
        return obj;
    }

    for (let key of Object.keys(obj)) {
        if (!allSystemsGo(obj[key])) {
            return false;
        }
    }
    return true;
    // return Object.keys(obj).every(key => allSystemsGo(obj[key]));
}
