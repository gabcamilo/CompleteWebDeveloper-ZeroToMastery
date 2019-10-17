//INSTANTIATION

class Player {
  constructor(name, type){
    console.log('player: ', this)
    this.name = name;
    this.type = type;
  }
  introduce(){
    console.log(`Hi, I am ${this.name}, I'm a  ${this.type}!!!`);
    console.log(this);
  }
}

class Wizard extends Player {
  constructor(name, type){
    super(name, type);
    console.log('wizard: ', this);
  }

  play(){
    console.log(`WEEEEEE I'm a ${this.type}`);
    console.log(this);
  }
}

const w1 = new Wizard('Shelly', 'Dark Magic');
const w2 = new Wizard('Shawn', 'Healer');
const w3 = new Wizard('Andrei', 'Guide');

//PASS BY REFERENCE AND BY VALUE

let obj = {
  a: 'a',
  b: 'b',
  c: {
    deep: 'try and copy me'
  }
}

let notAClone = obj; //pass by reference
let clone1 = Object.assign({}, obj); //shallow clone
let clone2 = {...obj} //shallow clone
let superClone = JSON.parse(JSON.stringify(obj)); //deep clone (performance issues)

obj.c.deep = 'ahhaha';
obj.b = 'newbie';

console.log(obj);
console.log(notAClone);
console.log(clone1);
console.log(clone2);
console.log(superClone);
