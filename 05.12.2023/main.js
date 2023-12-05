//                   Dot vs. Braccket Notation        //

// const emirlan = {
//     firstName: 'Emirlan',
//     lastName: 'Nurlan uulu',
//     age: 2023-2002,
//     job: 'student',
//     friends: ['Perizat', 'Nurbek', 'Marsel']
// }
//console.log(emirlan);

//console.log(emirlan.lastName);
//console.log(emirlan['lastName']);

//const nameKey = 'Name';
//console.log(emirlan['first' + nameKey]);
//console.log(emirlan['last' + nameKey]);

//console.log(emirlan.'first' + nameKey);// unexpected string

//const interedIn = prompt('what do you want to know about Emirlan? Choose between firstName, lastName, age, job and friends');

// if(emirlan[interedIn]) {
//     console.log(emirlan[interedIn]);
// }else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job and friends')
// }

// emirlan.location = 'Bishkek';
// emirlan['twitter'] = '@samoironya';
//console.log(emirlan);

//challenge
// 'Emirlan has 3 friends, and his best friend is called Marsel'
//console.log(`${emirlan.firstName} has ${emirlan.friends.length} friends, and his best friend is ${emirlan.friends[2]}`)



/////////////////// object methods  ////////////////

const emirlan = {
    firstName: 'Emirlan',
    lastName: 'Nurlan uulu',
    birthYear: 2002,
    job: 'student',
    friends: ['Perizat', 'Nurbek', 'Marsel'],
    hasDriverLicense: true,

    // calcAge: function(birthYear) {
    //     return 2023 - birthYear;
    // }

    // calcAge: function() {
    //     //console.log(this)
    //     return 2023 - this.birthYear;
    // }

    calcAge: function() {
        this.age = 2023 - this.birthYear
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is ${this.calcAge()}-year old ${emirlan.job} and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`;
    }
};

console.log(emirlan.calcAge()) //way to show function
// console.log(emirlan['calcAge'](2000))

console.log(emirlan.calcAge())
console.log(emirlan.calcAge())
console.log(emirlan.calcAge())

// Challenge
// Emirlan is 21-year ols student and he has a driver's license 
console.log(emirlan.getSummary())