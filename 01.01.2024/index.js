'use strict'

// Maps:Iteration

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    [days[4]]: {
        open: 12,
        close: 22,
    },
    [days[5]]: {
        open: 11,
        close: 23,
    },
    [days[6]]: {
        open: 0,
        close: 24,
    }
}

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    
    openingHours,

    order(starterIndex, mainIndex) {
         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },

    orderDelivery({
        starterIndex = 1, 
        mainIndex = 0, 
        time = '21:30', 
        address
    }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`)
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`);
    },

    orderPizza(mainIngredient, ...otherIngredient) {
        console.log(mainIngredient);
        console.log(otherIngredient);
    }
};

const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'correct'],
    [false, 'try again'],
])

console.log(question);

// Convert object to Map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get('question'))
for(const [key,value] of question) {
    if(typeof key === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}
// const answer = Number(prompt(`Your Answer`));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer))
// if(answer === 3) {
//     console.log(question.get(true))
// }else{
//     console.log(question.get(false))
// }

// Convert Map to Array
console.log([...question])
// console.log(question.entries())
console.log([...question.keys()])
console.log([...question.values()])
