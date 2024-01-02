'use strict'

// Working With Strings - Part 2

const airline = 'Manas Air Kyrgyzstan';
const plane = 'A320';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
function capitalizationName(name) {
    const lowerName = name.toLowerCase();
    const correctName = lowerName[0].toUpperCase() + lowerName.slice(1);
    console.log(correctName)
}

capitalizationName('eMiRlAn')

// Comparing emails 
const email = 'hello@emir.io';
const loginEmail = '   Hello@emIr.iO \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(normalizedEmail === email)

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS) 

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const planE = 'Airbus A332neo';
console.log(planE.includes('A332'));
console.log(planE.includes('Boeing'));
console.log(planE.includes('Airb'));

if(planE.startsWith('Airbus') && planE.endsWith('neo')) {
    console.log('Part of the new AIRbus family')
}

// Practice exercise 
const checkBaggage = function(items) {
    const baggage = items.toLowerCase();

    if(baggage.includes('knife') || baggage.includes('gun')) {
        console.log('You are NOT allowed on board')
    }else{
        console.log('Welcome aboard!')
    }
}

checkBaggage('I have a laptop, some food and a pocket Knife');
checkBaggage('I have socks and camera');
checkBaggage('Get some snacks and a gun for protection');