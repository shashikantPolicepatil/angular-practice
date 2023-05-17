let frouts:string[];
frouts = ['mango', 'banana'];
console.log(frouts);

let animals: Array<string>; //one only type
animals = ['tiger', 'dog', 'cat'];

console.log(animals);

let persons: Array<string | number>; //only two type
persons = ['Ram', 20, 'Sita', '30'];
console.log(persons);

let anyval: Array<any>; //any type
anyval = ['Ram', 20, 'Sita', '30',true,false];

console.log(anyval);