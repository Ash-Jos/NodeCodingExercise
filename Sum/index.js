"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumFactorial = exports.divide = exports.multiply = exports.minus = exports.sum = void 0;
function sum(a, b) {
    return a + b;
}
exports.sum = sum;
function minus(a, b) {
    return a - b;
}
exports.minus = minus;
function multiply(a, b) {
    return a * b;
}
exports.multiply = multiply;
function divide(a, b) {
    return a / b;
}
exports.divide = divide;
// for (let i = 1; i <= 7; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "#";
//   }
//   console.log(row);
// }
// for (let i = 1; i <= 100; i++) {
//   let output = "";
//   if (i % 3 === 0) {
//     output += "Fizz";
//   }
//   if (i % 5 === 0) {
//     output += "Buzz";
//   }
//   console.log(output || i);
// }
function sumFactorial() {
    var total = 0, count = 1;
    while (count <= 10) {
        total += count;
        count += 1;
    }
    console.log(total);
}
exports.sumFactorial = sumFactorial;
