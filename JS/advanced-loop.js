const basket = ['apples', 'oranges', 'bananas']
const detailedBasket = {
  apples: 5,
  oranges: 7,
  bananas: 10
}

//iterating: arrays, strings

//for of
for (item of basket){
  console.log(item);
}

//enumerating: objects

//for in
for(item in detailedBasket){
  console.log(item);
}
