// Arrays

const friend1 = "Marsel";
const friend2 = "Erlan";
const friend3 = "Beknazar";

const friends = ['Marsel', 'Erlan', 'Beknazar'];
console.log(friends)

const y = new Array(1999, 2000,2001);

console.log(friends[0])
console.log(friends[2])

console.log(friends.length);
console.log(friends[friends.length-1])

friends[1] = 'Nurai'
console.log(friends)
// friends = ['Bob', 'Ann']

const firstName = 'Emirlan'
const emirlan = [firstName, 'Nurlan uulu', 2023-2002, 'student', friends]
console.log(emirlan)
console.log(emirlan.length)

//exercise
const calcAge = function(birthYear) {
    return 2023 - birthYear
}

const years = [1990, 1973, 1965, 2000, 2002, 2011]

console.log(calcAge(years));

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[3]);
const age5 = calcAge(years[4]);
const age6 = calcAge(years[5]);

console.log(age1, age2, age3, age4, age5,age6)

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])];
console.log(ages)