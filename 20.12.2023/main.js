'use strict'
// Scope and The Scope Chain

// global scope

// const me = 'Emir';
// const job = 'student';
// const age = 21;

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

// const myName = 'Emirlan';

// function first() {
//     const age = 31;

//     if (age >= 30) {
//         const decade = 3;
//         var millenial = true
//     }

//     function second() {
//         const job = 'teacher';
//         console.log(`${myName} is a ${age}-old ${job}`)
//     }

//     second()
// }

// first();

//variable lookup in scope chain

// scopping in practice

function calcAge(birthYear) {
    const age = 2023 - birthYear;
   
    function printAge() {
       let output = `${firstName}, You are ${age}, born in ${birthYear}`
        console.log(output); 

        if(birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;

            //creating NEW variable with same name as outer scope's variable
            const firstName = 'Steven';
            //reassigning outer scope's variable

            output = 'NEW OUTPUT'

            const str = `Oh, and  you are a millenial, ${firstName}`
            console.log(str);

            function add(a, b) {
                return a + b;
            }

        }
        // console.log(str);
        console.log(millenial);
        // console.log(add(2, 3)); 
        console.log(output);        

    }
    printAge()

    return age;
}

const firstName = ' Emirlan'
calcAge(1992)