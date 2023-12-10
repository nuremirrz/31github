// Debugging with the Console and Breakpoints

const measureKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'cesius',
        //c) fix the bag
        //value: Number(prompt('Degrees celsius:'))
        value: 10,
    }

    //b) find the bag
    console.log(measurement)
    
    //console.log()
    //console.warn()
    //console.error()
    //console.table()

    const kelvin = measurement.value + 273;
    return kelvin;
}

//a) identify the bag
console.log(measureKelvin());



//a) identify the bag
//b) find the bag
//c) fix the bag
//d) prevent the bag


//using debugger
const calcTempAmplitutdeNew = function(t1, t2) {

    const arr1 = ['a', 'b', 'c'];
    const arr2 = ['d', 'e', 'f'];
    const arr3 = arr1.concat(arr2)
    console.log(arr3)

    const temps = t1.concat(t2);
    console.log(temps)

    let max = 0;
    let min = 0;

    for(let i=0; i < temps.length; i++) {
        const currentTemp = temps[i];

        if(typeof currentTemp !== 'number') continue

        //debugger;
        if(currentTemp > max) max = currentTemp;
        if(currentTemp < min) min = currentTemp;

    }
    console.log(max, min)
    return max - min
}
const amplitudeNew = calcTempAmplitutdeNew([3,5,1], [2,1,8]);

// a)identify
console.log(amplitudeNew)

