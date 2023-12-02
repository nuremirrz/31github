// Arrow function

// function expression
// const calcAge2 = function (birthYear) {
//     return 2023 - birthYear;
// }

//arrow function
const calcAge3 = birthYear => 2023 - birthYear;
const age3 = calcAge3(1991)
console.log(age3)

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retired in ${retirement} years`
}

console.log(yearsUntilRetirement(2002, 'Emir'))
console.log(yearsUntilRetirement(2001, 'Nelya'))
