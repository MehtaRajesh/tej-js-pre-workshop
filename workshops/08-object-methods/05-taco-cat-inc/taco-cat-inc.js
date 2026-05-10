let tacoCatInc = {
  gourmetShell: {
    'hard treat shell': {cost: 2, quantity: 100},
    'soft treat shell': {cost: 1.5, quantity: 100}
  },

  gourmetFishFilling: {
    'salmon': {cost: 5, quantity: 100},
    'tuna': {cost: 5.5, quantity: 100},
    'sardines': {cost: 1.5, quantity: 100}
  },

  gourmetVeggie: {
    'cat grass': {cost: 1, quantity: 100}
  },

  gourmetSeasoning: {
    'cat nip': {cost: 0.5, quantity: 100},
    'treat dust': {cost: 0.1, quantity: 100}
  },

  cash: 0
};

// YOUR CODE BELOW
tacoCatInc.currentInventory = function(){
  let currentInventoryValue = 0;
  
  for(let key in this){
    if(typeof this[key] === 'object'){
      for(let item in this[key]){ 
        currentInventoryValue += (this[key][item]).cost * (this[key][item]).quantity;
      }
    }
  }
  return currentInventoryValue;
}

tacoCatInc.sale = function(order){
  let totalSalesValue = 0;
  for(let key in order){
    let orderProduct = order[key];
    if(this.hasOwnProperty(key)){
      if(this[key].hasOwnProperty(orderProduct)){
        let currentProduct = this[key][orderProduct];
        currentProduct.quantity--;
        totalSalesValue += currentProduct.cost * 1;
        this.cash += currentProduct.cost * 1;
      }
    }   
  }
  return totalSalesValue;
}