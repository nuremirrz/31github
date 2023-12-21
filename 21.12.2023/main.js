// hoisting

// const myName = 'Emirlan';

// if(myName === 'Emirlan') {
//     console.log(`Emirlan is a ${job}`);
//     const age = 2023 - 2002;
//     console.log(age);
//     const job = 'student';
//     console.log(x); 
// }

// variable
console.log(me);
// console.log(job);
// console.log(age);

var me = 'Emirlan';
let job = 'student';
const year = 2002;

// functions 

console.log(addDecl(2,3));
// console.log(addExp(2,3));
// console.log(addArrow);
// console.log(addArrow(2,3));

function addDecl(a, b) {
    return a + b;
}

const addExp = function(a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;

//  example
if(!numProducts) deleteShoppingCart()

var numProducts = 10;

function deleteShoppingCart() {
    console.log('all products deleted')
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);