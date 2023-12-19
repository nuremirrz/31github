// 89. An High-Level Overview of JavaScript

// 90. The JavaScript Engine and Runtime

// 91. Execution Contexts and The Call Stack
const name = 'Emir';

const first = () => {
    let a = 1;
    const b = second(7, 9);
    a = a + b;
    return a;
};

function second(x, y) {
    var c = 2;
    return c;
}

const x = first();