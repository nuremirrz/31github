'use strict';

// Maps:Fundamentals

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

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Frienze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'))
rest
    .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('closed', 23)
    .set(true, 'We are open ')
    .set(false, 'We are closed ')

console.log(rest.get('name'))
console.log(rest.get(true))    
console.log(rest.get(1));

const time  = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('closed')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear()

const arr = [1,2];
rest.set(arr, 'Test')
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
