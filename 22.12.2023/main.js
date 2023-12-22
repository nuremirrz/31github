// The this Keyword in Practice
'use strict';
// console.log(this);

// const calcAge = function (birthYear) {
//     console.log(2023 - birthYear);
//     // console.log(this);
// };
// calcAge(2002)

// const calcAgeArrow = birthYear => {
//     console.log(2023 - birthYear);
//     // console.log(this);
// };
// calcAgeArrow(1992)

// const jonas = {
//     year: 2002,
//     calcAge: function () {
//         console.log(this);
//         console.log(2023 - this.year);
//     }
// }
// jonas.calcAge();

// const matilda = {
//     year: 2015,
// }

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// f();

// var firstName = 'Matilda'

const jonas = {
    firstName: 'Jonas',
    year: 1992,
    calcAge: function () {
        // console.log(this);
        console.log(2023 - this.year);

        // sloution 1
        // const self = this; // self or that
        // const isMilenial = function () {
        //     console.log(self)
        //     console.log(self.year >= 1981 && self.year <= 1996);            
        // }

        // solution 2
        const isMilenial = () => {
            console.log(this)
            console.log(this.year >= 1981 && this.year <= 1996);
        }

        isMilenial();
    },

    great: () => {
        console.log(this)
        console.log(`Hey ${this.firstName}`)
    },
}
jonas.great()
jonas.calcAge()

// argument keyword
const addExpr = function (a, b) {
    console.log(arguments)
    return a + b;
}
addExpr(5, 2);
addExpr(5, 2, 6, 9);

var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
};
addArrow(1, 3, 2);