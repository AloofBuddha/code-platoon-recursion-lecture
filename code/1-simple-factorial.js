function factorial(n) {
    let result = 1;

    for (let curr = n; curr > 1; curr--) {
        result *= curr;
    }

    return result;
}

console.log(factorial(1)); // 1
console.log(factorial(5)); // 120
console.log(factorial(100)); // 9.332621544394418e+157
