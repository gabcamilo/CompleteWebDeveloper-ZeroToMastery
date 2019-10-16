// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const forEachArray = [];
array.forEach((obj)=>{
  let {username} = obj;
  forEachArray.push(username+'!');
})
console.log('forEachArray', forEachArray);

//Create an array using map that has all the usernames with a "? to each of the usernames
const mapArray = array.map(obj => {
  let {username} = obj;
  return username + '?';
});
console.log('mapArray',mapArray);

//Filter the array to only include users who are on team: red
const filteredArray = array.filter((obj) => obj.team === 'red') //implicit return
console.log('filteredArray',filteredArray);


//Find out the total score of all users using reduce
const totalScore = array.reduce((acc, obj)=> acc+obj.score, 0); //implicit return


// (1), what is the value of i? //index of the array
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	//console.log(num, i);
	//alert(num);
	return num * 2;
});

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
let newList = array.map(obj => {
  obj.items =  obj.items.map(item => item + '!');  //implicit return
  return obj;
});