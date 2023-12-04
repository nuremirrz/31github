//  Basic Array Operations (Methods)

const friends = ['Marsel', 'Erlan', 'Beknazar'];

// add elements
const newLength = friends.push('Perizat');  //add to the end
console.log(friends);
console.log(newLength);

friends.unshift('Isan');  //add to the beginning
console.log(friends);

// remove elements
friends.pop(); // remove last element of the array
const popped = friends.pop() // return the last element of the arrray 
console.log(popped);
console.log(friends);

friends.shift() // remove first element of the array
// const shifted = friends.shift() // return the first element of the array
// console.log(shifted);
console.log(friends);

console.log(friends.indexOf('Erlan'));
console.log(friends.indexOf('Isan'));

friends.push(23)
console.log(friends.includes('Erlan'));
console.log(friends.includes('Isan'));
console.log(friends.includes('23')); // fasle because 23(number) != '23'(string)

if(friends.includes('Erlan')) {
    console.log('You have a friend called Erlan')
} else {
    console.log("You havn't got a friend called Erlan")
}


