// // YOUR CODE BELOW
function searchParty(name, world) {
  if (world === name) {
    return [];
  }

  if (Array.isArray(world)) {
    for (let item of world) {
      let path = searchParty(name, item);

      if (path !== null) {
        return path;
      }
    }
  }

  else if (world !== null && typeof world === 'object') {
    for (let key in world) {
      let path = searchParty(name, world[key]);

      if (path !== null) {
        return [key, ...path];
      }
    }
  }

  return null;
}
