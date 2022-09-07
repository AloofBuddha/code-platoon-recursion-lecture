// This is missing it's base case on purpose, try running it to see what happens

function factorial(n) {
    return n * factorial(n-1);
}

console.log(factorial(5)); // UH-OH!