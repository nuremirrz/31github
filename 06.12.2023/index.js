// Looping Backwards and Loops in Loops

const emirArray = [
    'Emirlan',
    'Nurlan uulu',
    2023-2002,
    'student',
    ['Perizat, Nurbek, Marsel'],
    true
];
// 0, 1, 2, 3, 4
// 4, 3, 2, 1, 0

for(let i = emirArray.length -1; i >= 0; i--) {
    console.log(i, emirArray[i]);
}

for(let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------Starting exercise ${exercise}`)

    for(let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}:Lifting repetition ${rep}`)
    }
}