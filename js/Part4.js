"use strict";

function sum(number) {
    let firstNumber = number;

    function add(...numbers) {
        return numbers.reduce((_, element) => firstNumber += element, firstNumber);
    }

    return add;
}

const two = sum(2); // 2^ is the first (base) number.

console.log(two(1)); // 2^ + 1 = 3*;
console.log(two(3)); // 3* + 3 = 6*;
console.log(two(5)); // 6* + 5 = 11*;
console.log(two(7, 2)); // 11* + 7 + 2 = 20*.
console.log(two(12) + two(9));
