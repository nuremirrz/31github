'use strict'

// Working With Strings - Part 1

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

const airline = 'Manas Air Kyrgyzstan';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('a320'[0]);

console.log(airline.length);
console.log('B233'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Air'));

console.log(airline.slice(4));
console.log(airline.slice(4,7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-5));
console.log(airline.slice(1, -4));

const checkMiddleSeat = function (seat) {
    const s = seat.slice(-1);
    // B and E are middle seats
    if(s === 'B' || s === 'E') console.log('You got the middle seat');
    else console.log('You got lucky')
}

checkMiddleSeat('11B')
checkMiddleSeat('54C')
checkMiddleSeat('1E')

console.log(new String('Emirlan'));
console.log(typeof new String('Emirlan'));
console.log('////////////');
console.log(typeof new String('Emirlan').slice(1));
console.log('////////////');
console.log('Emirlan');
console.log(typeof 'Emirlan');