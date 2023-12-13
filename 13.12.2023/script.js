'use strict'
//  JavaScript in the Browser: DOM and Events Fundamentals

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 21;

// Handling Click Events

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;


document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    // when ther is no input
    if(!guess) {
        document.querySelector('.message').textContent = 'No Number'
    // when player win    
    }else if(guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';        
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
    // when guess is too high            
    }else if(guess > secretNumber) {
        if(score > 1) {
            document.querySelector('.message').textContent = 'Too High';
            score--;
            document.querySelector('.score').textContent = score
        }else{
            document.querySelector('.message').textContent = 'You lost the game';
            document.querySelector('.score').textContent = 0;
        }
    // when guess is too low    
    }else if(guess < secretNumber) {
        if(score > 1) {
            document.querySelector('.message').textContent = 'Too Low';
            score--; 
            document.querySelector('.score').textContent = score
        }else{
            document.querySelector('.message').textContent = 'You lost the game';
            document.querySelector('.score').textContent = 0;

        } 
    }
})