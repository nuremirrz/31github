'use strict'

// Working With Strings - Part 3

// Split and Join
console.log('a+vey+nice+string'.split('+'));
console.log('Emirlan Mamatov'.split(' '));

const [firstName, lastName] = 'Emirlan Mamatov'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

// Capitalize Name
const capitalizeName = function(name) {
    const names = name.split(' ');
    const namesUpper = [];

    for(const n of names) {
        // namesUpper.push(n[0].toUpperCase() + n.slice(1));
        namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
    }
    console.log(namesUpper.join(' '));
};

capitalizeName('nurlan uulu emirlan');
capitalizeName('adam sandler');
capitalizeName('mary jackson');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Emirlan'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
};

console.log(maskCreditCard(32623762983474692));
console.log(maskCreditCard(474692));
console.log(maskCreditCard('231244692'));

//Repeat
const message2 = 'Bad weather... All Departes Delayed... \n';
console.log(message2.repeat(5));

const planesInLine = function(n) {
    console.log(`There are ${n} planes in line`)
}

planesInLine(5);
planesInLine(2);
planesInLine(15);