console.log('hello');
let name = 'Mosh';
let person={
    name: 'Vidisha',
    age: 30,
};

// Dot notation
person.name = 'John';
console.log(person.name);

// Bracket notation
person['name'] = 'Mary';
console.log(person.name);

let selectedColors =['red', 'blue'];
selectedColors[2] = 'green';

console.log(selectedColors.length);
console.log(selectedColors[1]);


function greet(name1){
    console.log("Hello "+name1);
}

greet('John');




