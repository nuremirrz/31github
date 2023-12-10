'use strict';
// How to Think Like a Developer: Become a Problem Solver!
// Using Google, StackOverflow and MDN

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]

const calcTempAmplitutdeNew = function(t1, t2) {

    const arr1 = ['a', 'b', 'c'];
    const arr2 = ['d', 'e', 'f'];
    const arr3 = arr1.concat(arr2)
    console.log(arr3)

    const temps = t1.concat(t2);
    console.log(temps)

    let max = temps[0];
    let min = temps[0];
    for(let i=0; i < temps.length; i++) {
        const currentTemp = temps[i];

        if(typeof currentTemp !== 'number') continue
        if(currentTemp > max) max = currentTemp;
        if(currentTemp < min) min = currentTemp;

    }
    console.log(max, min)
    return max - min
}
const amplitudeNew = calcTempAmplitutdeNew([3,5,1], [2,1,8]);
console.log(amplitudeNew)





