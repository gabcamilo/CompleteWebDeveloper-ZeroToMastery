//Advanced Array
const array  = [1, 2, 10, 16];
const double = [];
const newArray = array.forEach(num => {
  double.push(num*2);
});

console.log('foreach', double);

//MAP
const mapArray = aray.map(num => num*2);
console.log('map', mapArray);

//FILTER
const filterArray = array.filter(num => num > 5);
console.log('filter', filterArray);

//REDUCE
const reduceArray = array.reduce((accumulator, num) => {
  return accumulator + num;
}, 0);
console.log('reduce', reduceArray);

//