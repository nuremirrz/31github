// reviewing functions

const calcAge = function(birthYear) {
    return 2023 - birthYear
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0) {
        console.log(`${firstName} retired in ${retirement} years`)
        return retirement;
    } else {
        console.log(`${firstName} has already retired`)
        return -1;
    }


    //return `${firstName} retired in ${retirement} years`
}

console.log(yearsUntilRetirement(2002, 'Emirlan'));
console.log(yearsUntilRetirement(1000, 'Aidai'));