// Primitives vs. Objects (Primitive vs. Reference Types)
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
    name: 'Emirlan',
    age: 21,
}
const friend = me;
friend.age = 31;
console.log('Friend:', friend);
console.log('Me:', me);