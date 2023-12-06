// Iteration: The for loop

// console.log('1')
// console.log('2')
// console.log('3')    
// console.log('4')
// console.log('5')

// for(let i = 0; i <= 10; i++) {
//     console.log('lifting weight repetition ' + i)
// }

// Looping Arrays, Breaking and Continuing

const emirArray = [
    'Emirlan',
    'Nurlan uulu',
    2023-2002,
    'student',
    ['Perizat, Nurbek, Marsel'],
    true
];

const types = [];

// console.log(emirArray[0])
// console.log(emirArray[1])
// console.log(emirArray[2])

for(let i = 0; i < emirArray.length; i++) {
    console.log(emirArray[i], typeof emirArray[i])
    // filling types array
    // types[i] = typeof emirArray[i];
    types.push(typeof emirArray[i])
}

console.log(types)


const years = [1991, 2007, 1969, 2002];
const ages = [];

for(let i = 0; i < years.length; i++) {
    ages.push(2023- years[i])
}
console.log(ages)

// continue and break
console.log('---only strings---')
for(let i = 0; i < emirArray.length; i++) {
    if(typeof emirArray[i] !== 'string') continue
    console.log(emirArray[i], typeof emirArray[i])
}

console.log('---break with number---')
for(let i = 0; i < emirArray.length; i++) {
    if(typeof emirArray[i] === 'number') break
    console.log(emirArray[i], typeof emirArray[i])
}
