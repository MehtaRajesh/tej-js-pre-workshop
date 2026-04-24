// Edit the code below
let place = 'Planet Earth';

function fullstackHQ(){
  return middleFunction('United States');

  function middleFunction(placeC) {
    return innerFunction('New York State');

    function innerFunction(placeS) {
      placeSS = 'New York City';
      return innermostFunction();

      function innermostFunction() {
        return 'Fullstack HQ is at ' + place + ', ' + placeC + ', ' + placeS + ', ' + placeSS;
      }
    }
  }
}
