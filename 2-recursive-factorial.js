function factorial(n) {
    if (n === 1) {
        return 1;
    }

    return n * factorial(n-1);
}

console.log(factorial(1)); // 1
console.log(factorial(5)); // 120
console.log(factorial(100)); // 9.332621544394418e+157
