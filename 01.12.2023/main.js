//function

function logger() {
    console.log('My name is Emirlan')
}

// calling/ running/ invoking function
logger()
logger()
logger()

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice; 
}

const appleJuice = fruitProcessor(3, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
console.log(num);