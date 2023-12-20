// Scope and The Scope Chain

// global scope

const me = 'Emir';
const job = 'student';
const age = 21;

// function scope (local scope)

// function calcAge(birthYear) {
//     const now = 2023;
//     const age = now - birthYear;
//     return age;
// }

// console.log(now);

// block scope(es6)
// if (condition) {
//     ///
// }

const myName = 'Emirlan';

function first() {
    const age = 31;

    if (age >= 30) {
        const decade = 3;
        var millenial = true
    }

    function second() {
        const job = 'teacher';
        console.log(`${myName} is a ${age}-old ${job}`)
    }

    second()
}

first();

//variable lookup in scope chain